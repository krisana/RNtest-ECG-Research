import {
  GET_NEWS,
  GET_NEWS_SUCCESS,
  GET_NEWS_FAILED
} from '../actions/types';

const INITIAL_STATE = {
  feed: [],
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_NEWS:
      return {
        loading: true,
      };
    case GET_NEWS_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        feed: action.payload,
      };
    case GET_NEWS_FAILED:
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};