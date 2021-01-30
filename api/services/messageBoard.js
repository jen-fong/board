const { v4: uuidv4 } = require("uuid");
const data = require("../data");

function getChannels() {
  return data.channels;
}

function saveMessage(channelId, { body }) {
  const message = {
    id: uuidv4(),
    channelId,
    body,
  };

  data.messages.push(message);
}

function getChannelMessages(channelId) {
  const { messages } = data;

  return messages.filter((message) => message.channelId === channelId);
}

module.exports = {
  getChannels,
  saveMessage,
  getChannelMessages,
};