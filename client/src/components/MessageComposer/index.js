import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveChannelMessage } from "../../actions/channels";
import "./index.css";

function MessageComposer() {
  const dispatch = useDispatch();
  const selectedChannel = useSelector(
    (state) => state.channels.selectedChannel
  );
  const [message, setMessage] = useState("");

  function handleChange(e) {
    setMessage(e.target.value);
  }

  function handleSubmit() {
    dispatch(saveChannelMessage(selectedChannel, message));
    setMessage("");
  }

  const submitBtnIsDisabled = !message.length;

  return (
    <section className="message-composer">
      <textarea
        className="message-composer__textbox"
        onChange={handleChange}
        value={message}
      />

      <div>
        <button
          className={`btn btn--primary ${
            submitBtnIsDisabled && "btn--disabled"
          }`}
          onClick={handleSubmit}
          disabled={submitBtnIsDisabled}
        >
          submit
        </button>
      </div>
    </section>
  );
}

export default MessageComposer;
