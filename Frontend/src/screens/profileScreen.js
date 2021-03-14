import React from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const ProfileScreen = ({navigation}) => {
  const userReducer = useSelector((state) => state.userReducer);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        {userReducer.name.first} {userReducer.name.last}
        {'\n'}
        {userReducer.email}
      </Text>
      <Text>username: {userReducer.username} </Text>
      <Text>role: {userReducer.role} </Text>
      <Text>phone: {userReducer.phone} </Text>
      <Text>address: {userReducer.address} </Text>
      <Text>birthday: {userReducer.birthday} </Text>
      <Text>gender: {userReducer.gender} </Text>
      <Text>first name: {userReducer.name.first} </Text>
      <Text>last name: {userReducer.name.last} </Text>
      <TouchableOpacity onPress={() => navigation.navigate('UpdateProfile')}>
        <Text>Update Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default ProfileScreen;
