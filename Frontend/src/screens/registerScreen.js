import React, {useState} from 'react';
import {ImageBackground, StyleSheet, View, Text} from 'react-native';
import {useDispatch} from 'react-redux';

import {registerUser} from '../redux/thunks/userThunks';

import ListAuthInputFields from '../components/listAuthInputFields';
import SignButton from '../components/signButton';
import AuthHeader from '../components/authHeader';

const RegisterScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userRetypePassword, setUserRetypePassword] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [userBirthday, setUserBirthday] = useState('');
  const [userGender, setUserGender] = useState('');
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const dispatch = useDispatch();

  const handleSubmitButton = async () => {
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userName) {
      alert('Please fill Username');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    if (!userRetypePassword) {
      alert('Please fill Re-type Password');
      return;
    }
    if (!userFirstName) {
      alert('Please fill First Name');
      return;
    }
    if (!userLastName) {
      alert('Please fill Last Name');
      return;
    }
    if (userRetypePassword !== userPassword) {
      alert('Password should be identical with Re-type password');
      return;
    }

    dispatch(
      registerUser({
        user: {
          username: userName,
          email: userEmail,
          password: userPassword,
          phone: userPhone,
          address: userAddress,
          birthday: userBirthday,
          gender: userGender,
          name: {
            first: userFirstName,
            last: userLastName,
          },
        },
      }),
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../images/authBackground.jpg')}
        style={styles.backgroundImage}>
        <AuthHeader title="Welcome to the Gym Application" />
        <View style={styles.body}>
          <ListAuthInputFields
            setUserEmail={setUserEmail}
            setUserName={setUserName}
            setUserPassword={setUserPassword}
            setUserRetypePassword={setUserRetypePassword}
            setUserPhone={setUserPhone}
            setUserAddress={setUserAddress}
            setUserBirthday={setUserBirthday}
            setUserGender={setUserGender}
            setUserFirstName={setUserFirstName}
            setUserLastName={setUserLastName}
          />
          <SignButton submit={handleSubmitButton} text="Sign Up" />
          <View style={styles.signIn}>
            <Text style={styles.accountText}> Already have an account ? </Text>
            <Text
              style={styles.signInText}
              onPress={() => navigation.navigate('LoginScreen')}>
              Sign In
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
    marginTop: '10%',
  },
  signIn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '5%',
  },
  signInText: {
    color: '#6da7f2',
    fontSize: 15,
    fontWeight: 'bold',
  },
  accountText: {
    fontSize: 15,
  },
});

export default RegisterScreen;
