import * as React from 'react';
import {Text, View, Alert, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import {addUser} from '../redux/actions/userActions';

import axios from 'axios';

const GymDetailsScreen = ({navigation}) => {
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

        dispatch(addUser(user.data.user));
      } catch (error) {
        alert(error.response.data.message);
      }
    };
    saveUser();
  }, []);

  return (
    <View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home!</Text>
      </View>
      <View>
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
    </View>
  );
};

export default GymDetailsScreen;
