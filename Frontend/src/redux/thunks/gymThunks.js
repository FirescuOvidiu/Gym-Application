import {addGym} from '../actions/gymActions';
import {gymGetRequest} from './httpRequests';

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

export const updateGym = ({gym}) => {
  return async (dispatch) => {
    try {
      const response = await gymPutRequest(gym);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};
