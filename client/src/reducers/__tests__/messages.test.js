import {
  FETCH_CHANNEL_MESSAGES_PENDING,
  FETCH_CHANNEL_MESSAGES_SUCCESS,
  SAVE_CHANNEL_MESSAGE_SUCCESS,
} from "../../constants";
import { messagesReducer, initialState } from "../messages";

describe("messages reducers", () => {
  it(`sets loading to true when ${FETCH_CHANNEL_MESSAGES_PENDING}`, () => {
    const newState = messagesReducer(initialState, {
      type: FETCH_CHANNEL_MESSAGES_PENDING,
    });

    expect(newState).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it(`merges messages to state from api when ${FETCH_CHANNEL_MESSAGES_SUCCESS} `, () => {
    const channelId = 1;
    const newData = [
      {
        id: 1,
        body: "message 1",
        timestamp: 1612039639,
        channelId,
      },
      {
        id: 2,
        body: "message 2",
        timestamp: 1612039639,
        channelId,
      },
    ];

    const newState = messagesReducer(initialState, {
      type: FETCH_CHANNEL_MESSAGES_SUCCESS,
      payload: newData,
      meta: { channelId },
    });

    expect(newState).toEqual({
      isLoading: false,
      byId: {
        1: newData[0],
        2: newData[1],
      },
      ids: [1, 2],
      byChannelId: {
        1: [1, 2],
      },
    });
  });

  it(`adds the new message to the channel when ${SAVE_CHANNEL_MESSAGE_SUCCESS} `, () => {
    const channelId = 1;
    const newMessage = {
      id: 1,
      body: "message 1",
      timestamp: 1612039639,
      channelId,
    };
    initialState.byChannelId = { 1: [] };
    const newState = messagesReducer(initialState, {
      type: SAVE_CHANNEL_MESSAGE_SUCCESS,
      payload: newMessage,
    });

    expect(newState).toEqual({
      isLoading: false,
      byId: {
        1: newMessage,
      },
      ids: [1],
      byChannelId: {
        1: [1],
      },
    });
  });
});
