import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ProfileScreen from './profileScreen';
import GymDetailsScreen from './gymDetailsScreen';

const Tab = createBottomTabNavigator();

const TabNavigatorRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="GymDetails" component={GymDetailsScreen}></Tab.Screen>
      <Tab.Screen name="Profile" component={ProfileScreen}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigatorRoutes;
