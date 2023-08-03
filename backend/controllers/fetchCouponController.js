const Order = require("../models/Order");
const Coupon = require("../models/Coupon");

const getCouponList = async (req, res) => {
  try {
    const order = await Order.findOne({ _id: "64badd810401da3b3f21ed35" }); // Assuming you want to get multiple orders
    const couponCodesList = order.couponList.map((coupon) => {
        console.log(coupon);
        return coupon;
    });
    console.log(couponCodesList);
    // Use Promise.all to fetch coupons for all the coupon codes in parallel
    const couponList = await Promise.all(
      couponCodesList.map(async (couponCode) => {
        console.log(couponCode.toHexString());
        const coupon = await Coupon.findById(couponCode.toHexString());
        console.log(coupon);    
        return coupon;
      })
    );

    console.log(couponList);

    // Assuming you want to send the coupon list as the response for Express route
    res.json(couponList);
  } catch (err) {
    console.error("Error while fetching coupons:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getCouponList, // Export the function correctly
};
