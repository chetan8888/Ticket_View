const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require('axios')

const tickets = require("./routes/tickets");


require("dotenv").config();

const app = express();
//Here we are configuring express to use body-parser as middle-ware.
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
