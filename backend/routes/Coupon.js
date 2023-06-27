const express = require("express");
const router = express.Router();
const coupon = require("../controllers/couponController");

router.route("/coupon-gen").post(coupon.coupon_gen);
router.route("/coupon-list").get(coupon.coupon_list);

module.exports = router;
