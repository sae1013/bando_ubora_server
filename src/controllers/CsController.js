const { csModel } = require("../models/index");
const { writeToSheet } = require("../utils/google_api");
const testData = {
  name: "John Doe",
  email: "john.doe@example.com",
  message: "Hello from the form!",
};

const csController = {
  registerForm: async (req, res) => {
    const { author, phoneNumber, description } = req.body;
    const newPost = new csModel({ author, phoneNumber, description });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
    await writeToSheet(testData);
  },

  getForm: (req, res) => {
    // will implement in the future.
  },
};

module.exports = csController;

// 테스트 데이터
