const express = require("express");
const messageBoardService = require("../services/messageBoard");

const router = express.Router();

// http://<backend>/<channel>
router.post("/:channelId", (req, res) => {
  const channelId = parseInt(req.params.channelId, 10);
  const message = req.body;

  const savedMessage = messageBoardService.saveMessage(channelId, message);
  res.json(savedMessage);
});

// GET http://<backend>/channels
router.get("/channels", (req, res) => {
  const channels = messageBoardService.getChannels();

  res.json(channels);
});

// http://<backend>/messages/<channel>
router.get("/messages/:channelId", (req, res) => {
  const channelMessages = messageBoardService.getChannelMessages(
    parseInt(req.params.channelId, 10)
  );
  res.json(channelMessages);
});

module.exports = router;
