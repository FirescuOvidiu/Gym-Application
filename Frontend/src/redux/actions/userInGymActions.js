import {ADD_USERINGYM, REMOVE_USERFROMGYM, ADD_ALLUSERSINGYM} from '../types';

export const addUserInGym = (userInGym) => {
  return {
    type: ADD_USERINGYM,
    payload: userInGym,
  };
};

export const removeUserFromGym = (userInGym) => {
  return {
    type: REMOVE_USERFROMGYM,
    payload: userInGym,
  };
};

export const addAllUsersInGym = (usersInGym) => {
  return {
    type: ADD_ALLUSERSINGYM,
    payload: usersInGym,
  };
};
