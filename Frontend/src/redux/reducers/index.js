import {combineReducers} from 'redux';
import userReducer from './userReducer';
import gymReducer from './gymReducer';
import workoutReducer from './workoutReducer';
import reservationReducer from './reservationReducer';
import userInGymReducer from './userInGymReducer.js';

export default combineReducers({
  userReducer,
  gymReducer,
  workoutReducer,
  reservationReducer,
  userInGymReducer,
});
