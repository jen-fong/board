const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const messageRoutes = require("./routes/messages");
const channelRoutes = require("./routes/channels");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/messages", messageRoutes);
app.use("/", channelRoutes);
// TODO add error

module.exports = app;
