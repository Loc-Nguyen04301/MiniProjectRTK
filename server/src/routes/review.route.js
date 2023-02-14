const { create } = require("../controllers/review.controller");
const express = require("express");
const router = express.Router();

router.post("/", create);

module.exports = router;
