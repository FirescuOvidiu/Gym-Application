import AsyncStorage from '@react-native-community/async-storage';

const axios = require('axios').default;
const api = axios.create({baseURL: 'http://192.168.100.2:3000/api'});

export const loginRequest = async ({user}) => {
  return await api.post('/user/login', user);
};

export const registerRequest = async ({user}) => {
  return await api.post(`/user/register`, user);
};

export const userGetRequest = async () => {
  const token = await AsyncStorage.getItem('accessToken');

  return await api.get('/user', {
    headers: {
      authorization: token,
    },
  });
};

export const userPutRequest = async ({userReducer, user}) => {
  const token = await AsyncStorage.getItem('accessToken');

  return await api.put(`/user/${userReducer._id}`, user, {
    headers: {
      Authorization: token,
    },
  });
};

export const userGetWorkoutsRequest = async ({user}) => {
  const token = await AsyncStorage.getItem('accessToken');

  return await api.get(`/user/${user.data.user._id}/workouts`, {
    headers: {
      authorization: token,
    },
  });
};

export const userDeleteWorkoutRequest = async ({userReducer, workout}) => {
  const token = await AsyncStorage.getItem('accessToken');

  return await api.delete(`/user/${userReducer._id}/workouts/${workout._id}`, {
    headers: {
      authorization: token,
    },
  });
};

export const userPostWorkoutRequest = async ({userReducer, workout}) => {
  const token = await AsyncStorage.getItem('accessToken');

  return await api.post(`/user/${userReducer._id}/workouts`, workout, {
    headers: {
      authorization: token,
    },
  });
};

export const gymGetRequest = async () => {
  const token = await AsyncStorage.getItem('accessToken');

  return await api.get('/gym', {
    headers: {
      authorization: token,
    },
  });
};
