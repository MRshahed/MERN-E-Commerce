require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

app.listen("5000", () => {
  console.log("Server is running on Port 5000");
});
