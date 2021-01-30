import {
  FETCH_CHANNEL_MESSAGES_PENDING,
  FETCH_CHANNEL_MESSAGES_SUCCESS,
  SAVE_CHANNEL_MESSAGE,
} from "../constants";

const initialState = {
  byChannelId: {}, // this could probably be broken out to own reducer
  byId: {},
  ids: [],
  isLoading: false,
};

function normalizeMessages(messages) {
  const ids = [];
  const byId = messages.reduce((accum, message) => {
    accum[message.id] = message;
    ids.push(message.id);

    return accum;
  }, {});

  return { ids, byId };
}

function setMessagesToChannel(channelId, messages) {
  return {
    [channelId]: messages.map((message) => message.id),
  };
}

export function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHANNEL_MESSAGES_PENDING:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_CHANNEL_MESSAGES_SUCCESS:
      const { channelId } = action.meta;

      return {
        ...state,
        ...normalizeMessages(action.payload),
        byChannelId: {
          ...state.byChannelId,
          ...setMessagesToChannel(channelId, action.payload),
        },
        isLoading: false,
      };

    case SAVE_CHANNEL_MESSAGE:
      return {
        ...state,
        byChannelId: {
          ...state.byChannelId,
          [action.payload.channelId]: state.byChannelId[
            action.payload.channelId
          ].concat(action.payload.id),
        },
        byId: {
          ...state.byId,
          [action.payload.id]: action.payload,
        },
      };

    default:
      return state;
  }
}
