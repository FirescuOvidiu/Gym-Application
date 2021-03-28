import AsyncStorage from '@react-native-community/async-storage';

const axios = require('axios').default;

import {addUser} from '../actions/userActions';

export const loginUser = ({user, navigation}) => {
  return async () => {
    try {
      const response = await axios.post(
        `http://192.168.100.2:3000/api/user/login`,
        user,
      );

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
      await axios.post(`http://192.168.100.2:3000/api/user/register`, user);

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

      user = user.data.user;
      user.birthday = user.birthday.substring(0, 10);
      user.date = user.date.substring(0, 10);
      dispatch(addUser(user));
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};

export const _updateUser = ({
  userReducer,
  user,
  setUserModified,
  userModified,
}) => {
  return async () => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      const response = await axios.put(
        `http://192.168.100.2:3000/api/user/${userReducer._id}`,
        user,
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

export const getWorkouts = ({userReducer, setWorkouts}) => {
  return async () => {
    const token = await AsyncStorage.getItem('accessToken');

    try {
      //let workouts = await axios.get(
      //  `http://192.168.100.2:3000/api/${userReducer._id}/workouts`,
      //   {
      //     headers: {
      //        authorization: token,
      //      },
      //    },
      //);
      let workouts = [
        {
          _id: 1,
          name: 'NameTest',
          date: '2002-10-12',
          type: 'cardio',
          exercises: [
            {
              name: 'FirstEx',
              sets: 3,
              reps: 4,
              rest: 5,
              weight: 6,
            },
            {
              name: 'SecondEx',
              sets: 0,
              reps: 1,
              rest: 2,
              weight: 3,
            },
          ],
          notes: 'TestNotes',
        },
      ];

      //alert(`${response.data.status}`);
      setWorkouts(workouts);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};
