const notFound = (req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;

  next(error);
};

const errors = (err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ err: err.message || "Something went wrong" });
};

module.exports = {
  errors,
  notFound,
  ...require("./auth"),
};
