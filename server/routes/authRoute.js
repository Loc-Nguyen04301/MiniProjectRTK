//Define Routes
const checkAuth = require("../middlewares/verifyToken");
const {
  register,
  login,
  getCurrentUser,
} = require("../controllers/authController");
const { checkCurrentUser } = require("../middlewares/checkCurrentUser");

const express = require("express");
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/").get(checkCurrentUser, getCurrentUser);

module.exports = router;
