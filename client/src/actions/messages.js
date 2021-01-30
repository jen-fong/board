import axios from "axios";
import { baseURL } from "../api";
import {
  FETCH_CHANNEL_MESSAGES_PENDING,
  FETCH_CHANNEL_MESSAGES_SUCCESS,
  SAVE_CHANNEL_MESSAGE_SUCCESS,
} from "../constants";

export const fetchChannelMessages = (channelId) => async (dispatch) => {
  const url = `${baseURL}/messages/${channelId}`;

  dispatch({
    type: FETCH_CHANNEL_MESSAGES_PENDING,
  });

  try {
    const messagesResponse = await axios.get(url);

    dispatch({
      type: FETCH_CHANNEL_MESSAGES_SUCCESS,
      payload: messagesResponse.data,
      meta: { channelId },
    });
  } catch (e) {
    console.log(e);
  }
};

export const saveChannelMessage = (channelId, message) => async (dispatch) => {
  const url = `${baseURL}/${channelId}`;

  const body = {
    body: message,
  };
  try {
    const response = await axios.post(url, body);

    dispatch({
      type: SAVE_CHANNEL_MESSAGE_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    console.log(e);
  }
};
