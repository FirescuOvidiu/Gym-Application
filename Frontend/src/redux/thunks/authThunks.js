import AsyncStorage from '@react-native-community/async-storage';

const axios = require('axios').default;

export const loginUser = ({userEmail, userPassword, navigation}) => {
  return async (dispatch) => {
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
  return async (dispatch) => {
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
