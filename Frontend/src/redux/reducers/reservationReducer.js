import {
  ADD_RESERVATION,
  REMOVE_RESERVATION,
  ADD_ALLRESERVATIONS,
} from '../types';

const INITIAL_STATE = {
  allReservations: [],
  ReservationsById: {},
};

const reservationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_RESERVATION:
      state.allReservations.push(action.payload.user);
      state.ReservationsById[action.payload.user] = action.payload;
      return state;

    case REMOVE_RESERVATION:
      const index = state.allReservations.indexOf(action.payload);

      state.allReservations.splice(index, 1);
      delete state.ReservationsById[action.payload];
      return state;

    case ADD_ALLRESERVATIONS:
      state.allReservations = [];
      action.payload.forEach((element) => {
        state.allReservations.push(element.user);
        state.ReservationsById[element.user] = element;
      });
      return state;

    default:
      return state;
  }
};

export default reservationReducer;
