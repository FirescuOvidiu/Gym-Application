import * as React from 'react';
import {Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import {addUser} from '../redux/actions/userActions';

import axios from 'axios';

const GymDetailsScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const saveUser = async () => {
      const token = await AsyncStorage.getItem('accessToken');
      try {
        var user = await axios.get('http://192.168.100.2:3000/api/user', {
          headers: {
            authorization: token,
          },
        });

        console.log(user.data);
        if (user.data.user) {
          delete user.data.user.__v;
          delete user.data.user.password;
        }

        dispatch(addUser(user));
      } catch (error) {
        alert(error.response.data.message);
      }
    };
    saveUser();
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Gym Details Screen</Text>
    </View>
  );
};

export default GymDetailsScreen;
