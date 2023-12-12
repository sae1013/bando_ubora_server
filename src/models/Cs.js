const mongoose = require("mongoose");

const csSchema = new mongoose.Schema({
  author: String,
  phoneNumber: String,
  description: String,
});

const csModel = mongoose.model("cs", csSchema);

module.exports = csModel;
