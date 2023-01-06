//Define Routes
const {
  create,
  findByName,
  findByCategory,
  findAll,
  update,
  remove,
  removeAll,
} = require("../controllers/productController");

const express = require("express");
const router = express.Router();

// Create and Save
router.post("/", create);

//Retrieve all condition = name
router.get("/:name", findByName);

//Retrieve all condition = category
router.get("/category/:category", findByCategory);

// Retrieve all no condition
router.get("/", findAll);

// Update a by the id in the request
router.put("/:id", update);

// Delete a with the specified id in the request
router.delete("/:id", remove);

// Delete all from the database.
router.delete("/", removeAll);

module.exports = router;
