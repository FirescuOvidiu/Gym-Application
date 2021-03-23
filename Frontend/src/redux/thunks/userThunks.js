import AsyncStorage from '@react-native-community/async-storage';

const axios = require('axios').default;

import {addUser} from '../actions/userActions';

export const loginUser = ({userEmail, userPassword, navigation}) => {
  return async () => {
    try {
      const response = await axios.post(
        `http://192.168.100.2:3000/api/user/login`,
        {
          email: userEmail,
          password: userPassword,
        },
      );
      await AsyncStorage.setItem('accessToken', response.data.accessToken);
      navigation.replace('TabNavigatorRoutes');
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};

export const registerUser = ({
  userName,
  userEmail,
  userPassword,
  userPhone,
  userAddress,
  userBirthday,
  userGender,
  userFirstName,
  userLastName,
}) => {
  return async () => {
    try {
      await axios.post(`http://192.168.100.2:3000/api/user/register`, {
        username: userName,
        email: userEmail,
        password: userPassword,
        phone: userPhone,
        address: userAddress,
        birthday: userBirthday,
        gender: userGender,
        name: {
          first: userFirstName,
          last: userLastName,
        },
      });

      alert('Registration successful.');
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};

export const saveUser = () => {
  return async (dispatch) => {
    const token = await AsyncStorage.getItem('accessToken');
    try {
      let user = await axios.get('http://192.168.100.2:3000/api/user', {
        headers: {
          authorization: token,
        },
      });

      if (user.data.user) {
        delete user.data.user.__v;
        delete user.data.user.password;
      }
      user.data.user.birthday = user.data.user.birthday.substring(0, 10);
      user.data.user.date = user.data.user.date.substring(0, 10);
      dispatch(addUser(user.data.user));
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};
