import React from "react";
import Avatar from "../Avatar";
import "./Message.css";

function Message({ message }) {
  const datetime = new Date(message.timestamp);
  const dateDisplay = datetime.toLocaleString();

  return (
    <div className="message" key={message.id}>
      <div>
        <Avatar styles="message__user-avatar">
          {/*
            Usually would be the user profile img but since we don't
            have users, a dummy icon is used here
          */}
          <img src="/images/user.svg" alt="user" />
        </Avatar>
      </div>

      <div className="message__content">
        <div>
          {/* Also use a dummy username here */}
          <span>Username</span>
          <span className="message__date">{dateDisplay}</span>
        </div>

        <p className="message__body">{message.body}</p>
      </div>
    </div>
  );
}

export default Message;
