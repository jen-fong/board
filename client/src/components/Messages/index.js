import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { getChannelMessages, getSelectedChannel } from "../../selectors";

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

      <div className="messages-list">
        {channelMessages.map((message) => {
          return (
            <div className="message" key={message.id}>
              {message.body}
            </div>
          );
        })}

        <div ref={messageBottomRef} />
      </div>
    </section>
  );
}

export default Messages;
