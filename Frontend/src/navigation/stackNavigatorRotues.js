import * as React from 'react';
import 'react-native-gesture-handler';

import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '../screens/splashScreen';
import LoginScreen from '../screens/loginScreen';
import RegisterScreen from '../screens/registerScreen';
import ForgotPasswordScreen from '../screens/forgotPasswordScreen';
import TabNavigatorRoutes from './tabNavigatorRoutes';

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{title: 'Forgot Password'}}
      />
    </Stack.Navigator>
  );
};

const AppNavigtorRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TabNavigatorRoutes"
        component={TabNavigatorRoutes}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigtorRoutes;
