const jwt = require("jsonwebtoken");

exports.checkCurrentUser = (req, res, next) => {
  const Authorization = req.header("authorization");

  if (!Authorization) {
    req.user = null;
    next(); // di vao function tiep theo
  } else {
    const token = Authorization.replace("Bearer ", "");

    //Verify token
    try {
      const { userId } = jwt.verify(token, process.env.APP_SECRET);
      req.user = { userId };
      next();
    } catch (err) {
      req.user = null;
      next(); // truyen user.id vao getCurrentUser
    }
  }
};
