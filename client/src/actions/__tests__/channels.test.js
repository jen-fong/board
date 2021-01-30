import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import {
  FETCH_CHANNELS_PENDING,
  FETCH_CHANNELS_SUCCESS,
} from "../../constants";
import * as channelsActions from "../channels";

const mockStore = configureMockStore([thunk]);

describe("channels actions", () => {
  let store;
  beforeEach(() => {
    jest.clearAllMocks();
    store = mockStore({});
    axios.get = jest.fn();
  });

  it("fetches channels from api", async () => {
    const mockReturnData = {
      data: [{ id: 1, name: "channel 1" }],
    };
    axios.get.mockImplementation(() => Promise.resolve(mockReturnData));

    await store.dispatch(channelsActions.fetchChannels());

    expect(store.getActions()).toEqual([
      { type: FETCH_CHANNELS_PENDING },
      {
        type: FETCH_CHANNELS_SUCCESS,
        payload: mockReturnData.data,
      },
    ]);
  });
});
