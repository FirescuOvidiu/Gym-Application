import {ADD_USERINGYM, REMOVE_USERFROMGYM, ADD_ALLUSERSINGYM} from '../types';

const INITIAL_STATE = {
  allUsersInGym: [],
  usersInGymById: {},
};

const userInGymReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USERINGYM:
      state.allUsersInGym.push(action.payload.user);
      state.usersInGymById[action.payload.user] = action.payload;
      return state;

    case REMOVE_USERFROMGYM:
      const index = state.allUsersInGym.indexOf(action.payload);

      state.allUsersInGym.splice(index, 1);
      delete state.usersInGymById[action.payload];
      return state;

    case ADD_ALLUSERSINGYM:
      state.allUsersInGym = [];
      action.payload.forEach((element) => {
        state.allUsersInGym.push(element.user);
        state.usersInGymById[element.user] = element;
      });
      return state;

    default:
      return state;
  }
};

export default userInGymReducer;
