import {addGym, updateGym} from '../actions/gymActions';
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

export const _updateGym = ({gym}) => {
  return async (dispatch) => {
    try {
      const response = await gymPutRequest({gym});

      dispatch(updateGym(gym));
      alert(`${response.data.status}`);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};
