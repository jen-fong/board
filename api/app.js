const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const messageBoardRoutes = require("./routes/messageBoard");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/", messageBoardRoutes);
// TODO add error

module.exports = app;
