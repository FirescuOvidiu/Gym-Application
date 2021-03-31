import {ADD_WORKOUT, DELETE_WORKOUT, ADD_ALLWORKOUTS} from '../types';

export const addWorkout = (workout) => {
  return {
    type: ADD_WORKOUT,
    payload: workout,
  };
};

export const deleteWorkout = (workoutId) => {
  return {
    type: DELETE_WORKOUT,
    payload: workoutId,
  };
};

export const addAllWorkouts = (workouts) => {
  return {
    type: ADD_ALLWORKOUTS,
    payload: workouts,
  };
};
