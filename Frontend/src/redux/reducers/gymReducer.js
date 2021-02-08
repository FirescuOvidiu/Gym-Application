import {ADD_GYM} from '../types';

const INITIAL_STATE = {
  _id: '',
  name: '',
  email: '',
  phone: '',
  address: '',
  openingTime: '',
  closingTime: '',
  date: '',
};

const gymReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_GYM:
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export default gymReducer;
