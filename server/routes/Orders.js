const {
  VerifyToken,
  verifyTokenAuth,
  verifyTokenAdmin,
} = require("./VerifyToken");
const Order = require("../models/Order");
const Router = require("express").Router();

//Create Order
Router.post("/", VerifyToken, async (req, res) => {
  const newOrder = new Order(req.body);
  try {
    const order = await newOrder.save();
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update Order
Router.put("/:id", verifyTokenAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findById(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete Order
Router.delete("/:id", verifyTokenAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get user Order
Router.get("/:userId", verifyTokenAuth, async (req, res) => {
  try {
    const order = await Order.find({ userId: req.params.userId });
    return res.status(200).json(order);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get All Order
Router.get("/", verifyTokenAdmin, async (req, res) => {
  try {
    const orders = await Order.find();
    return res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get Monthly Revenues
Router.get("/revenue", verifyTokenAdmin, async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const nextMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  try {
    const revenue = await Order.aggregate([
      { $match: { createdAt: { $gte: nextMonth } } },
      { $project: { month: { $month: "$createdAt" }, sales: "$amount" } },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(revenue);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = Router;
