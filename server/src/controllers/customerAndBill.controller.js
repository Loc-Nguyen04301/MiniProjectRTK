const db = require("../models");
const Customer = db.Customer;
const Bill = db.Bill;
const { sequelize } = require("../models");

exports.create = async (req, res, next) => {
  // create Customer
  const { name, email, phoneNumber } = req.body;
  await Customer.create({ name, email, phoneNumber })
    .then((data) => {
      if (data)
        res.status(200).json({
          status: "success",
          data,
        });
    })
    .catch((error) => next(error));
  // create Bill
  const { cartItems } = req.body;
  cartItems.map(async (item) => {
    const { name, img, quantity, totalPrice } = item;
    await Bill.create({
      productName: name,
      img,
      quantity,
      totalPrice,
    })
      .then((data) => {
        if (data)
          res.status(200).json({
            status: "success",
            data,
          });
      })
      .catch((error) => next(error));
  });
};

exports.getAllBills = async (req, res, next) => {
  try {
    const response = await sequelize.query(
      `SELECT "productName",sum("quantity") as quantity,sum("totalPrice") as totalPrice from "Bills" GROUP BY  "productName"`
    );
    const data = response[0];
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (error) {
    next(error);
  }
};
