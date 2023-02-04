//building RestAPI
require("dotenv").config();

const express = require("express");
var compression = require("compression");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
};

// interact client to  server
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// compress all responses
app.use(compression());

const initRoutes = require("./src/routes");
const connectDatabase = require("./src/config/connectDatabase");
const { errorHandler } = require("./src/middlewares/errorHandler");
initRoutes(app);
connectDatabase();
// add Middleware ErrorHandler
app.use(errorHandler);

// set Port
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
