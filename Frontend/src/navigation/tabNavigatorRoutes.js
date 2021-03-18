import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import ProfileScreen from '../screens/profileScreen';
import GymDetailsScreen from '../screens/gymDetailsScreen';
import UpdateProfileScreen from '../screens/updateProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'Profile', headerShown: false}}
      />
      <Stack.Screen
        name="UpdateProfile"
        component={UpdateProfileScreen}
        options={{title: 'Update Profile'}}
      />
    </Stack.Navigator>
  );
}

const TabNavigatorRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="GymDetails"
        component={GymDetailsScreen}
        options={{title: 'Gym Details'}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          unmountOnBlur: true,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigatorRoutes;
