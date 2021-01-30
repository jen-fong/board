import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChannels } from "../../actions/channels";
import { fetchChannelMessages } from "../../actions/messages";
import { getChannels, getSelectedChannel } from "../../selectors";
import Channel from "./Channel";
import "./index.css";

function Channels() {
  const dispatch = useDispatch();
  const channels = useSelector(getChannels);
  const selectedChannel = useSelector(getSelectedChannel);

  useEffect(() => {
    dispatch(fetchChannels());
  }, [dispatch]);

  function handleChannelClick(id) {
    dispatch(fetchChannelMessages(id));
  }

  return (
    <section className="channels">
      <header className="channels__header">Channels</header>
      {channels.map((channel) => {
        const isActiveChannel =
          selectedChannel && selectedChannel.id === channel.id;

        return (
          <Channel
            channel={channel}
            isActive={isActiveChannel}
            key={channel.id}
            onClick={handleChannelClick}
            data-testid="channel"
          />
        );
      })}
    </section>
  );
}

export default Channels;
