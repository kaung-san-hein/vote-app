require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(
  process.env.DB_CONNECT,
  { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("DB connected successfully!")
);

module.exports.User = require("./User");
module.exports.Poll = require("./Poll");
