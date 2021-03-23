import AsyncStorage from '@react-native-community/async-storage';
const axios = require('axios').default;

export const UserLogin = ({userEmail, userPassword, navigation}) => {
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
