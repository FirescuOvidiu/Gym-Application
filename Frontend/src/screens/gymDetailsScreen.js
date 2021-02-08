import * as React from 'react';
import {Text, View, Alert, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import {addUser} from '../redux/actions/userActions';
import {addGym} from '../redux/actions/gymActions';

import axios from 'axios';

const GymDetailsScreen = ({navigation}) => {
  const gymReducer = useSelector((state) => state.gymReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const saveUser = async () => {
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
    const saveGym = async () => {
      const token = await AsyncStorage.getItem('accessToken');
      try {
        let gym = await axios.get('http://192.168.100.2:3000/api/gym', {
          headers: {
            authorization: token,
          },
        });

        if (gym.data.gym) {
          delete gym.data.gym[0].__v;
        }
        dispatch(addGym(gym.data.gym[0]));
      } catch (error) {
        alert(error.response.data.message);
      }
    };
    saveUser();
    saveGym();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Gym Details!</Text>
      <Text>name: {gymReducer.name} </Text>
      <Text>email: {gymReducer.email} </Text>
      <Text>phone: {gymReducer.phone} </Text>
      <Text>address: {gymReducer.address} </Text>
      <Text>openingTime: {gymReducer.openingTime} </Text>
      <Text>closingTime: {gymReducer.closingTime} </Text>
      <Text>date: {gymReducer.date} </Text>
      <TouchableOpacity
        onPress={() => {
          Alert.alert(
            'Logout',
            'Are you sure? You want to logout?',
            [
              {
                text: 'Cancel',
                onPress: () => {
                  return null;
                },
              },
              {
                text: 'Confirm',
                onPress: () => {
                  AsyncStorage.clear();
                  navigation.replace('Auth');
                },
              },
            ],
            {cancelable: false},
          );
        }}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GymDetailsScreen;
