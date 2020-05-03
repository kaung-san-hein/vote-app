require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { notFound, errors } = require("./handlers");

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => res.json({ hello: "world" }));

app.use(notFound);
app.use(errors);

app.listen(port, console.log(`Server started on port ${port}`));
