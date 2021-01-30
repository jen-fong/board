// in memory data storage
// chose to model this similar to a sql database where you would have a table
// of channels and a table of messages
// messages would have a property channelId as key
module.exports = {
  // prepopulated dummy data channels
  channels: [
    {
      id: 1,
      name: "General",
    },
    {
      id: 2,
      name: "Music",
    },
    {
      id: 3,
      name: "Food",
    },
    {
      id: 4,
      name: "Travel",
    },
    {
      id: 5,
      name: "Pets",
    },
  ],
  messages: [],
};
