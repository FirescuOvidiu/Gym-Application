import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = ({navigation}) => {
  setTimeout(async () => {
    const token = await AsyncStorage.getItem('accessToken');
    navigation.replace(token === null ? 'Auth' : 'TabNavigatorRoutes');
  }, 1000);

  return (
    <View>
      <ActivityIndicator />
    </View>
  );
};

export default SplashScreen;
