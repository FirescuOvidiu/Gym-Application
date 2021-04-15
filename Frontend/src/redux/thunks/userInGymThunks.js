import {
  addAllUsersInGym,
  addUserInGym,
  deleteUserFromGym,
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

export const createUserInGym = ({userInGym}) => {
  return async (dispatch) => {
    try {
      const response = await userInGymPostRequest({
        userInGym,
      });

      dispatch(addUserInGym(response.data.userInGym));
      alert(`${response.data.status}`);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};

export const _deleteUserFromGym = ({userInGym}) => {
  return async (dispatch) => {
    try {
      if (userInGym === undefined) {
        alert(`The user isn't in the gym.`);
        return;
      }
      const response = await userInGymDeleteRequest({
        userInGym,
      });

      dispatch(deleteUserFromGym(response.data.userInGym));
      alert(`${response.data.status}`);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};
