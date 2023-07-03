const express = require("express");
const router = express.Router();
const coupon = require("../controllers/couponController");
const verifyCoupon = require("../controllers/couponRedeemController");

router.route("/coupon-gen").post(coupon.coupon_gen);
router.route("/coupon-list").get(coupon.coupon_list);
router.route("/verify").post(verifyCoupon.verifyCoupon);

module.exports = router;
