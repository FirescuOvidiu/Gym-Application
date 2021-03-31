import AsyncStorage from '@react-native-community/async-storage';

const axios = require('axios').default;
const api = axios.create({baseURL: 'http://192.168.100.2:3000/api'});

import {addUser} from '../actions/userActions';
import {addWorkout} from '../actions/workoutActions';

export const loginUser = ({user, navigation}) => {
  return async () => {
    try {
      const response = await api.post('/user/login', user);

      await AsyncStorage.setItem('accessToken', response.data.accessToken);
      navigation.replace('TabNavigatorRoutes');
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};

export const registerUser = ({user}) => {
  return async () => {
    try {
      await api.post(`/user/register`, user);

      alert(`${response.data.status}`);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};

export const saveUser = () => {
  return async (dispatch) => {
    const token = await AsyncStorage.getItem('accessToken');

    try {
      let user = await api.get('/user', {
        headers: {
          authorization: token,
        },
      });

      user = user.data.user;
      user.birthday = user.birthday.substring(0, 10);
      user.date = user.date.substring(0, 10);
      dispatch(addUser(user));
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};

export const _updateUser = ({userReducer, user, onFinish}) => {
  return async () => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      const response = await api.put(`/user/${userReducer._id}`, user, {
        headers: {
          Authorization: token,
        },
      });

      onFinish(null, response.data.status);
    } catch (error) {
      onFinish(error.response.data.message, null);
    }
  };
};

export const getWorkouts = ({userReducer, setWorkouts}) => {
  return async () => {
    const token = await AsyncStorage.getItem('accessToken');

    try {
      let workouts = await api.get(`/user/${userReducer._id}/workouts`, {
        headers: {
          authorization: token,
        },
      });

      setWorkouts(workouts.data.workouts);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};

export const deleteWorkout = ({userReducer, workout}) => {
  return async () => {
    const token = await AsyncStorage.getItem('accessToken');

    try {
      const response = await api.delete(
        `/user/${userReducer._id}/workouts/${workout._id}`,
        {
          headers: {
            authorization: token,
          },
        },
      );

      alert(`${response.data.status}`);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};

export const createWorkout = ({userReducer, workout}) => {
  return async (dispatch) => {
    const token = await AsyncStorage.getItem('accessToken');

    try {
      const response = await api.post(
        `/user/${userReducer._id}/workouts`,
        workout,
        {
          headers: {
            authorization: token,
          },
        },
      );

      dispatch(addWorkout(response.data.workout));
      alert(`${response.data.status}`);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};
