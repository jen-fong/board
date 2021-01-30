import logo from "./logo.svg";
import "./App.css";
import Channel from "./components/Channels";
import Messages from "./components/Messages";
import { useSelector } from "react-redux";
import MessageComposer from "./components/MessageComposer";
import { getSelectedChannel } from "./selectors";

function App() {
  const selectedChannel = useSelector(getSelectedChannel);
  const messagesLoading = useSelector((state) => state.messages.isLoading);

  return (
    <div className="app">
      <Channel />

      {selectedChannel && !messagesLoading ? (
        <div className="messages-container">
          <Messages />
          <MessageComposer />
        </div>
      ) : (
        <div className="messages-container">
          Please select a channel to view messages
        </div>
      )}
    </div>
  );
}

export default App;
