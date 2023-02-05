const jwt = require("jsonwebtoken");

exports.checkCurrentUser = (req, res, next) => {
  const Authorization = req.header("authorization");

  if (!Authorization) {
    req.user = null;
    // next to getCurrentUser Controller
    next();
  } else {
    const token = Authorization.replace("Bearer ", "");

    //Verify token
    try {
      const { userId } = jwt.verify(token, process.env.APP_SECRET);
      req.user = { userId };
      // next to getCurrentUser Controller
      next();
    } catch (err) {
      req.user = null;
      // next to getCurrentUser Controller
      next();
    }
  }
};
