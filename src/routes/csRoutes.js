const express = require("express");
const csController = require("../controllers/CsController");
const router = express.Router();

router.get("/healthcheck", csController.healthcheck);
router.post("/register", csController.registerForm);

module.exports = router;
