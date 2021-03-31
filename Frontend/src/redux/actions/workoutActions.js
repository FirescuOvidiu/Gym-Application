import {ADD_WORKOUT, DELETE_WORKOUT} from '../types';

export const addWorkout = (workout) => {
  return {
    type: ADD_WORKOUT,
    payload: workout,
  };
};

export const deleteWorkout = (workout) => {
  return {
    type: DELETE_WORKOUT,
    payload: workout,
  };
};
