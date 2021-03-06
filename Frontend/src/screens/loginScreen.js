import React, {useState} from 'react';
import {ImageBackground, StyleSheet, View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

import {loginUser, googleLoginUser} from '../redux/thunks/userThunks';

import AuthInputField from '../components/authInputField';
import SignButton from '../components/signButton';
import AuthHeader from '../components/authHeader';

const LoginScreen = ({navigation}) => {
  const webCliendId =
    '263868959944-anvccrlas62a8qkl6gir168h2m8bvvk3.apps.googleusercontent.com';
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const dispatch = useDispatch();

  GoogleSignin.configure({
    webClientId: webCliendId,
  });

  const handleGoogleButton = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {idToken} = await GoogleSignin.signIn();

      dispatch(
        googleLoginUser({
          credential: {
            token: idToken,
            clientId: webCliendId,
          },
          navigation,
        }),
      );
    } catch (error) {
      alert(error);
    }
  };

  const handleSubmitButton = async () => {
    if (!userEmail) {
      alert('Please fill Email.');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password.');
      return;
    }

    dispatch(
      loginUser({
        user: {
          email: userEmail,
          password: userPassword,
        },
        navigation,
      }),
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../images/authBackground.jpg')}
        style={styles.backgroundImage}>
        <AuthHeader title="Welcome back" />
        <View style={styles.body}>
          <AuthInputField title="Email" setData={setUserEmail} />
          <AuthInputField
            title="Password"
            setData={setUserPassword}
            secureTextEntry={true}
          />
          <Text
            style={styles.forgotPassword}
            onPress={() => navigation.navigate('ForgotPasswordScreen')}>
            Forgot password?
          </Text>
          <SignButton submit={handleSubmitButton} text="Sign In" />
          <GoogleSigninButton
            style={styles.googleSignInButton}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={handleGoogleButton}
          />
          <View style={styles.signUp}>
            <Text style={styles.accountText}> Don't have an account ? </Text>
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
  body: {
    flex: 1.5,
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '20%',
  },
  forgotPassword: {
    color: '#6da7f2',
    textAlign: 'right',
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
  accountText: {
    fontSize: 15,
  },
  googleSignInButton: {
    marginBottom: '5%',
  },
});

export default LoginScreen;
