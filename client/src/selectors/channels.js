export const getSelectedChannel = (state) => {
  const { selectedChannel, byId } = state.channels;
  return byId[selectedChannel];
};

export const getChannels = (state) => {
  const { byId, ids } = state.channels;

  return ids.map((id) => byId[id]);
};
