// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const validateAuth = require("../middlewares/validateAuth");

router.post("/register", validateAuth, authController);

module.exports = router;
