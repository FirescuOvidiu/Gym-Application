import {
  ADD_RESERVATION,
  REMOVE_RESERVATION,
  ADD_ALLRESERVATIONS,
} from '../types';

const INITIAL_STATE = {
  allReservations: [],
  reservationsById: {},
};

const reservationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_RESERVATION:
      return {
        allReservations: [action.payload.user, ...state.allReservations],
        reservationsById: {
          [action.payload.user]: action.payload,
          ...state.reservationsById,
        },
      };

    case REMOVE_RESERVATION:
      const {[action.payload]: _, ...reservationsById} = state.reservationsById;
      const allReservations = state.allReservations.filter(
        (reservation) => reservation !== action.payload,
      );

      return {allReservations, reservationsById};

    case ADD_ALLRESERVATIONS:
      const _allReservations = [],
        _reservationsById = {};

      action.payload.forEach((element) => {
        _allReservations.push(element.user);
        _reservationsById[element.user] = element;
      });

      return {
        allReservations: _allReservations,
        reservationsById: _reservationsById,
      };

    default:
      return state;
  }
};

export default reservationReducer;
