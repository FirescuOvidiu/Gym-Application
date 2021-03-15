import React from 'react';
import {useSelector} from 'react-redux';
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import ProfileField from '../components/profileField';

const ProfileScreen = ({navigation}) => {
  const userReducer = useSelector((state) => state.userReducer);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          source={require('../images/profileBackground.jpg')}
          style={styles.backgroundImage}>
          <Text style={styles.headerTextName}>
            Welcome {userReducer.name.first} {userReducer.name.last}
          </Text>
          <Text style={styles.headerTextEmail}>{userReducer.email}</Text>
        </ImageBackground>
      </View>
      <View style={styles.body}>
        <Text style={styles.title}> Account Informations</Text>
        <ProfileField text={'Username'} data={userReducer.username} />
        <ProfileField text={'Role'} data={userReducer.role} />
        <ProfileField text={'Phone'} data={userReducer.phone} />
        <ProfileField text={'Address'} data={userReducer.address} />
        <ProfileField text={'Birthday'} data={userReducer.birthday} />
        <ProfileField text={'Gender'} data={userReducer.gender} />
        <TouchableOpacity
          style={styles.updateButton}
          onPress={() => navigation.navigate('UpdateProfile')}>
          <Text style={styles.updateButtonText}>Update Profile</Text>
        </TouchableOpacity>
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
    flex: 2,
    margin: '10%',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  updateButton: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#6da7f2',
    borderRadius: 10,
    marginTop: '5%',
    marginBottom: '5%',
  },
  updateButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
export default ProfileScreen;
