const Order = require("../models/Order");
const User = require("../models/User");

exports.getOrderList = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.findById(userId);

    const result = await Promise.all(
      user.orders.map(async (element) => {
        const order = await Order.findById(element);
        console.log("dum : ", order);
        return order;
      })
    );

    console.log("lol :", result);
    res.json({ result: result });
  } catch (err) {
    console.log(err);
  }
};

exports.getRecentOrderList = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.findById(userId);

    const result = await Promise.all(
      user.orders
        .sort({ createdAt: -1 })
        .slice(0, 5)
        .map(async (element) => {
          const order = await Order.findById(element);
          console.log("dum : ", order);
          return order;
        })
    );

    console.log("lol :", result);
    res.json({ result: result });
  } catch (err) {
    console.log(err);
  }
};
