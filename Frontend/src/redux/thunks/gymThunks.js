import AsyncStorage from '@react-native-community/async-storage';

const axios = require('axios').default;

import {addGym} from '../actions/gymActions';

export const saveGym = () => {
  return async (dispatch) => {
    const token = await AsyncStorage.getItem('accessToken');

    try {
      let gym = await axios.get('http://192.168.100.2:3000/api/gym', {
        headers: {
          authorization: token,
        },
      });

      dispatch(addGym(gym.data.gym));
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};
