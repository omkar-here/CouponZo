const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");
const Order = require("../models/Order");
const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [6, "Minimum password length is 6 characters"],
  },
  companyName: {
    type: String,
    required: true,
    default: "",
  },
  userName: {
    type: String,
    required: true,
    unique: false,
  },
  totalCouponsGenerated: {
    type: Number,
    default: 0,
  },
  billing: {
    type: Number,
    default: 0,
  },
  totalCouponsUsed: {
    type: Number,
    default: 0,
  },
  orders: {
    type: Schema.Types.ObjectId,
    ref: "Order",
  },
});

//function to hash the password before saving into db
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//static method to login user
userSchema.statics.login = async function (email, password) {
  console.log(email,password);
  const user = await this.findOne({ email: email });
  if (user) {
    console.log(user)
    const auth = await bcrypt.compare(password, user.password);
    console.log(auth, password);
    if (auth) {
      console.log(user);
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};

const User = mongoose.model("User", userSchema);
module.exports = User;
