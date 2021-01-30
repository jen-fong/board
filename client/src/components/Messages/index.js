import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { getChannelMessages } from "../../selectors";

import "./index.css";

function Messages() {
  const messageBottomRef = useRef(null);
  const channelMessages = useSelector(getChannelMessages);

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
      <header></header>

      {channelMessages.map((message) => {
        return (
          <div className="message" key={message.id}>
            {message.body}
          </div>
        );
      })}

      <div ref={messageBottomRef} />
    </section>
  );
}

export default Messages;
