const express = require("express");
const messageBoardService = require("../services/messageBoard");

const router = express.Router();

// GET http://<backend>/channels
router.get("/channels", (req, res) => {
  const channels = messageBoardService.getChannels();

  res.json(channels);
});

// http://<backend>/<channel>
router.post("/:channelId", (req, res) => {
  const { channelId } = req.query;
  const message = req.body;

  messageBoardService.saveMessage(channelId, message);
  res.status(201);
});

// http://<backend>/messages/<channel>
router.get("/messages/:channelId", (req, res) => {
  const channelMessages = messageBoardService.getChannelMessages(
    req.query.channelId
  );
  res.json(channelMessages);
});

module.exports = router;
