### Installation

Node version 15.5.1 was used to build this project. If you have nvm, you can run `nvm use` in the project to set it.

#### Mac/Linux

In the main directory, run

`npm install`

`npm start`

This will install dependencies in both client and api folders and start both servers in one terminal. Feel free to run them in separate terminals if you like.

#### Windows

If you are using windows, you will have to go into both folders separately and install packages there due to the postinstall script creating subshells. You can still run `npm start` in the main directory to run both servers in one terminal.

### Tests

Though testing wasn't required, I added some unit tests for the client because I believe testing is an integral part of development that is very helpful in finding bugs and refactoring. I did not have time to add tests for the backend.

To run tests, run `npm test`. You can also go directly into the client folders to run tests independently.

### Technologies/Architecture

I separated the client and api code into their own respective folders that way they can both be deployed and ran independently of each other. Both folders contain their own package.json files. In the main folder, I added concurrently so we can run both in one tab in the terminal.

Frontend

- React as requested
- redux for state management since state was requested to be separate.
  - I followed the normalizing technique as outlined on the (redux docs for best practice)[https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape]
  - Since the api was separate, the usual way of normalizing was not possible so I wound up splitting it as:
  ```
  {
    channels: {
      byId: {},
      ids:[]
    },
    messages: {
      byId: {},
      byChannelId: {},
      ids: []
    }
  }
  ```
  Usually, byChannelId would just be an array in channels but due to the separate api calls, it made more sense to do it this way. It allows us to access the individual channel/messages more easily.

I organized the client code following the redux pattern of actions, components, reducers, and selectors. In larger apps, I like to follow the feature structure. I wrote my own css since it was fairly simple instead of using a css lib.

I would have liked to add typing and immer but I did not have time.

Backend
- As requested, the channel and message storage is a variable with an initial list of channels without any messages
- Decided to structure the storage like I expect a sql table since in a real app, it might be in one so channels and messages are separate with messages having a foreign key `channelId` for the channel they belong in
- The api is broken up by layers. Express related items are in the router folder while the data access layer is in the services.

Error handling was not done since the instructions said it was optimistic.

### Design
- For the design, I followed what most messaging apps look like. I find the avatars great for identifying channels and users quickly when scanning.
- Since there was no real users, I just created a dummy user name and avatar for the user messages
