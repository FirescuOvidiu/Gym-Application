import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text} from 'react-native';

const ProfileScreen = () => {
  const userReducer = useSelector((state) => state.userReducer);

  console.log('RTET');
  console.log(userReducer);
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
