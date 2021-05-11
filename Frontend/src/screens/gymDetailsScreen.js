import React, {useEffect} from 'react';
import {
  Text,
  View,
  Alert,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import AsyncStorage from '@react-native-community/async-storage';

import ProfileField from '../components/profileField';

import {saveUser} from '../redux/thunks/userThunks';
import {saveGym} from '../redux/thunks/gymThunks';
import {saveWorkouts} from '../redux/thunks/workoutThunks';

const GymDetailsScreen = ({navigation}) => {
  const gymReducer = useSelector((state) => state.gymReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveUser());
    dispatch(saveGym());
    dispatch(saveWorkouts());
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../images/gymDetailsImage.jpg')}
        style={styles.gymImage}
        resizeMode="cover"
      />
      <View style={styles.body}>
        <View style={styles.gymInformations}>
          <Text style={styles.title}>{gymReducer.name} Details</Text>
          <ProfileField text={'Address'} data={gymReducer.address} />
          <ProfileField text={'Phone'} data={gymReducer.phone} />
          <ProfileField text={'Email'} data={gymReducer.email} />
          <ProfileField
            text={'Creation date'}
            data={gymReducer.date.substring(0, 10)}
          />
        </View>
        <View style={styles.gymOpeningHours}>
          <Text style={styles.title}>Opening Hours</Text>
          <ProfileField
            text={'Opening'}
            data={'Monday - Friday ' + gymReducer.openingTime}
          />
          <ProfileField
            text={'Closing'}
            data={'Monday - Friday ' + gymReducer.closingTime}
          />
        </View>
        <View style={styles.logout}>
          <TouchableOpacity
            style={styles.logoutButton}
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
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gymImage: {
    flex: 1,
    alignSelf: 'center',
    height: '100%',
    width: '100%',
  },
  body: {
    flex: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingBottom: '5%',
  },
  gymInformations: {
    flex: 2,
    backgroundColor: 'white',
    paddingHorizontal: '5%',
    paddingBottom: '10%',
    paddingTop: '5%',
    marginBottom: '5%',
  },
  gymOpeningHours: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: '5%',
    paddingBottom: '12%',
  },
  logout: {
    margin: '5%',
    flex: 0.4,
  },
  logoutButton: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#6da7f2',
    borderRadius: 10,
  },
  logoutText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default GymDetailsScreen;
