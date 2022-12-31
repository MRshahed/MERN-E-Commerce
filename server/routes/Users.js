const { VerifyToken, verifyTokenAuth } = require("./VerifyToken");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const Router = require("express").Router();

//Update
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

module.exports = Router;
