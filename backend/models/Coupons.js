const mongoose = require("mongoose");

const Couponschema = new mongoose.Schema({
  code: {
    type: String,
    required: [true, "A coupon should have code"],
  },
  redemptionLimit: {
    type: Number,
    required: [true, "A redeem limit is required for a coupon"],
  },
  applicableTo: {
    type: String,
    required: [true, "cart or sku product should be mentioned"],
  },
  discountType: {
    type: String,
    enum: ["percentage", "amount"],
    required: [true, "a type should be mentioned perecentage or amount"],
  },
  discountValue: {
    type: Number,
    required: [true, "A number for percent or amount is required"],
  },
  maxDiscountAmount: {
    type: Number,
    required: [true, "A max discount amount should be mentioned"],
  },
  conditions: {
    type: String,
    enum: ["none", "minCartValue", "minCartQuantity"],
    default: "none",
    required: [true, "A condition should be mentioned"],
  },
  conditionValue: {
    type: Number,
  },
  generatedAt: {
    type: Date.now(),
  },
  OrderId: {
    type: mongoose.Schema.ObjectId,
    ref: "Order",
  },

  expiry: Date,
});

const Coupon = new mongoose.model("Coupon", Couponschema);
module.exports = Coupon;
