const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const saltRounds = 10;

const db = require("../models");
const User = db.User;

exports.register = async (req, res, next) => {
  try {
    const checkUser = await User.findOne({ where: { email: req.body.email } });
    if (checkUser) {
      // if email registered 
      const err = new Error("Email đã tồn tại");
      err.statusCode = 400;
      return next(err);
    }
    // hash password
    const hash = bcrypt.hashSync(req.body.password, saltRounds);
    const account = {
      name: req.body.name,
      email: req.body.email,
      password: hash,
    };
    const user = await User.create(account);
    return res.status(200).json({
      status: "Đăng kí thành công",
      user,
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) {
      const err = new Error("Email không tồn tại");
      err.statusCode = 400;
      return next(err);
    }
    // if Email is Correct
    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
      return res.status(200).json({
        status: "Đăng nhập thành công",
        token,
        userName: user.name,
      });
    } else {
      const err = new Error("Mật khẩu không đúng !!! Xin vui lòng thử lại ");
      err.statusCode = 400;
      return next(err);
    }
  } catch (error) {
    next(error);
  }
};

exports.getCurrentUser = async (req, res, next) => {
  try {
    let userName = "";
    if (req.user) {
      const user = await User.findOne({ where: { id: req.user.userId } });
      userName = user.name;
    }
    res.status(200).json({
      status: "success",
      userName,
    });
  } catch (error) {
    res.json(error);
  }
};
