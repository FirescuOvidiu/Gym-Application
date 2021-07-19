import {ADD_WORKOUT, REMOVE_WORKOUT, ADD_ALLWORKOUTS} from '../types';

export const addWorkout = (workout) => {
  return {
    type: ADD_WORKOUT,
    payload: workout,
  };
};

export const removeWorkout = (workoutId) => {
  return {
    type: REMOVE_WORKOUT,
    payload: workoutId,
  };
};

export const addAllWorkouts = (workouts) => {
  return {
    type: ADD_ALLWORKOUTS,
    payload: workouts,
  };
};
