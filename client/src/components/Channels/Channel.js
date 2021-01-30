import React from "react";
import classNames from "classnames";
import Avatar from "../Avatar";
import "./Channel.css";

function Channel({ channel, active, onClick }) {
  function handleChannelClick() {
    onClick(channel.id);
  }

  return (
    <div
      className={classNames("channel", {
        "channel--active": active,
      })}
      onClick={handleChannelClick}
    >
      <Avatar>{channel.name[0]}</Avatar>
      <span className="channel__text">{channel.name}</span>
    </div>
  );
}

export default Channel;
