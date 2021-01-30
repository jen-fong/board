import React from "react";
import classNames from "classnames";
import Avatar from "../Avatar";
import "./Channel.css";

function Channel({ channel, isActive, onClick }) {
  function handleClick() {
    onClick(channel.id);
  }

  return (
    <div
      className={classNames("channel", {
        "channel--active": isActive,
      })}
      onClick={handleClick}
      data-testid="channel"
    >
      <Avatar data-testid="channel-user-icon">{channel.name[0]}</Avatar>
      <span className="channel__text">{channel.name}</span>
    </div>
  );
}

export default Channel;
