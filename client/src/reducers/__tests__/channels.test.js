import {
  FETCH_CHANNELS_PENDING,
  FETCH_CHANNELS_SUCCESS,
  FETCH_CHANNEL_MESSAGES_SUCCESS,
} from "../../constants";
import { channelsReducer, initialState } from "../channels";

describe("channels reducers", () => {
  it(`sets loading to true when ${FETCH_CHANNELS_PENDING}`, () => {
    const newState = channelsReducer(initialState, {
      type: FETCH_CHANNELS_PENDING,
    });

    expect(newState).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it(`merges channels to state from api when ${FETCH_CHANNELS_SUCCESS} `, () => {
    const newData = [
      {
        id: 1,
        name: "channel 1",
      },
      {
        id: 2,
        name: "channel 2",
      },
    ];

    const newState = channelsReducer(initialState, {
      type: FETCH_CHANNELS_SUCCESS,
      payload: newData,
    });

    expect(newState).toEqual({
      isLoading: false,
      selectedChannel: null,
      byId: {
        1: newData[0],
        2: newData[1],
      },
      ids: [1, 2],
    });
  });

  it(`sets the selectedChannel when ${FETCH_CHANNEL_MESSAGES_SUCCESS} `, () => {
    const channelId = 1;
    const newState = channelsReducer(initialState, {
      type: FETCH_CHANNEL_MESSAGES_SUCCESS,
      payload: {},
      meta: { channelId },
    });

    expect(newState).toEqual({
      isLoading: false,
      selectedChannel: channelId,
      byId: {},
      ids: [],
    });
  });
});
