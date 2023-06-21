const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { isEmail } = require('validator');
const bcrypt = require("bcrypt");
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
  userName: {
    type: String,
    required: true,
    unique: false
  },
  companyType: {
    type: String,
    default: "Anonymous",
  },
  total_coupon_gen: {
    type: Number,
    default: 0,
  },
  balance_bill: {
    type: Number,
    default: 0,
  },
  coupon_used: {
    type: Number,
    default: 0,
  },
  coupon: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

//function to hash the password before saving into db
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//static method to login user
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = bcrypt.compare(password, user.password);
    console.log(auth);
    if (auth) {
      console.log(user);
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};

module.exports = mongoose.model("User", userSchema);
