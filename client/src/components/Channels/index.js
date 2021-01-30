import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { fetchChannels } from "../../actions/channels";
import { fetchChannelMessages } from "../../actions/messages";
import { getChannels, getSelectedChannel } from "../../selectors";
import Avatar from "../Avatar";
import "./index.css";

function Channel() {
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
          <div
            className={classNames("channel", {
              "channel--active": isActiveChannel,
            })}
            key={channel.id}
            onClick={() => handleChannelClick(channel.id)}
          >
            <Avatar>{channel.name[0]}</Avatar>
            <span className="channel__text">{channel.name}</span>
          </div>
        );
      })}
    </section>
  );
}

export default Channel;
