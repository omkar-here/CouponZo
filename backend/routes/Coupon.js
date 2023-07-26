const express = require("express");
const router = express.Router();
const coupon = require("../controllers/couponController");
const handleCoupon = require("../controllers/couponRedeemController");

router.route("/coupon-gen").post(coupon.coupon_gen);
router.route("/coupon-list").get(coupon.coupon_list);
router.route("/verify").post(handleCoupon.verifyCoupon);
router.route("/confirm").post(handleCoupon.confirmCoupon);
module.exports = router;
