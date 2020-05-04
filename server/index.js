require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes");

require("./models"); // connect database
const { notFound, errors } = require("./handlers"); // notfound error handle

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", routes.auth);

app.use(notFound);
app.use(errors);

app.listen(port, console.log(`Server started on port ${port}`));
