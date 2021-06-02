import React, {useState} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';

import {sendEmailUser, forgotPasswordUser} from '../redux/thunks/userThunks';

import AuthInputField from '../components/authInputField';
import SignButton from '../components/signButton';

const ForgotPasswordScreen = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [code, setCode] = useState('');
  const [userCode, setUserCode] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userRetypePassword, setUserRetypePassword] = useState('');
  const dispatch = useDispatch();

  const handleSendEmailButton = async () => {
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }

    let auxCode = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, '')
      .substr(0, 5);

    setCode(auxCode);
    dispatch(
      sendEmailUser({
        email: userEmail,
        code: auxCode,
      }),
    );
  };

  const handleSubmitButton = async () => {
    if (!userCode) {
      alert('Please fill Code');
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
    if (userRetypePassword !== userPassword) {
      alert('Password should be identical with Re-type password');
      return;
    }
    if (code !== userCode) {
      alert('The code is different from the code send on the email');
      return;
    }

    dispatch(
      forgotPasswordUser({
        email: userEmail,
        password: userPassword,
      }),
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../images/authBackground.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.body}>
          <AuthInputField title="Email" setData={setUserEmail} />
          <SignButton submit={handleSendEmailButton} text="Send Email" />
          <AuthInputField title="Code" setData={setUserCode} />
          <AuthInputField
            title="Password"
            setData={setUserPassword}
            secureTextEntry={true}
          />
          <AuthInputField
            title="Re-type Password"
            setData={setUserRetypePassword}
            secureTextEntry={true}
          />
          <SignButton submit={handleSubmitButton} text="Reset Password" />
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
    marginTop: '35%',
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

export default ForgotPasswordScreen;
