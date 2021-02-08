import {combineReducers} from 'redux';
import userReducer from './userReducer';
import gymReducer from './gymReducer';

export default combineReducers({
  userReducer,
  gymReducer,
});
