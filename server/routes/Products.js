const {
  VerifyToken,
  verifyTokenAuth,
  verifyTokenAdmin,
} = require("./VerifyToken");
const Product = require("../models/Product");
const Router = require("express").Router();

//Create Product
Router.post("/", verifyTokenAdmin, async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const product = await newProduct.save();
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update Product
Router.put("/:id", verifyTokenAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findById(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get product
Router.get("/:id", verifyTokenAdmin, async (req, res) => {
  try {
    const user = await Product.findById(req.params.id);
    return res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});
//Get All product
Router.get("/", verifyTokenAdmin, async (req, res) => {
  try {
    const user = await Product.find();

    return res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = Router;
