const Order = require("../models/Order");
const Coupon = require("../models/Coupon");

const getCouponList = async (req, res) => {
  console.log(req.params);
  const { orderId } = req.query;

  try {
    console.log(orderId);
    const order = await Order.findById(orderId); // Assuming you want to get multiple orders
    console.log(order);
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

const getUserCouponList = async (req, res) => {
  const { userId } = req.query;

  try {
    const coupon = await Coupon.find({ userId: userId });
    const coupons = await res.json(coupon.length);
  } catch (err) {
    console.error("Error while fetching coupons:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getCouponList,
  getUserCouponList,
};
