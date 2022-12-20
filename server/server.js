//building RestAPI
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:8081",
};
//  tương tác client với server
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Import Routes
const authRoute = require("./routes/authRoute");
const productRoute = require("./routes/productRoute");
//Mount Route
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/product", productRoute);
//handler Route
const { errorHandler } = require("./middlewares/errorHandler");
app.all("*", (req, res, next) => {
  const err = new Error("The Route can't be found");
  err.statusCode = 404;
  next(err);
  // chuyen xuong errorHandle de xy ly
});
app.use(errorHandler);



//connect DB
const db = require("./models");
db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// set Port
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
