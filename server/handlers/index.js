const notFound = (req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;

  next(error);
};

const errors = (err, req, res, next) => {
  res
    .status(err.status || 400)
    .json({ message: err.message || "Something went wrong" });
};

module.exports = {
  errors,
  notFound,
  ...require("./auth"), // not need module in auth.js
  ...require("./poll"),
};
