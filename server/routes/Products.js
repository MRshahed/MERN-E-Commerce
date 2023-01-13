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

//Delete Product
Router.delete("/:id", verifyTokenAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get product
Router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    return res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});
//Get All product
Router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCatagory = req.query.catagory;

  try {
    let products;
    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(5);
    } else if (qCatagory) {
      products = await Product.find({
        catagories: {
          $in: [qCatagory],
        },
      });
    } else {
      products = await Product.find();
    }
    return res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = Router;
