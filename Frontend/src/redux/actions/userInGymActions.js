import {ADD_USERINGYM, DELETE_USERFROMGYM, ADD_ALLUSERSINGYM} from '../types';

export const addUserInGym = (userInGym) => {
  return {
    type: ADD_USERINGYM,
    payload: userInGym,
  };
};

export const deleteUserFromGym = (userInGym) => {
  return {
    type: DELETE_USERFROMGYM,
    payload: userInGym,
  };
};

export const addAllUsersInGym = (usersInGym) => {
  return {
    type: ADD_ALLUSERSINGYM,
    payload: usersInGym,
  };
};
