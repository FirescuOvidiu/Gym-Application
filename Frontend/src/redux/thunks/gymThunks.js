import {addGym, updateGym} from '../actions/gymActions';
import {
  gymGetRequest,
  gymPostReservationRequest,
  gymDeleteReservationRequest,
  gymAddUserRequest,
  gymDeleteUserReqeust,
} from './httpRequests';

export const saveGym = () => {
  return async (dispatch) => {
    try {
      const gym = await gymGetRequest();

      dispatch(addGym(gym.data.gym));
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};

export const _updateGym = ({gym, user, data}) => {
  return async (dispatch) => {
    try {
      let response;

      if (data === 'Someone entered the gym.') {
        response = await gymAddUserRequest({gym, user});
      }

      if (data === 'Someone exited the gym.') {
        response = await gymDeleteUserReqeust({gym, user});
      }

      dispatch(updateGym(response.data.gym));
      alert(`${response.data.status}`);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};

export const deleteReservation = ({gymReducer, userReducer, setDisabled}) => {
  return async (dispatch) => {
    try {
      const response = await gymDeleteReservationRequest({
        gymReducer,
        userReducer,
      });

      dispatch(updateGym(response.data.gym));
      setDisabled(false);
      alert(`${response.data.status}`);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};

export const createReservation = ({gymReducer, reservation, setDisabled}) => {
  return async (dispatch) => {
    try {
      const response = await gymPostReservationRequest({
        gymReducer,
        reservation,
      });

      dispatch(updateGym(response.data.gym));
      setDisabled(true);
      alert(`${response.data.status}`);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};
