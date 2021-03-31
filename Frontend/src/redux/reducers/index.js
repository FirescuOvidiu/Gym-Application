import {combineReducers} from 'redux';
import userReducer from './userReducer';
import gymReducer from './gymReducer';
import workoutReducer from './workoutReducer';

export default combineReducers({
  userReducer,
  gymReducer,
  workoutReducer,
});
