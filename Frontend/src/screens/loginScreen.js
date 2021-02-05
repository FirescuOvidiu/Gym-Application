import React, {useState} from 'react';
import {TextInput, View, Text, TouchableOpacity} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

const axios = require('axios').default;

const LoginScreen = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleSubmitPress = async () => {
    if (!userEmail) {
      alert('Please fill Email.');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password.');
      return;
    }

    try {
      const response = await axios.post(
        `http://192.168.100.2:3000/api/user/login`,
        {
          email: userEmail,
          password: userPassword,
        },
      );

      await AsyncStorage.setItem('accessToken', response.data.accessToken);
      navigation.replace('TabNavigatorRoutes');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <View>
      <Text>Welcome back</Text>
      <View>
        <Text>Email</Text>
        <TextInput
          onChangeText={(UserEmail) => setUserEmail(UserEmail)}
          placeholder="Enter Email"
          returnKeyType="next"
          blurOnSubmit={false}
        />
      </View>
      <View>
        <Text>Password</Text>
        <TextInput
          onChangeText={(UserPassword) => setUserPassword(UserPassword)}
          placeholder="Enter Password"
          blurOnSubmit={false}
          returnKeyType="next"
          secureTextEntry={true}
        />
      </View>
      <Text onPress={() => navigation.navigate('')}>Forgot password?</Text>
      <TouchableOpacity onPress={() => handleSubmitPress()}>
        <Text>Sign in</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        <Text> Don't have an account? </Text>
        <Text onPress={() => navigation.navigate('RegisterScreen')}>
          Sign Up
        </Text>
      </View>
    </View>
  );
};
export default LoginScreen;
