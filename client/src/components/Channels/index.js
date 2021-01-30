import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChannels } from "../../actions/channels";
import "./index.css";

function Channel() {
  const dispatch = useDispatch();
  const channels = useSelector((state) => state.channels.data);

  useEffect(() => {
    dispatch(fetchChannels());
  }, [dispatch]);

  function selectChannel() {}

  return (
    <section className="channels">
      <header className="channels__header">Channels</header>

      {channels.map((channel) => {
        return (
          <div
            className="channel"
            key={channel.id}
            onClick={() => selectChannel(channel.id)}
          >
            {channel.name}
          </div>
        );
      })}
    </section>
  );
}

export default Channel;
