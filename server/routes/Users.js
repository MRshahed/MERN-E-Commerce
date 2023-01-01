const {
  VerifyToken,
  verifyTokenAuth,
  verifyTokenAdmin,
} = require("./VerifyToken");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const Router = require("express").Router();

//Update User
Router.put("/:id", verifyTokenAuth, async (req, res) => {
  if (req.body.password) {
    req.body.password = await bcrypt.hash(req.body.password, saltRounds);
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete User
Router.delete("/:id", verifyTokenAuth, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get User
Router.get("/:id", verifyTokenAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    return res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = Router;
