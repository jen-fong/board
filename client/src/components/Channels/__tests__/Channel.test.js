import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Channel from "../Channel";

describe("Channel", () => {
  const channel = {
    id: 1,
    name: "Test channel",
  };
  const handleClick = jest.fn();

  afterEach(() => {
    handleClick.mockClear();
  });

  it("renders avatar and channel name", () => {
    const { getByTestId, getByText } = render(
      <Channel channel={channel} isActive={false} onClick={handleClick} />
    );

    const avatar = getByTestId("channel-user-icon");
    expect(avatar.textContent).toBe(channel.name[0]);
    expect(getByText(channel.name).textContent).toBe(channel.name);
  });

  it("selects the channel when clicked", () => {
    const { getByTestId } = render(
      <Channel channel={channel} isActive={false} onClick={handleClick} />
    );

    const channelEl = getByTestId("channel");
    fireEvent.click(channelEl);

    expect(handleClick).toHaveBeenCalledWith(channel.id);
  });

  it("is highlighted when active", () => {
    const { getByTestId } = render(
      <Channel channel={channel} isActive={true} onClick={handleClick} />
    );

    expect(getByTestId("channel").classList.contains("channel--active")).toBe(
      true
    );
  });
});
