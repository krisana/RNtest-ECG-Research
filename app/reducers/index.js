import { combineReducers } from 'redux';
import NewsReducer from './NewsReducer';

const appReducer = combineReducers({
  news: NewsReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;