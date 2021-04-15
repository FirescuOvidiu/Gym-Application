import {
  addReservation,
  removeReservation,
  addAllReservations,
} from '../actions/reservationActions';
import {
  reservationPostRequest,
  reservationDeleteRequest,
  reservationGetRequest,
} from './httpRequests';

export const saveReservations = ({gym}) => {
  return async (dispatch) => {
    try {
      const reservations = await reservationGetRequest({gym});

      dispatch(addAllReservations(reservations.data.reservations));
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};

export const createReservation = ({reservation, setDisabled}) => {
  return async (dispatch) => {
    try {
      const response = await reservationPostRequest({
        reservation,
      });
      dispatch(addReservation(response.data.reservation));
      setDisabled(true);
      alert(`${response.data.status}`);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};

export const deleteReservation = ({reservation, setDisabled}) => {
  return async (dispatch) => {
    try {
      const response = await reservationDeleteRequest({
        reservation,
      });

      dispatch(removeReservation(reservation.user));
      setDisabled(false);
      alert(`${response.data.status}`);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};
