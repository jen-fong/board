import {
  FETCH_CHANNELS_PENDING,
  FETCH_CHANNELS_SUCCESS,
  FETCH_CHANNEL_MESSAGES_SUCCESS,
} from "../constants";
import { normalize } from "./utils";

export const initialState = {
  byId: {},
  ids: [],
  selectedChannel: null,
  isLoading: false,
};

export function channelsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHANNELS_PENDING:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_CHANNELS_SUCCESS:
      return {
        ...state,
        ...normalize(action.payload),
        isLoading: false,
      };

    case FETCH_CHANNEL_MESSAGES_SUCCESS:
      return {
        ...state,
        selectedChannel: action.meta.channelId,
      };

    default:
      return state;
  }
}
