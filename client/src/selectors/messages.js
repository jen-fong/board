export const getChannelMessages = (state) => {
  const { selectedChannel } = state.channels;
  const { byChannelId, byId: messagesById } = state.messages;

  const channelMessages = byChannelId[selectedChannel].map(
    (messageId) => messagesById[messageId]
  );

  return channelMessages;
};
