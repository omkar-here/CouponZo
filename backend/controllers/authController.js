const express = require("express");
const app = express();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const maxAge = 1000 * 60 * 60 * 24 * 7;

const createToken = (id) => {
  //signing the jwt (So this will be unique for every user)
  return jwt.sign({ id }, "couponzo secret key", {
    expiresIn: maxAge,
  });
};

module.exports.register = async (req, res, next) => {
  try {
    const { email, userName, password, companyType } = req.body;
    const user = await User.create({
      email: email,
      userName: userName,
      password: password,
      companyType: companyType,
    });
    const token = createToken(user._id);
    console.log("reached here");
    console.log(token);
    res.cookie("lol", "lol", {
      sameSite: true,
    });
    res.cookie("jwt", token, {
      sameSite: true,
      maxAge: maxAge,
    });
    res.status(201).json({ user: user._id });
  } catch (err) {
    console.log(err);
  }
};

module.exports.test = async (req, res, next) => {
  const documents = await User.find();
  res.send(documents);
};
module.exports.clear = async (req, res, next) => {
  const status = await User.deleteMany();
  console.log("All clear");
  res.status(200);
};
