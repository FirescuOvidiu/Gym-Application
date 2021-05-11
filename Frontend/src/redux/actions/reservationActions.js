import {
  ADD_RESERVATION,
  REMOVE_RESERVATION,
  ADD_ALLRESERVATIONS,
} from '../types';

export const addReservation = (reservation) => {
  return {
    type: ADD_RESERVATION,
    payload: reservation,
  };
};

export const removeReservation = (userId) => {
  return {
    type: REMOVE_RESERVATION,
    payload: userId,
  };
};

export const addAllReservations = (reservation) => {
  return {
    type: ADD_ALLRESERVATIONS,
    payload: reservation,
  };
};
