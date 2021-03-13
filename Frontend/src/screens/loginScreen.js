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
          <Text style={styles.textBeforeTextInput}>Email</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(UserEmail) => setUserEmail(UserEmail)}
            placeholder="Enter Email"
            placeholderTextColor="#6da7f2"
            returnKeyType="next"
            blurOnSubmit={false}
          />
          <Text style={styles.textBeforeTextInput}>Password</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(UserPassword) => setUserPassword(UserPassword)}
            placeholder="Enter Password"
            placeholderTextColor="#6da7f2"
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
            style={styles.signInButton}
            onPress={() => handleSubmitPress()}>
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>
          <View style={styles.signUp}>
            <Text style={{fontSize: 15}}> Don't have an account ? </Text>
            <Text
              style={styles.signUpText}
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
    color: '#6da7f2',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  textInput: {
    borderBottomColor: '#6da7f2',
    borderBottomWidth: 1,
    marginBottom: '5%',
  },
  textBeforeTextInput: {
    color: 'gray',
  },
  forgotPassword: {
    color: '#6da7f2',
    textAlign: 'right',
    fontWeight: 'bold',
  },
  signInButton: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#6da7f2',
    borderRadius: 10,
    marginTop: '5%',
    marginBottom: '5%',
  },
  signInText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  signUp: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    color: '#6da7f2',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
export default LoginScreen;
