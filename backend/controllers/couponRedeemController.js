const Coupon = require("../models/Coupon");
const User = require("../models/User");
const Order = require("../models/Order");

exports.confirmCoupon = async (req, res) => {
  let { couponCode, totalAmount,userId } = req.body;
  if (couponCode != null) {
    try {
      const user= await User.findById(userId);
      const coupon = await Coupon.findOne({ code: couponCode });

      if (coupon.redemptionLimit > 0 && coupon.expiry > Date.now()) {
        coupon.redemptionLimit -= 1;
        await coupon.save();
        const order = await Order.findOne({
          couponList: { $in: [couponCode] },
        });
        
        user.couponsUsed = user.couponsUsed + 1;
        await user.save();

        res.json({ message: "Coupon redeemed successfully" }).status(200);
      } else {
        res.json({ message: "Coupon limit exceeded" }).status(400);
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    res.json({ finalAmount: totalAmount });
  }
};
exports.setRedemptionLimit = async (req, res) => {
  console.log("Redmemtion");
  let { couponCode, totalAmount } = req.body;
  const coupon = await Coupon.findOne({ code: couponCode });
  console.log(coupon);
  coupon.redemptionLimit = 4;
  await coupon.save();
  res.json({ message: "Redemption Limit set successfully" }).status(200);
};
exports.verifyCoupon = async (req, res) => {
  let { userId, couponCode, quantity, totalAmount, productIdList } = req.body;
  quantity = parseInt(quantity);
  totalAmount = parseInt(totalAmount);
  console.log(userId, couponCode, quantity, totalAmount, productIdList);
  const user = await User.findById(userId);
  console.log(user);

  let finalAmount = totalAmount;

  try {
    if (user) {
      const coupon = await Coupon.findOne({ code: couponCode });

      console.log(coupon);

      if (coupon) {
        console.log(userId);
        console.log(coupon.userId.toString());

        if (userId === coupon.userId.toString()) {
          // CART

          console.log("CART");
          if (coupon.redemptionLimit > 0 && coupon.expiry > Date.now()) {
            if (coupon.applicableTo === "cart") {
              if (coupon.discountType === "amount") {
                finalAmount = applyAmountDiscount(
                  res,
                  coupon,
                  totalAmount,
                  quantity
                );
              } else if (coupon.discountType === "percentage") {
                console.log("PERCENTAGE");
                finalAmount = applyPercentageDiscount(
                  res,
                  coupon,
                  totalAmount,
                  quantity
                );
              } else {
                res
                  .status(400)
                  .json({ message: "ApplicableTo not specified correctly" });
              }
            }

            // SKU
            else if (coupon.applicableTo === "sku") {
              console.log("SKU");
              if (productIdList.includes(coupon.productId)) {
                if (coupon.discountType === "amount") {
                  finalAmount = applyAmountDiscount(
                    res,
                    coupon,
                    totalAmount,
                    quantity
                  );
                } else if (coupon.discountType === "percentage") {
                  finalAmount = applyPercentageDiscount(
                    res,
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
        }
      } else {
        console.log("Escape");
        res.status(401).json({ message: "Not a Valid Coupon Code" });
      }

      console.log(finalAmount);
      res.status(200).json({
        status: "success",
        message: "Coupon applied successfully",

        finalAmount: finalAmount,
      });
    } else {
      res.status(400).json({ message: "Not a valid user" });
    }
  } catch (error) {
    console.log(error);
  }
};

function applyAmountDiscount(res, coupon, totalAmount, quantity) {
  if (coupon.conditions === "none") {
    console.log(coupon.discountValue, totalAmount);
    return totalAmount - coupon.discountValue;
  } else if (coupon.conditions === "minCartValue") {
    console.log(coupon.discountValue, totalAmount);
    if (totalAmount >= coupon.conditionsValue) {
      return totalAmount - coupon.discountValue;
    } else {
      res.status(400).json({
        message: `Minimum Cart Value should be greater than ${coupon.conditionsValue}`,
      });
    }
  } else if (coupon.conditions === "minCartQuantity") {
    if (quantity >= coupon.conditionsValue) {
      console.log(coupon.discountValue, totalAmount);
      return totalAmount - coupon.discountValue;
    } else {
      res.status(400).json({
        message: `Minimum Cart Quantity should be greater than ${coupon.conditionsValue}`,
      });
    }
  } else {
    res.status(400).json({ message: "Coupon conditions not met" });
  }
}

function applyPercentageDiscount(res, coupon, totalAmount, quantity) {
  if (coupon.conditions === "none") {
    console.log(coupon.discountValue, totalAmount, "h");
    return totalAmount - (totalAmount * coupon.discountValue) / 100;
  } else if (coupon.conditions === "minCartValue") {
    console.log(coupon.conditionsValue, totalAmount, "y");
    if (totalAmount >= coupon.conditionsValue) {
      console.log(coupon.discountValue, totalAmount, "x");
      return totalAmount - (totalAmount * coupon.discountValue) / 100;
    } else {
      res.status(400).json({
        message: `Minimum Cart Value should be greater than ${coupon.conditionsValue}`,
      });
    }
  } else if (coupon.conditions === "minCartQuantity") {
    console.log(quantity, coupon.conditionsValue, "a");
    if (quantity >= coupon.conditionsValue) {
      console.log(coupon.discountValue, totalAmount, "z");
      return totalAmount - (totalAmount * coupon.discountValue) / 100;
    } else {
      res.status(400).json({
        message: `Minimum Cart Quantity should be greater than ${coupon.conditionsValue}`,
      });
    }
  } else {
    res.status(400).json({ message: "Coupon conditions not met" });
  }
}

// Contact us for further changes
