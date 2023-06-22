const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const uuid = require("uuid-random"); // npm package for generating UUIDs
const Order = require("../models/Order");
const Coupon = require("./../models/Coupon");
const User = require("./../models/user");
var mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Endpoint for generating coupon codes
exports.coupon_gen = catchAsync(async (req, res) => {
  const {
    numCodes,
    redemptionLimit,
    format,
    customPrefix,
    applicableTo,
    discountType,
    discountValue,
    maxDiscountAmount,
    length,
    type,
    conditions,
    conditionsValue,
    expiry,
  } = req.body;
  const user = await User.findById(req.user._id);
  console.log(user);
  const order = await Order.create({
    numCodes,
    redemptionLimit,
    format,
    customPrefix,
    type,
    applicableTo,
    discountType,
    discountValue,
    maxDiscountAmount,
    length,
    conditions,
    conditionsValue,
    expiry,
  });

  user.orders.push(order._id);
  await user.save();

  if (type == "dynamic") {
    for (let i = 0; i < numCodes; i++) {
      let couponCode;

      if (format === "alphanumeric") {
        couponCode = customPrefix
          ? customPrefix + "-" + uuid().substring(0, length)
          : uuid().substring(0, length); // Add custom prefix if specified and limit the length of the UUID
      } else if (format === "numeric") {
        let code = Math.floor(Math.random() * Math.pow(10, length)).toString();
        couponCode = customPrefix
          ? customPrefix + "-" + code.padStart(length, "0")
          : code.padStart(length, "0"); // Add custom prefix if specified and pad the code with zeros to reach the specified length
      } else if (format === "alphabetic") {
        couponCode = customPrefix
          ? customPrefix + "-" + generateRandomAlphabetic(length)
          : generateRandomAlphabetic(length);
      }

      const coupon = await Coupon.create({
        code: couponCode,
        order: order._id,
        user: user._id,
        applicableTo,
        discountType,
        discountValue,
        maxDiscountAmount,
        conditions,
        conditionsValue,
        expiry,
      });

      order.coupons.push(coupon._id);
      await order.save();

      user.coupons.push(coupon._id);
      await user.save();

      res.status(200).json({
        status: "success",
        data: {
          coupon,
        },
      });
    }
  } else if (type === "static") {
    
  }
});

function generateRandomAlphabetic(length) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
