exports.errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  res.status(err.statusCode).json({
    status: `fail`,
    statusCode: err.statusCode,
    message: err.message,
  });
};
