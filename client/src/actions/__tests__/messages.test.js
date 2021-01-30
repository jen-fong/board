import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import {
  FETCH_CHANNEL_MESSAGES_PENDING,
  FETCH_CHANNEL_MESSAGES_SUCCESS,
  SAVE_CHANNEL_MESSAGE_SUCCESS,
} from "../../constants";
import * as messagesActions from "../messages";

const mockStore = configureMockStore([thunk]);

describe("messages actions", () => {
  let store;
  beforeEach(() => {
    jest.clearAllMocks();
    store = mockStore({});
    axios.get = jest.fn();
    axios.post = jest.fn();
  });

  it("fetches channel messages from api", async () => {
    const channelId = 1;
    const mockReturnData = {
      data: [
        {
          id: 1,
          body: "message 1",
          timestamp: 1612039639,
          channelId,
        },
      ],
    };
    axios.get.mockImplementation(() => Promise.resolve(mockReturnData));

    await store.dispatch(messagesActions.fetchChannelMessages(channelId));

    expect(store.getActions()).toEqual([
      { type: FETCH_CHANNEL_MESSAGES_PENDING },
      {
        type: FETCH_CHANNEL_MESSAGES_SUCCESS,
        payload: mockReturnData.data,
        meta: {
          channelId,
        },
      },
    ]);
  });

  it("saves a message to a channel", async () => {
    const channelId = 1;
    const message = "new message";
    const mockReturnData = {
      data: {
        id: 1,
        body: message,
        timestamp: 1612039639,
        channelId,
      },
    };
    axios.post.mockImplementation(() => Promise.resolve(mockReturnData));

    await store.dispatch(
      messagesActions.saveChannelMessage(channelId, message)
    );

    expect(store.getActions()).toEqual([
      {
        type: SAVE_CHANNEL_MESSAGE_SUCCESS,
        payload: mockReturnData.data,
      },
    ]);
  });
});
