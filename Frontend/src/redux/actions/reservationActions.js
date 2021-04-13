import {
  ADD_RESERVATION,
  DELETE_RESERVATION,
  ADD_ALLRESERVATIONS,
} from '../types';

export const addReservation = (reservation) => {
  return {
    type: ADD_RESERVATION,
    payload: reservation,
  };
};

export const deleteReservation = (userId) => {
  return {
    type: DELETE_RESERVATION,
    payload: userId,
  };
};

export const addAllReservations = (reservation) => {
  return {
    type: ADD_ALLRESERVATIONS,
    payload: reservation,
  };
};
