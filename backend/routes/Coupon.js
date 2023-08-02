const express = require("express");
const router = express.Router();
const coupon = require("../controllers/couponController");
const handleCoupon = require("../controllers/couponRedeemController");
const fetchOrders = require("../controllers/fetchOrderController");
const fetchCoupons = require("../controllers/fetchCouponController")
router.route("/coupon-gen").post(coupon.coupon_gen);
router.route("/coupon-list").get(coupon.coupon_list);
router.route("/verify").post(handleCoupon.verifyCoupon);
router.route("/confirm").post(handleCoupon.confirmCoupon);
router.route("/setRedemptionLimit").post(handleCoupon.setRedemptionLimit);
router.route("/fetchOrders").get(fetchOrders.getOrderList);
router.route("/fetchCoupons").get(fetchCoupons.getCouponList);
module.exports = router;
