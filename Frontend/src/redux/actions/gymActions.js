import {ADD_GYM} from '../types';

export const addGym = (gym) => {
  return {
    type: ADD_GYM,
    payload: gym,
  };
};
