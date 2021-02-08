import React from 'react';
import {View} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = ({navigation}) => {
    const token = await AsyncStorage.getItem('accessToken');
    navigation.replace(token === null ? 'Auth' : 'TabNavigatorRoutes');

  return (
    <View>
    </View>
  );
};

export default SplashScreen;
