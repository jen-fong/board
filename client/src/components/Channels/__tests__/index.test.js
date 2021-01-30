import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import * as messagesActions from "../../../actions/messages";
import * as channelsActions from "../../../actions/channels";
import Channels from "../";

describe("Channels", () => {
  let store, channels;
  beforeEach(() => {
    messagesActions.fetchChannelMessages = jest.fn();
    channelsActions.fetchChannels = jest.fn();

    channels = {
      1: {
        id: 1,
        name: "Channel 1",
      },
      2: {
        id: 2,
        name: "Channel 2",
      },
    };

    store = {
      subscribe: jest.fn(),
      dispatch: jest.fn(),
      getState: () => ({
        channels: {
          byId: channels,
          ids: [1, 2],
        },
      }),
    };
  });

  const renderWithStore = (Component) => {
    return render(
      <Provider store={store}>
        <Channels />
      </Provider>
    );
  };

  it("renders a list of channels", () => {
    const { getAllByTestId } = renderWithStore();

    const channels = getAllByTestId("channel");
    expect(channels.length).toBe(2);
    expect(channelsActions.fetchChannels).toHaveBeenCalled();
  });

  it("fires action to load channel messages when clicked", () => {
    const { getAllByTestId } = renderWithStore();

    const channel = getAllByTestId("channel")[0];
    fireEvent.click(channel);
    expect(messagesActions.fetchChannelMessages).toHaveBeenCalledWith(1);
  });
});
