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
                <div>{dateDisplay}</div>
                {message.body}
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
