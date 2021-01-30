export const normalize = (items) => {
  const ids = [];
  const byId = items.reduce((accum, message) => {
    accum[message.id] = message;
    ids.push(message.id);

    return accum;
  }, {});

  return { ids, byId };
};
