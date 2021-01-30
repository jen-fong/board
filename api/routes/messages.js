const express = require("express");
const messagesService = require("../services/messages");

const router = express.Router();

// http://<backend>/messages/<channel>
router.get("/:channelId", (req, res) => {
  const channelMessages = messagesService.getChannelMessages(
    parseInt(req.params.channelId, 10)
  );
  res.json(channelMessages);
});

module.exports = router;
