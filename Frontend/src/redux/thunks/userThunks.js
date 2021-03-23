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

export const _updateUser = ({
  userReducer,
  email,
  username,
  password,
  phone,
  address,
  birthday,
  gender,
  firstName,
  lastName,
  setUserModified,
  userModified,
}) => {
  return async () => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      const response = await axios.put(
        `http://192.168.100.2:3000/api/user/${userReducer._id}`,
        {
          email,
          username,
          password,
          phone,
          address,
          birthday,
          gender,
          name: {
            first: firstName,
            last: lastName,
          },
        },
        {
          headers: {
            Authorization: token,
          },
        },
      );
      alert(`${response.data.status}`);
      setUserModified(!userModified);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};
