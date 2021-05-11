import {ADD_GYM, UPDATE_GYM} from '../types';

export const addGym = (gym) => {
  return {
    type: ADD_GYM,
    payload: gym,
  };
};

export const updateGym = (updatedGym) => {
  return {
    type: UPDATE_GYM,
    payload: updatedGym,
  };
};
