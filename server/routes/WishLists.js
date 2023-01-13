const {
  VerifyToken,
  verifyTokenAuth,
  verifyTokenAdmin,
} = require("./VerifyToken");
const WishList = require("../models/WishList");
const Router = require("express").Router();

//Create WishList
Router.post("/", VerifyToken, async (req, res) => {
  const newWish = new WishList(req.body);
  try {
    const wishList = await newWish.save();
    res.status(200).json(wishList);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update WishList
Router.put("/:id", verifyTokenAuth, async (req, res) => {
  try {
    const updatedWishList = await WishList.findById(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedWishList);
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

//Get user WishList
Router.get("/:userId", verifyTokenAuth, async (req, res) => {
  try {
    const wishList = await WishList.findOne({ userId: req.params.userId });
    return res.status(200).json(wishList);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get All WishList
Router.get("/", verifyTokenAdmin, async (req, res) => {
  try {
    const wishLists = await WishList.find();
    return res.status(200).json(wishLists);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = Router;
