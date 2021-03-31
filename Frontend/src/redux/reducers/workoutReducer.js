import {ADD_WORKOUT, DELETE_WORKOUT} from '../types';

const INITIAL_STATE = {
  allWorkouts: [],
  workoutsById: {},
};

const workoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_WORKOUT:
      let {allWorkouts, workoutsById} = state;

      allWorkouts.push(action.payload._id);
      workoutsById[action.payload._id] = action.payload;

      return {allWorkouts, workoutsById};
    case DELETE_WORKOUT:
      return state;
    default:
      return state;
  }
};

export default workoutReducer;
