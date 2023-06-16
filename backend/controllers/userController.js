const express = require("express");
const app = express();
const User = require("../models/User");

module.exports.register = async (req, res, next) => {
  try {
    console.log("IN usercontroller");
    const { email, userName, password, companyType } = req.body;
    console.log(userName,companyType);
    const user = await User.create({ email, userName, password, companyType});
    res.status(201).json(user);
    // const registeredUser = await User.register(user, password);
    // req.login(registeredUser, (err) => {
    //   if (err) return next(err);
    //   console.log(err);
    // });
  // } catch (e) {
  //   req.flash("error", `${e.message}`);
  //   console.log(e);
  // }
  next();
}
catch(err){
  console.log(err);
}
}
module.exports.display = async (req, res, next)=>{
  res.render("<h1>Hello world</h1>");
}
module.exports.test = async (req, res, next)=>{
  const documents= await User.find();
  console.log("Triggered")
  res.send(documents);
}
