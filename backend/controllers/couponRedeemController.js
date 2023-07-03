const Coupon = require("../models/Coupon");
const User = require("../models/User");

exports.verifyCoupon = async (req, res) => {
  const { userId, couponCode, quantity, totalAmount, productIdList } = req.body;
  console.log(userId, couponCode, quantity, totalAmount, productIdList);
  const user = await User.find({ _id: userId });
  let finalAmount = totalAmount;

  try {
    if (user) {
      const coupon = await Coupon.findOne({ code: couponCode });

      if (userId === coupon.userId) {
        // CART
        if (coupon.applicableTo === "cart") {
          if (coupon.discountType === "amount") {
            applyAmountDiscount(coupon, totalAmount, quantity);
          } else if (coupon.discountType === "percentage") {
            applyPercentageDiscount(coupon, totalAmount, quantity);
          } else {
            res.status(400).json({ message: "Coupon not valid for this cart" });
          }
        }

        // SKU
        else if (coupon.applicableTo === "sku") {
          if (productIdList.includes(coupon.productId)) {
            if (coupon.discountType === "amount") {
              applyAmountDiscount(coupon, totalAmount, quantity);
            } else if (coupon.discountType === "percentage") {
              applyPercentageDiscount(coupon, totalAmount, quantity);
            }
          } else {
            res.json({ message: "Coupon not valid for this SKU" });
          }
        }
      }

      res.status(200).json({
        status: "success",
        message: "Coupon applied successfully",
        data: {
          finalAmount,
        },
      });
    } else {
      res.status(400).json({ message: "Not a valid user" });
    }
  } catch (error) {
    console.log(error);
  }
};

async function applyAmountDiscount(coupon, totalAmount, quantity) {
  if (coupon.conditions === "none") {
    finalAmount = totalAmount - coupon.discountValue;
  } else if (coupon.conditions === "minCartValue") {
    if (totalAmount >= coupon.conditionValue) {
      finalAmount = totalAmount - coupon.discountValue;
    }
  } else if (coupon.conditions === "minCartQuantity") {
    if (quantity >= coupon.conditionValue) {
      finalAmount = totalAmount - coupon.discountValue;
    }
  } else {
    res.status(400).json({ message: "Coupon conditions not met" });
  }
}

async function applyPercentageDiscount(coupon, totalAmount, quantity) {
  if (coupon.conditions === "none") {
    finalAmount = totalAmount - (totalAmount * coupon.discountValue) / 100;
  } else if (coupon.conditions === "minCartValue") {
    if (totalAmount >= coupon.conditionValue) {
      finalAmount = totalAmount - (totalAmount * coupon.discountValue) / 100;
    }
  } else if (coupon.conditions === "minCartQuantity") {
    if (quantity >= coupon.conditionValue) {
      finalAmount = totalAmount - (totalAmount * coupon.discountValue) / 100;
    }
  } else {
    res.status(400).json({ message: "Coupon conditions not met" });
  }
}

// Contact us for further changes
