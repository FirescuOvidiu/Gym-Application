import {ADD_USER, UPDATE_USER} from '../types';

const INITIAL_STATE = {
  _id: '',
  email: '',
  username: '',
  phone: '',
  address: '',
  birthday: '',
  gender: '',
  name: {
    first: '',
    last: '',
  },
  date: '',
  role: 'user',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER:
      return {...state, ...action.payload};

    case UPDATE_USER:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
