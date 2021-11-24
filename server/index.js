const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require('axios')

// tickets contains all APIs
const tickets = require("./routes/tickets");

require("dotenv").config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json())
app.use(express.text())

app.use("/tickets", tickets);

module.exports = app;

app.listen(5000, function () {
  console.log("App listen on port: 5000");
});
