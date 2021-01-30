import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchChannelMessages } from "../../actions/channels";

import "./index.css";

function Messages() {
  const messageBottomRef = useRef(null);

  const dispatch = useDispatch();
  const selectedChannel = useSelector(
    (state) => state.channels.selectedChannel
  );
  const channelMessages = useSelector(
    (state) => state.messages.byChannelId[selectedChannel]
  );

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

  useEffect(() => {
    dispatch(fetchChannelMessages(selectedChannel));
  }, [dispatch, selectedChannel]);

  return (
    <section className="messages">
      {channelMessages &&
        channelMessages.map((message) => {
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
