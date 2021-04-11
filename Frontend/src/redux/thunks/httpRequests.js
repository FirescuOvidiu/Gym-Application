import AsyncStorage from '@react-native-community/async-storage';

const axios = require('axios').default;
const api = axios.create({baseURL: 'http://192.168.100.2:3000/api'});

api.interceptors.request.use(
  async (config) => {
    config.headers = {
      Authorization: await AsyncStorage.getItem('accessToken'),
    };

    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

export const loginRequest = async ({user}) => {
  return await api.post('/user/login', user);
};

export const registerRequest = async ({user}) => {
  return await api.post(`/user/register`, user);
};

export const userGetRequest = async () => {
  return await api.get('/user');
};

export const userPutRequest = async ({userReducer, user}) => {
  return await api.put(`/user/${userReducer._id}`, user);
};

export const userGetWorkoutsRequest = async ({user}) => {
  return await api.get(`/user/${user._id}/workouts`);
};

export const userDeleteWorkoutRequest = async ({userReducer, workout}) => {
  return await api.delete(`/user/${userReducer._id}/workouts/${workout._id}`);
};

export const userPostWorkoutRequest = async ({userReducer, workout}) => {
  return await api.post(`/user/${userReducer._id}/workouts`, workout);
};

export const gymGetRequest = async () => {
  return await api.get('/gym');
};

export const gymPutRequest = async (gym) => {
  return await api.put(`/gym/${gym._id}`, gym);
};
