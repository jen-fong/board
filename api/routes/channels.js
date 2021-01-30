const express = require("express");
const channelsService = require("../services/channels");
const messageService = require("../services/messages");

const router = express.Router();

// http://<backend>/<channel>
router.post("/:channelId", (req, res) => {
  const channelId = parseInt(req.params.channelId, 10);
  const message = req.body;

  const savedMessage = messageService.saveMessage(channelId, message);
  res.json(savedMessage);
});

// GET http://<backend>/channels
router.get("/channels", (req, res) => {
  const channels = channelsService.getChannels();

  res.json(channels);
});

module.exports = router;
