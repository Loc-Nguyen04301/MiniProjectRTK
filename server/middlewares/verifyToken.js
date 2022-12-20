//protect endpoint from unauthenticated users.

const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const Authorization = await req.header("authorization");
    if (!Authorization) {
      const error = new Error("Unauthorized!!!");
      error.statusCode = 401;
      return next(error);
    }
    const token = await Authorization.replace("Bearer ", "");
    //Check if the token that was generated matches the token string APP_SECRET
    const decodeToken = jwt.verify(token, process.env.APP_SECRET);

    // retrieve the user details of the logged in user
    const user = decodeToken;
    // pass the user down to the endpoints here
    req.user = user;
    // pass down functionality to the endpoint
    next();
    // di tiep vao controller de tao bai post
  } catch (error) {
    next(error);
  }
};
