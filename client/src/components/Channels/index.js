import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChannels, selectChannel } from "../../actions/channels";
import "./index.css";

function Channel() {
  const dispatch = useDispatch();
  const channels = useSelector((state) => state.channels.all);

  useEffect(() => {
    dispatch(fetchChannels());
  }, [dispatch]);

  function handleChannelClick(id) {
    dispatch(selectChannel(id));
  }

  return (
    <section className="channels">
      <header className="channels__header">Channels</header>

      {channels.map((channel) => {
        return (
          <div
            className="channel"
            key={channel.id}
            onClick={() => handleChannelClick(channel.id)}
          >
            {channel.name}
          </div>
        );
      })}
    </section>
  );
}

export default Channel;
