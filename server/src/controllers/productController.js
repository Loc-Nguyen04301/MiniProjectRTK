const db = require("../models");
const Product = db.Product;
const Review = db.Review;
const { Op } = require("sequelize");
const { QueryTypes } = require("sequelize");
const { sequelize } = require("../models");

// Create and Save
exports.create = async (req, res, next) => {
  await Product.create(req.body)
    .then((data) => {
      if (data) {
        res.status(200).json({
          status: "success",
          data,
        });
      }
    })
    .catch((error) => next(error));
};

// Retrieve all Product by Name from the database.
exports.findByName = async (req, res, next) => {
  try {
    const name = req.params.name;
    var condition = { name: { [Op.like]: `%${name}%` } };
    const products = await Product.findAll({ where: condition });
    // return reviews if products == 1
    const reviews =
      products.length === 1
        ? await sequelize.query(
            `SELECT title,description,star,name FROM reviews,users WHERE product_id=${products[0].id}`,
            { type: QueryTypes.SELECT }
          )
        : null;

    // const reviews =
    //   products.length === 1 ? await products[0].getReviews() : null;
    if (!products.length) {
      res.status(200).json({
        message: `Không tìm thấy sản phẩm có tên ${name}`,
      });
    } else {
      res.status(200).json({
        status: "success",
        products,
        reviews,
      });
    }
  } catch (error) {
    next(error);
  }
};

// Retrieve Product by Category from the database.
exports.findByCategory = async (req, res, next) => {
  try {
    const category = req.params.category;
    var condition = { category: { [Op.like]: `%${category}%` } };
    const products = await Product.findAll({ where: condition });
    console.log(products);
    if (!products.length) {
      res.status(200).json({
        status: "success",
        message: `Không tìm thấy mục sản phẩm có tên ${category}`,
      });
    } else {
      res.status(200).json({
        status: "success",
        products,
      });
    }
  } catch (error) {
    next(error);
  }
};

// Retrieve all Product from the database.
exports.findAll = async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.status(200).json({
      status: "success",
      products,
    });
  } catch (error) {
    next(error);
  }
};

// Update a by the id in the request
exports.update = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Product.update(req.body, { where: { id: id } }).then((data) => {
      if (data) {
        res.status(200).json({
          status: "success",
          message: "Update succesfully",
        });
      } else {
        const err = new Error(`Can't update product with ${id}`);
        err.statusCode = 404;
        return next(err);
      }
    });
  } catch (error) {
    next(error);
  }
};

// Delete a with the specified id in the request
exports.remove = async (req, res, next) => {
  const id = req.params.id;
  await Product.destroy({ where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: `This product ${id} was deleted successfully!`,
        });
      } else {
        res.send({
          message: `Cannot delete product with id=${id}. Maybe product was not found!`,
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || `ERROR DELETING TUTORIAL WITH ID=${id}`,
      });
    });
};

// Delete all Tutorials from the database.
exports.removeAll = async (req, res, next) => {
  await Product.destroy({
    truncate: true,
  })
    .then(() => {
      res.send({
        message: `All Products were deleted successfully!`,
      });
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || `ERROR DELETING ALL PRODUCTS `,
      });
    });
};
