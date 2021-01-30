import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import * as messagesActions from "../../../actions/messages";
import MessageComposer from "../";

describe("MessageComposer", () => {
  let store, state;
  beforeEach(() => {
    messagesActions.saveChannelMessage = jest.fn();

    const channels = {
      1: {
        id: 1,
        name: "Channel 1",
      },
      2: {
        id: 2,
        name: "Channel 2",
      },
    };

    state = {
      channels: {
        byId: channels,
        ids: [1, 2],
        selectedChannel: 1,
      },
    };

    store = {
      subscribe: jest.fn(),
      dispatch: jest.fn(),
      getState: () => state,
    };
  });

  const renderWithStore = (Component) => {
    return render(
      <Provider store={store}>
        <MessageComposer />
      </Provider>
    );
  };

  it("displays the text message and button when user is typing", () => {
    const { getByTestId, getByRole } = renderWithStore();

    const textbox = getByTestId("message-composer-textbox");
    fireEvent.change(textbox, {
      target: {
        value: "brand new message",
      },
    });

    expect(getByTestId("message-composer-textbox").value).toBe(
      "brand new message"
    );
    expect(getByRole("button")).not.toBeDisabled();
  });

  describe("Send button", () => {
    it("sends the message when button is clicked", () => {
      const { getByTestId, getByRole } = renderWithStore();
      const message = "brand new message";

      const textbox = getByTestId("message-composer-textbox");
      fireEvent.change(textbox, {
        target: {
          value: message,
        },
      });
      fireEvent.click(getByRole("button"));

      expect(messagesActions.saveChannelMessage).toHaveBeenCalledWith(
        state.channels.selectedChannel,
        message
      );
      expect(getByTestId("message-composer-textbox").value).toBe("");
    });

    it("is disabled when no message", () => {
      const { getByRole } = renderWithStore();

      expect(getByRole("button")).toBeDisabled();
    });
  });
});
