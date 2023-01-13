const {
  VerifyToken,
  verifyTokenAuth,
  verifyTokenAdmin,
} = require("./VerifyToken");
const Cart = require("../models/Cart");
const Router = require("express").Router();

//Create Cart
Router.post("/", VerifyToken, async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const cart = await newCart.save();
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update Cart
Router.put("/:id", verifyTokenAuth, async (req, res) => {
  try {
    const updatedCart = await Cart.findById(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete Cart
Router.delete("/:id", verifyTokenAuth, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get user Cart
Router.get("/:userId", verifyTokenAuth, async (req, res) => {
  try {
    const Cart = await Cart.findOne({ userId: req.params.userId });
    return res.status(200).json(Cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get All Cart
Router.get("/", verifyTokenAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    return res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = Router;
