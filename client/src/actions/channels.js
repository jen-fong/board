import axios from "axios";
import { baseURL } from "../api";
import { FETCH_CHANNELS_PENDING, FETCH_CHANNELS_SUCCESS } from "../constants";

export const fetchChannels = () => async (dispatch) => {
  const url = `${baseURL}/channels`;

  dispatch({
    type: FETCH_CHANNELS_PENDING,
  });

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
