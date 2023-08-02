const Order = require("../models/Order");
const Coupon = require("../models/Coupon");

const getCouponList = async (req, res) => {
  try {
    const orders = await Order.find(); // Assuming you want to get multiple orders
    const couponCodesList = orders.map((order) => order.couponCode);

    // Use Promise.all to fetch coupons for all the coupon codes in parallel
    const couponList = await Promise.all(
      couponCodesList.map(async (couponCode) => {
        const coupon = await Coupon.findOne({ code: couponCode });
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

module.exports = getCouponList;
