import { combineReducers } from "redux";
import { channelsReducer } from "./channels";
import { messagesReducer } from "./messages";

export default combineReducers({
  channels: channelsReducer,
  messages: messagesReducer,
});
