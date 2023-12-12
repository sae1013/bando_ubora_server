const express = require("express");
const csController = require("../controllers/CsController");
const router = express.Router();

router.get("/read", csController.getForm);
router.post("/register", csController.registerForm);

module.exports = router;
