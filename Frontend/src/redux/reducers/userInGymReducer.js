import {ADD_USERINGYM, REMOVE_USERFROMGYM, ADD_ALLUSERSINGYM} from '../types';

const INITIAL_STATE = {
  allUsersInGym: [],
  usersInGymById: {},
};

const userInGymReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USERINGYM:
      return {
        allUsersInGym: [action.payload.user, ...state.allUsersInGym],
        usersInGymById: {
          [action.payload.user]: action.payload,
          ...state.usersInGymById,
        },
      };

    case REMOVE_USERFROMGYM:
      const {[action.payload]: _, ...usersInGymById} = state.usersInGymById;
      const allUsersInGym = state.allUsersInGym.filter(
        (user) => user !== action.payload,
      );

      return {allUsersInGym, usersInGymById};

    case ADD_ALLUSERSINGYM:
      const _allUsersInGym = [],
        _usersInGymById = {};

      action.payload.forEach((element) => {
        _allUsersInGym.push(element.user);
        _usersInGymById[element.user] = element;
      });

      return {
        allUsersInGym: _allUsersInGym,
        usersInGymById: _usersInGymById,
      };

    default:
      return state;
  }
};

export default userInGymReducer;
