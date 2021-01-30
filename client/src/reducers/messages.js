import {
  FETCH_CHANNEL_MESSAGES_SUCCESS,
  SAVE_CHANNEL_MESSAGE,
} from "../constants";

const initialState = {
  byChannelId: {},
};

export function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHANNEL_MESSAGES_SUCCESS:
      const { channelId } = action.meta;

      return {
        ...state,
        byChannelId: {
          ...state.byChannelId,
          [channelId]: action.payload,
        },
      };

    case SAVE_CHANNEL_MESSAGE:
      return {
        ...state,
        byChannelId: {
          ...state.byChannelId,
          [action.payload.channelId]: state.byChannelId[
            action.payload.channelId
          ].concat(action.payload),
        },
      };

    default:
      return state;
  }
}
