import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

const axios = require('axios').default;

import {updateUser} from '../redux/actions/userActions';

const ProfileScreen = () => {
  const userReducer = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [email, setEmail] = useState(userReducer.data.user.email);
  const [username, setUsername] = useState(userReducer.data.user.username);
  const [phone, setPhone] = useState(userReducer.data.user.phone);
  const [address, setAddress] = useState(userReducer.data.user.address);
  const [birthday, setBirthday] = useState(userReducer.data.user.birthday);
  const [gender, setGender] = useState(userReducer.data.user.gender);
  const [name, setName] = useState(userReducer.data.user.name);
  const [password, setPassword] = useState('');
  const [userModified, setUserModified] = useState(false);

  const _updateUser = async () => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      const response = await axios.put(
        `http://192.168.100.2:3000/api/user/${userReducer.data.user._id}`,
        {
          email: email,
          username: username,
          password: password,
          phone: phone,
          address: address,
          birthday: birthday,
          gender: gender,
          name: name,
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

  useEffect(() => {
    dispatch(
      updateUser({
        email: email,
        username: username,
        phone: phone,
        address: address,
        birthday: birthday,
        gender: gender,
        name: name,
      }),
    );
  }, [userModified]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>email: {userReducer.data.user.email} </Text>
      <Text>username: {userReducer.data.user.username} </Text>
      <Text>role: {userReducer.data.user.role} </Text>
      <Text>phone: {userReducer.data.user.phone} </Text>
      <Text>address: {userReducer.data.user.address} </Text>
      <Text>birthday: {userReducer.data.user.birthday} </Text>
      <Text>gender: {userReducer.data.user.gender} </Text>
      <Text>name: {userReducer.data.user.name} </Text>
    </View>
  );
};

export default ProfileScreen;
