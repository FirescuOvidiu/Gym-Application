import {
  addAllUsersInGym,
  addUserInGym,
  removeUserFromGym,
} from '../actions/userInGymActions';
import {
  userInGymGetRequest,
  userInGymPostRequest,
  userInGymDeleteRequest,
} from './httpRequests';

export const saveUsersInGym = ({gym}) => {
  return async (dispatch) => {
    try {
      const usersInGym = await userInGymGetRequest({gym});

      dispatch(addAllUsersInGym(usersInGym.data.usersInGym));
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};

export const createUserInGym = ({userInGym, setUserInGym}) => {
  return async (dispatch) => {
    try {
      const response = await userInGymPostRequest({
        userInGym,
      });

      dispatch(addUserInGym(response.data.userInGym));
      setUserInGym(true);
      alert(`${response.data.status}`);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};

export const deleteUserFromGym = ({userInGym, setUserInGym}) => {
  return async (dispatch) => {
    try {
      const response = await userInGymDeleteRequest({
        userInGym,
      });

      dispatch(removeUserFromGym(userInGym.user));
      setUserInGym(false);
      alert(`${response.data.status}`);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};
