const express = require("express");
const app = express();
const User = require("../models/User");
module.exports.register = async (req, res, next) => {
  try {
    const { email, userName, password, companyType } = req.body;
    const user = await User.create({
      email: email,
      userName: userName,
      password: password,
      companyType: companyType,
    });
    res.status(201).json(user);
   
  } catch (err) {
    console.log(err);
  }
};
module.exports.display = async (req, res, next) => {
  res.render("<h1>Hello world</h1>");
};
module.exports.test = async (req, res, next) => {
  const documents = await User.find();
  console.log("Triggered");
  res.send(documents);
};
