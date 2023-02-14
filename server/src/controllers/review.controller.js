const db = require("../models");
const Review = db.Review;

// Create and Save
exports.create = async (req, res, next) => {
  await Review.create(req.body)
    .then((data) => {
      if (data) {
        if (data) {
          res.status(200).json({
            status: "Add Review Successfully",
            data,
          });
        }
      }
    })
    .catch((error) => next(error));
};
