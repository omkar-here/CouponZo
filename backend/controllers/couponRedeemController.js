const mongoose = require("mongoose");
const Coupon = require("../models/Coupon");
const User = require("../models/User");

exports.verifyCoupon = async (req, res) => {
  let { userId, couponCode, quantity, totalAmount, productIdList } = req.body;

  quantity = parseInt(quantity);
  totalAmount = parseInt(totalAmount);

  const user = await User.findById(userId);
  console.log(user);

  let finalAmount = totalAmount;

  try {
    if (user) {
      const coupon = await Coupon.findOne({ code: couponCode });
      console.log(coupon);

      if (userId === coupon.userId._id.toString()) {
        // CART

        console.log("CART");
        if (coupon.applicableTo === "cart") {
          if (coupon.discountType === "amount") {
            finalAmount = await applyAmountDiscount(
              coupon,
              totalAmount,
              quantity
            );
          } else if (coupon.discountType === "percentage") {
            console.log("PERCENTAGE");
            finalAmount = applyPercentageDiscount(
              coupon,
              totalAmount,
              quantity
            );
          } else {
            res.status(400).json({ message: "Coupon not valid for this cart" });
          }
        }

        // SKU
        else if (coupon.applicableTo === "sku") {
          console.log("SKU");
          if (productIdList.includes(coupon.productId)) {
            if (coupon.discountType === "amount") {
              finalAmount = applyAmountDiscount(coupon, totalAmount, quantity);
            } else if (coupon.discountType === "percentage") {
              finalAmount = applyPercentageDiscount(
                coupon,
                totalAmount,
                quantity
              );
            }
          } else {
            res.json({ message: "Coupon not valid for this SKU" });
          }
        }
      }

      if (finalAmount > coupon.maxDiscountAmount)
        finalAmount = totalAmount - coupon.maxDiscountAmount;

      res.status(200).json({
        status: "success",
        message: "Coupon applied successfully",
        data: {
          finalAmount: finalAmount,
        },
      });
    } else {
      res.status(400).json({ message: "Not a valid user" });
    }
  } catch (error) {
    console.log(error);
  }
};

function applyAmountDiscount(coupon, totalAmount, quantity) {
  if (coupon.conditions === "none") {
    console.log(coupon.discountValue, totalAmount);
    return totalAmount - coupon.discountValue;
  } else if (coupon.conditions === "minCartValue") {
    console.log(coupon.discountValue, totalAmount);
    if (totalAmount >= coupon.conditionsValue) {
      return totalAmount - coupon.discountValue;
    }
  } else if (coupon.conditions === "minCartQuantity") {
    if (quantity >= coupon.conditionsValue) {
      console.log(coupon.discountValue, totalAmount);
      return totalAmount - coupon.discountValue;
    }
  } else {
    res.status(400).json({ message: "Coupon conditions not met" });
  }
}

function applyPercentageDiscount(coupon, totalAmount, quantity) {
  if (coupon.conditions === "none") {
    console.log(coupon.discountValue, totalAmount, "h");
    return totalAmount - (totalAmount * coupon.discountValue) / 100;
  } else if (coupon.conditions === "minCartValue") {
    console.log(coupon.conditionsValue, totalAmount, "y");
    if (totalAmount >= coupon.conditionsValue) {
      console.log(coupon.discountValue, totalAmount, "x");
      return totalAmount - (totalAmount * coupon.discountValue) / 100;
    }
  } else if (coupon.conditions === "minCartQuantity") {
    console.log(quantity, coupon.conditionsValue, "a");
    if (quantity >= coupon.conditionsValue) {
      console.log(coupon.discountValue, totalAmount, "z");
      return totalAmount - (totalAmount * coupon.discountValue) / 100;
    }
  } else {
    res.status(400).json({ message: "Coupon conditions not met" });
  }
}

// Contact us for further changes
