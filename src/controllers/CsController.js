const { csModel } = require("../models/index");

const csController = {
  registerForm: async (req, res) => {
    const { author, phoneNumber, description } = req.body;
    const newPost = new csModel({ author, phoneNumber, description });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  },
  getForm: (req, res) => {
    // will implement in the future.
  },
};

module.exports = csController;
