require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL);

app.use("/", (req, res) => {
  console.log("hello world");
});

app.listen("5000", () => {
  console.log("Server is running on Port 5000");
});
