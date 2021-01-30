import axios from "axios";
import { baseURL } from "../api";
import {
  FETCH_CHANNELS_SUCCESS,
  FETCH_CHANNEL_MESSAGES_PENDING,
  FETCH_CHANNEL_MESSAGES_SUCCESS,
} from "../constants";

export const fetchChannels = () => async (dispatch) => {
  const url = `${baseURL}/channels`;

  // specs says all actions are optimistic without without failure handling
  // so I am just console logging any errors
  try {
    const channelsResponse = await axios.get(url);

    dispatch({
      type: FETCH_CHANNELS_SUCCESS,
      payload: channelsResponse.data,
    });
  } catch (e) {
    console.log(e);
  }
};
