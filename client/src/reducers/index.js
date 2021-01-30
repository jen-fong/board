import { combineReducers } from "redux";
import { channelsReducer } from "./channels";

export default combineReducers({
  channels: channelsReducer,
});
