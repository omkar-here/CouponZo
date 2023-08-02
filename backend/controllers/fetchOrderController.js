const Order = require("../models/Order");
exports.getOrderList = async (req,res) => {
  console.log("fetch")
  const orders = await Order.find();
  res.json(orders).status(200);
};
