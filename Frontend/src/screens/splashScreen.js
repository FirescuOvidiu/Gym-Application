import React from 'react';
import {View, Text} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = ({navigation}) => {
  setTimeout(async () => {
    const token = await AsyncStorage.getItem('accessToken');
    navigation.replace(token === null ? 'Auth' : 'TabNavigatorRoutes');
  }, 1000);

  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;
