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
  messages: [
    {
      id: 1,
      body: "test",
      channelId: 1,
      userId: 1,
      timestamp: Date.now(),
    },
    {
      id: 2,
      channelId: 1,
      userId: 1,
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      timestamp: Date.now(),
    },
    {
      id: 3,
      channelId: 2,
      userId: 1,
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ",
      timestamp: Date.now(),
    },
  ],
};
