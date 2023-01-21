const authRoute = require("./auth.route");
const productRoute = require("./product.route");

const initRoutes = (app) => {
  app.use("/api/v1/auth", authRoute);
  app.use("/api/v1/product", productRoute);

  return app.use("/", (req, res) => {
    res.send("server on...");
  });
};

module.exports = initRoutes;