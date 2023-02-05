const authRoute = require("./auth.route");
const productRoute = require("./product.route");
const customerAndBillRoute = require("./customerAndBill.route");

const initRoutes = (app) => {
  app.use("/api/v1/auth", authRoute);
  app.use("/api/v1/product", productRoute);
  app.use("/api/v1/customerAndBill", customerAndBillRoute);

  return app.use("/", (req, res) => {
    res.send("server on...");
  });
};

module.exports = initRoutes;
