import {
  FETCH_CHANNELS_PENDING,
  FETCH_CHANNELS_SUCCESS,
  FETCH_CHANNEL_MESSAGES_SUCCESS,
} from "../constants";

const initialState = {
  byId: {},
  ids: [],
  selectedChannel: null,
  isLoading: false,
};

function normalizeChannelsById(channels) {
  const ids = [];
  const byId = channels.reduce((accum, channel) => {
    accum[channel.id] = channel;
    ids.push(channel.id);

    return accum;
  }, {});

  return { ids, byId };
}

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
        ...normalizeChannelsById(action.payload),
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
