import {ADD_WORKOUT, REMOVE_WORKOUT, ADD_ALLWORKOUTS} from '../types';

const INITIAL_STATE = {
  allWorkouts: [],
  workoutsById: {},
};

const workoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_WORKOUT:
      return {
        allWorkouts: [action.payload._id, ...state.allWorkouts],
        workoutsById: {
          [action.payload._id]: action.payload,
          ...state.workoutsById,
        },
      };

    case REMOVE_WORKOUT:
      const {[action.payload]: _, ...workoutsById} = state.workoutsById;
      const allWorkouts = state.allWorkouts.filter(
        (workout) => workout !== action.payload,
      );

      return {allWorkouts, workoutsById};

    case ADD_ALLWORKOUTS:
      const _allWorkouts = [],
        _workoutsById = {};

      action.payload.forEach((element) => {
        _allWorkouts.push(element._id);
        _workoutsById[element._id] = element;
      });

      return {
        allWorkouts: _allWorkouts,
        workoutsById: _workoutsById,
      };

    default:
      return state;
  }
};

export default workoutReducer;
