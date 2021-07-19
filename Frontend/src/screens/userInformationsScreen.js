import React from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import ProfileField from '../components/profileField';

const UserInformationsScreen = ({navigation}) => {
  const userReducer = useSelector((state) => state.userReducer);

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.insideBody}>
          <ProfileField text={'Email'} data={userReducer.email} />
          <ProfileField text={'Username'} data={userReducer.username} />
          <ProfileField text={'Phone'} data={userReducer.phone} />
          <ProfileField text={'Address'} data={userReducer.address} />
          <ProfileField text={'Birthday'} data={userReducer.birthday} />
          <ProfileField text={'Gender'} data={userReducer.gender} />
          <ProfileField text={'First Name'} data={userReducer.name.first} />
          <ProfileField text={'Last Name'} data={userReducer.name.last} />
          <ProfileField text={'Role'} data={userReducer.role} />
          <ProfileField text={'Account creation'} data={userReducer.date} />
          <TouchableOpacity
            style={styles.updateButton}
            onPress={() => navigation.navigate('UpdateProfile')}>
            <Text style={styles.updateButtonText}>Update Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingBottom: 20,
    paddingTop: 10,
  },
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  headerTextName: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  headerTextEmail: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  body: {
    backgroundColor: 'white',
    flex: 2,
  },
  insideBody: {
    flex: 2,
    margin: '5%',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  updateButton: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6da7f2',
    borderRadius: 10,
    marginTop: '7%',
    marginBottom: '5%',
  },
  updateButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default UserInformationsScreen;
