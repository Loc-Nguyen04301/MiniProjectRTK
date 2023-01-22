//Define Routes
const { create, getAllBills } = require("../controllers/customer.controller");

const express = require("express");
const router = express.Router();

// Create and Save
router.post("/", create);
//Get All Bills
router.get("/", getAllBills);

module.exports = router;
