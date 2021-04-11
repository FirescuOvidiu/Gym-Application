import {ADD_GYM, UPDATE_GYM} from '../types';

const INITIAL_STATE = {
  _id: '',
  name: '',
  email: '',
  phone: '',
  address: '',
  openingTime: '',
  closingTime: '',
  usersInGym: 0,
  maxUsersInGym: 0,
  reservations: [],
  date: '',
};

const gymReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_GYM:
      return {...state, ...action.payload};

    case UPDATE_GYM:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone,
        address: action.payload.address,
        openingTime: action.payload.openingTime,
        closingTime: action.payload.closingTime,
        usersInGym: action.payload.usersInGym,
        maxUsersInGym: action.payload.maxUsersInGym,
        reservations: action.payload.reservations,
        date: action.payload.date,
      };

    default:
      return state;
  }
};

export default gymReducer;
