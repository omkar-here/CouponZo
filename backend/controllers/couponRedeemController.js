const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Order = require("./../models/Order");
const Coupon = require("./../models/Coupon");
const User = require("./../models/User");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

export.redeemCoupon=(res,req)=>{

}