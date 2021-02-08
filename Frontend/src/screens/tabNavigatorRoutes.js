import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import ProfileScreen from './profileScreen';
import GymDetailsScreen from './gymDetailsScreen';
import UpdateProfileScreen from './updateProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="UpdateProfile" component={UpdateProfileScreen} />
    </Stack.Navigator>
  );
}

const TabNavigatorRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="GymDetails" component={GymDetailsScreen}></Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          unmountOnBlur: true,
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigatorRoutes;
