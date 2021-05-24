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

export const googleLoginRequest = async ({credential}) => {
  return await api.post('/user/googlelogin', credential);
};

export const sendEmailRequest = async ({email, code}) => {
  return await api.post('/user/email', {email: email, code: code});
};

export const registerRequest = async ({user}) => {
  return await api.post('/user/register', user);
};

export const userGetRequest = async () => {
  return await api.get('/user');
};

export const userGetByEmailRequest = async ({email}) => {
  return await api.get(`/user/email/${email}`);
};

export const userPutRequest = async ({user}) => {
  return await api.put(`/user/${user._id}`, user);
};

export const workoutGetRequest = async ({user}) => {
  return await api.get(`/workout/${user._id}`);
};

export const workoutPostRequest = async ({workout}) => {
  return await api.post('/workout', workout);
};

export const workoutDeleteRequest = async ({workout}) => {
  return await api.delete(`/workout/${workout._id}`);
};

export const gymGetRequest = async () => {
  return await api.get('/gym');
};

export const userInGymGetRequest = async ({gym}) => {
  return await api.get(`/userInGym/${gym._id}`);
};

export const userInGymPostRequest = async ({userInGym}) => {
  return await api.post('/userInGym', userInGym);
};

export const userInGymDeleteRequest = async ({userInGym}) => {
  return await api.delete(`/userInGym/${userInGym._id}`);
};

export const reservationGetRequest = async ({gym}) => {
  return await api.get(`/reservation/${gym._id}`);
};

export const reservationPostRequest = async ({reservation}) => {
  return await api.post('/reservation', reservation);
};

export const reservationDeleteRequest = async ({reservation}) => {
  return await api.delete(`/reservation/${reservation._id}`);
};
