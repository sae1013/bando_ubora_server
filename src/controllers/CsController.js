const { csModel } = require("../models/index");
const { writeToSheet } = require("../utils/google_api");

const csController = {
  registerForm: async (req, res) => {
    const { name:author, phoneNumber, description } = req.body;
    const newPost = new csModel({ author, phoneNumber, description });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
    await writeToSheet({ author, phoneNumber, description });
  },

  getForm: (req, res) => {
    // will implement in the future.
  },
};

module.exports = csController;