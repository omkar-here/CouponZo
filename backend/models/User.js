const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt= require('bcrypt');
const userSchema = new Schema({
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
  password: {
    type: String,
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
userSchema.pre('save',async function(next){
  const salt= await bcrypt.genSalt();
  this.password= await bcrypt.hash(this.password,salt);
  next();
}); 
module.exports = mongoose.model("User", userSchema);
