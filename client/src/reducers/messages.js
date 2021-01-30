import {
  FETCH_CHANNEL_MESSAGES_PENDING,
  FETCH_CHANNEL_MESSAGES_SUCCESS,
  SAVE_CHANNEL_MESSAGE_SUCCESS,
} from "../constants";
import { normalize } from "./utils";

export const initialState = {
  byChannelId: {},
  byId: {},
  ids: [],
  isLoading: false,
};

function setMessagesToChannel(channelId, messages) {
  return {
    [channelId]: messages.map((message) => message.id),
  };
}

function addMessage(state, payload) {
  const messageId = payload.id;
  const channelWithNewMessage = state.byChannelId[payload.channelId].concat(
    messageId
  );

  // Would have been a good idea to use immer to create immutable structures
  // and prevent this way of updating the state
  return {
    ...state,
    byChannelId: {
      ...state.byChannelId,
      [payload.channelId]: channelWithNewMessage,
    },
    byId: {
      ...state.byId,
      [messageId]: payload,
    },
    ids: state.ids.concat(messageId),
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
        ...normalize(action.payload),
        byChannelId: {
          ...state.byChannelId,
          ...setMessagesToChannel(channelId, action.payload),
        },
        isLoading: false,
      };

    case SAVE_CHANNEL_MESSAGE_SUCCESS:
      return addMessage(state, action.payload);

    default:
      return state;
  }
}
