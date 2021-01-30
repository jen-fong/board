import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveChannelMessage } from "../../actions/messages";
import { getSelectedChannel } from "../../selectors";
import "./index.css";

function MessageComposer() {
  const dispatch = useDispatch();
  const selectedChannel = useSelector(getSelectedChannel);
  const [message, setMessage] = useState("");

  function handleChange(e) {
    setMessage(e.target.value);
  }

  function handleSubmit() {
    dispatch(saveChannelMessage(selectedChannel.id, message));
    setMessage("");
  }

  useEffect(() => {
    // reset messages when channel changes
    setMessage("");
  }, [selectedChannel.id]);

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
