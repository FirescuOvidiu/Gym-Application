import {ADD_WORKOUT, DELETE_WORKOUT, ADD_ALLWORKOUTS} from '../types';

const INITIAL_STATE = {
  allWorkouts: [],
  workoutsById: {},
};

const workoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_WORKOUT:
      state.allWorkouts.push(action.payload._id);
      state.workoutsById[action.payload._id] = action.payload;
      return state;

    case DELETE_WORKOUT:
      const index = state.allWorkouts.indexOf(action.payload);

      state.allWorkouts.splice(index, 1);
      delete state.workoutsById[action.payload];
      return state;

    case ADD_ALLWORKOUTS:
      action.payload.forEach((element) => {
        state.allWorkouts.push(element._id);
        state.workoutsById[element._id] = element;
      });
      return state;

    default:
      return state;
  }
};

export default workoutReducer;
