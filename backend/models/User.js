const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
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
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
