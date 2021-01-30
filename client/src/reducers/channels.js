import { FETCH_CHANNELS_SUCCESS } from "../constants";

const initialState = {
  data: [],
};

export function channelsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHANNELS_SUCCESS:
      return {
        data: action.payload,
      };

    default:
      return state;
  }
}
