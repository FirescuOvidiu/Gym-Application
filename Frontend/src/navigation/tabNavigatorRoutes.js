import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import ProfileScreen from '../screens/profileScreen';
import GymDetailsScreen from '../screens/gymDetailsScreen';
import UpdateProfileScreen from '../screens/updateProfileScreen';
import WorkoutsScreen from '../screens/workoutsScreen';
import CreateWorkoutScreen from '../screens/createWorkoutScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ProfileStack = () => {
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
};

const WorkoutsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Workout"
        component={WorkoutsScreen}
        options={{title: 'Workout', headerShown: false}}
      />
      <Stack.Screen
        name="CreateWorkout"
        component={CreateWorkoutScreen}
        options={{title: 'Create Workout'}}
      />
    </Stack.Navigator>
  );
};

const TabNavigatorRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="GymDetails"
        component={GymDetailsScreen}
        options={{title: 'Gym Details'}}
      />
      <Tab.Screen
        name="Workouts"
        component={WorkoutsStack}
        options={{
          unmountOnBlur: true,
        }}
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
