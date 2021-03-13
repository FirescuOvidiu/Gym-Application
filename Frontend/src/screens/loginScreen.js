import React, {useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

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
    <View style={styles.container}>
      <ImageBackground
        source={require('../images/authBackground.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome back</Text>
        </View>
        <View style={styles.body}>
          <View>
            <Text>Email</Text>
            <TextInput
              onChangeText={(UserEmail) => setUserEmail(UserEmail)}
              placeholder="Enter Email"
              placeholderTextColor="deepskyblue"
              returnKeyType="next"
              blurOnSubmit={false}
            />
            <Text>Password</Text>
            <TextInput
              onChangeText={(UserPassword) => setUserPassword(UserPassword)}
              placeholder="Enter Password"
              placeholderTextColor="deepskyblue"
              blurOnSubmit={false}
              returnKeyType="next"
              secureTextEntry={true}
            />
            <Text
              style={styles.forgotPassword}
              onPress={() => navigation.navigate('')}>
              Forgot password?
            </Text>
            <TouchableOpacity
              style={styles.signin}
              onPress={() => handleSubmitPress()}>
              <Text style={{color: 'white'}}>Sign in</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.signup}>
            <Text> Don't have an account ? </Text>
            <Text
              style={{color: 'deepskyblue'}}
              onPress={() => navigation.navigate('RegisterScreen')}>
              Sign Up
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  body: {
    flex: 1.5,
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '10%',
  },
  headerText: {
    color: 'deepskyblue',
    textAlign: 'center',
    fontSize: 30,
  },
  forgotPassword: {
    color: 'deepskyblue',
    textAlign: 'right',
  },
  signin: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'deepskyblue',
    borderRadius: 10,
    marginTop: '5%',
    marginBottom: '5%',
  },
  signup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default LoginScreen;
