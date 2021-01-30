import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Message from "../Message";

describe("Message", () => {
  let store, state, messages;
  beforeEach(() => {
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

  it("displays the message data", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Message message={messages[1]} />
      </Provider>
    );

    const datetime = new Date(messages[1].timestamp);
    const expectedTime = datetime.toLocaleString();

    expect(getByTestId("channel-message").textContent).toMatch(expectedTime);
    expect(getByTestId("user-avatar")).toBeTruthy();
  });
});
