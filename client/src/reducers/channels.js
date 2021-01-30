import { FETCH_CHANNELS_SUCCESS, SELECT_CHANNEL } from "../constants";

const initialState = {
  all: [],
  selectedChannel: null,
};

export function channelsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHANNELS_SUCCESS:
      return {
        ...state,
        all: action.payload,
      };

    case SELECT_CHANNEL:
      return {
        ...state,
        selectedChannel: action.payload.id,
      };

    default:
      return state;
  }
}
