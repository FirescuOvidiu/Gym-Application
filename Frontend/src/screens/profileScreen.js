import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text} from 'react-native';

const ProfileScreen = () => {
  const userReducer = useSelector((state) => state.userReducer);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>email: {userReducer.email} </Text>
      <Text>username: {userReducer.username} </Text>
      <Text>role: {userReducer.role} </Text>
      <Text>phone: {userReducer.phone} </Text>
      <Text>address: {userReducer.address} </Text>
      <Text>birthday: {userReducer.birthday} </Text>
      <Text>gender: {userReducer.gender} </Text>
      <Text>first name: {userReducer.name.first} </Text>
      <Text>last name: {userReducer.name.last} </Text>
    </View>
  );
};

export default ProfileScreen;
