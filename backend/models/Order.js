const mongoose = require("mongoose");

const Orderschema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["static", "dynamic"],
    required: [true, "Type of the Order should be mentioned"],
  },
  format: {
    type: String,
    enum: ["alphanumeric", "alphabetical", "numeric"],
    required: [true, "Format of the Order should be mentioned"],
  },

  customPrefix: {
    type: String,
    required: [true, "Prefix should be mentioned"],
  },
  applicableTo: {
    type: String,
    enum: ["cart", "sku"],
    required: [true, "A cart or sku should be mentioned"],
  },
  applicableValue: {
    type: String,
    required: [true, "A cart or sku should be mentioned"],
  },
  discountType: {
    type: String,
    enum: ["percentage", "amount"],
    required: [true, "A discount-type should be mentioned"],
  },
  discountValue: {
    type: Number,
    required: [true, "A number for percent or amount is required"],
  },
  maxDiscountAmount: {
    type: Number,
    required: [true, "A max discount amount should be mentioned"],
  },
  length: {
    type: Number,
    required: [true, "length of coupon should be mentioned"],
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
  expiry: {
    type: Date,
    required: [true, "Expiry date should be mentioned"],
  },

  OrderAt: {
    type: Date,
    value: Date.now(),
  },

  OrderId: {
    type: mongoose.Schema.ObjectId,
    ref: "Order",
  },
});

const Order = new mongoose.model("Order", Orderschema);
exports.Order = Order;
