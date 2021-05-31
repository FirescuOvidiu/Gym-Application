import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import ProfileScreen from '../screens/profileScreen';
import GymDetailsScreen from '../screens/gymDetailsScreen';
import UpdateProfileScreen from '../screens/updateProfileScreen';
import WorkoutsScreen from '../screens/workoutsScreen';
import CreateWorkoutScreen from '../screens/createWorkoutScreen';
import WorkoutDetailsScreen from '../screens/workoutDetailsScreen';
import QRCodeScreen from '../screens/qrCodeScreen';
import UserInformationsScreen from '../screens/userInformationsScreen';
import MeasurementsScreen from '../screens/measurementsScreen';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
        name="UserInformations"
        component={UserInformationsScreen}
        options={{title: 'User Informations'}}
      />
      <Stack.Screen
        name="UpdateProfile"
        component={UpdateProfileScreen}
        options={{title: 'Update Profile'}}
      />
      <Stack.Screen
        name="Measurements"
        component={MeasurementsScreen}
        options={{title: 'Measurements'}}
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
        name="WorkoutDetails"
        component={WorkoutDetailsScreen}
        options={{title: 'Workout Details'}}
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
        options={{
          tabBarLabel: 'Gym Details',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={25} />,
        }}
      />
      <Tab.Screen
        name="Workouts"
        component={WorkoutsStack}
        options={{
          unmountOnBlur: true,
          tabBarLabel: 'Workouts',
          tabBarIcon: ({color}) => (
            <Icon name="weight-lifter" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="QRCode"
        component={QRCodeScreen}
        options={{
          tabBarLabel: 'QR Code',
          tabBarIcon: ({color}) => (
            <Icon name="qrcode" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          unmountOnBlur: true,
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Icon name="account" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigatorRoutes;
