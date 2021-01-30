import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Messages from "../";

describe("Messages list", () => {
  let store, state, messages;
  beforeEach(() => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn();

    messages = {
      1: {
        id: 1,
        body: "message 1",
        channelId: 1,
        timestamp: 1612039639,
      },
      2: {
        id: 2,
        name: "message 2",
        channelId: 1,
        timestamp: 1612039639,
      },
    };

    state = {
      messages: {
        byId: messages,
        ids: [1, 2],
        byChannelId: {
          1: [1, 2],
        },
      },
      channels: {
        selectedChannel: 1,
        byId: {
          1: {
            id: 1,
            name: "channel 1",
          },
        },
      },
    };

    store = {
      subscribe: jest.fn(),
      dispatch: jest.fn(),
      getState: () => state,
    };
  });

  it("displays a list of messages", () => {
    const { getAllByTestId } = render(
      <Provider store={store}>
        <Messages />
      </Provider>
    );

    expect(getAllByTestId("channel-message").length).toBe(2);
  });

  it("scrolls to bottom of messages when messages load", () => {
    render(
      <Provider store={store}>
        <Messages />
      </Provider>
    );

    expect(window.HTMLElement.prototype.scrollIntoView).toHaveBeenCalled();
  });

  it("displays message to start when no messages", () => {
    state.messages = {
      byId: {},
      ids: [],
      byChannelId: {
        1: [],
      },
    };

    const { getByText } = render(
      <Provider store={store}>
        <Messages />
      </Provider>
    );

    expect(
      getByText(
        "There are no messages in this channel. Start by sending one now!"
      )
    ).toBeTruthy();
  });
});
