import React, {useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';

import AuthInputField from '../components/authInputField';

const axios = require('axios').default;

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
    if (!userPhone) {
      alert('Please fill Phone');
      return;
    }
    if (!userAddress) {
      alert('Please fill Address');
      return;
    }
    if (!userBirthday) {
      alert('Please fill Birthday');
      return;
    }
    if (!userGender) {
      alert('Please fill Gender');
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

    try {
      await axios.post(`http://192.168.100.2:3000/api/user/register`, {
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
      });

      alert('Registration successful.');
    } catch (error) {
      error.response.data.errors.forEach((element) => {
        alert(element.msg);
      });
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../images/authBackground.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome to the Gym Application</Text>
        </View>
        <View style={styles.body}>
          <ScrollView>
            <AuthInputField title="Email" setData={setUserEmail} />
            <AuthInputField title="Username" setData={setUserName} />
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
            <AuthInputField title="Phone" setData={setUserPhone} />
            <AuthInputField title="Address" setData={setUserAddress} />
            <AuthInputField title="Birthday" setData={setUserBirthday} />
            <AuthInputField title="Gender" setData={setUserGender} />
            <AuthInputField title="First Name" setData={setUserFirstName} />
            <AuthInputField title="Last Name" setData={setUserLastName} />
          </ScrollView>
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={handleSubmitButton}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
          <View style={styles.signIn}>
            <Text style={{fontSize: 15}}> Already have an account ? </Text>
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
  signUpButton: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#6da7f2',
    borderRadius: 10,
    marginTop: '5%',
    marginBottom: '5%',
  },
  signUpText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  signIn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInText: {
    color: '#6da7f2',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
