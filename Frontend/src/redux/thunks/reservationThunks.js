import {
  addReservation,
  deleteReservation,
  addAllReservations,
} from '../actions/reservationActions';
import {
  reservationPostRequest,
  reservationDeleteRequest,
  reservationGetRequest,
} from './httpRequests';

export const saveReservations = ({gymReducer}) => {
  return async (dispatch) => {
    try {
      const reservations = await reservationGetRequest({gymReducer});

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

export const _deleteReservation = ({reservation, setDisabled}) => {
  return async (dispatch) => {
    try {
      const response = await reservationDeleteRequest({
        reservation,
      });

      dispatch(deleteReservation(reservation.user));
      setDisabled(false);
      alert(`${response.data.status}`);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};
