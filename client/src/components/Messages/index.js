import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { getChannelMessages, getSelectedChannel } from "../../selectors";
import Avatar from "../Avatar";

import "./index.css";

function Messages() {
  const messageBottomRef = useRef(null);
  const channelMessages = useSelector(getChannelMessages);
  const channel = useSelector(getSelectedChannel);

  function scrollToBottom() {
    messageBottomRef &&
      messageBottomRef.current &&
      messageBottomRef.current.scrollIntoView({
        behavior: "auto",
      });
  }

  useEffect(() => {
    scrollToBottom();
  }, [channelMessages]);

  return (
    <section className="messages">
      <header className="messages__header">{channel.name}</header>

      {!channelMessages.length ? (
        <div className="message">
          There are no messages in this channel. Start by sending one now!
        </div>
      ) : (
        <div className="messages-list">
          {channelMessages.map((message) => {
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

                  <p>{message.body}</p>
                </div>
              </div>
            );
          })}

          <div ref={messageBottomRef} />
        </div>
      )}
    </section>
  );
}

export default Messages;
