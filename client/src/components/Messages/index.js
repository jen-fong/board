import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { getChannelMessages, getSelectedChannel } from "../../selectors";

import "./index.css";
import Message from "./Message";

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
        <div className="messages-none">
          There are no messages in this channel. Start by sending one now!
        </div>
      ) : (
        <div className="messages-list">
          {channelMessages.map((message) => {
            return <Message key={message.id} message={message} />;
          })}

          <div ref={messageBottomRef} />
        </div>
      )}
    </section>
  );
}

export default Messages;
