import React, {useState} from 'react';
import {
  TextInput,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';

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
      console.log('TEST');
      error.response.data.errors.forEach((element) => {
        alert(element.msg);
      });
    }
  };

  return (
    <ScrollView>
      <Text>Welcome to the Gym Application</Text>
      <View>
        <Text>Email</Text>
        <TextInput
          onChangeText={(UserEmail) => setUserEmail(UserEmail)}
          placeholder="Enter Email"
          placeholderTextColor="#8b9cb5"
          returnKeyType="next"
          blurOnSubmit={false}
        />
      </View>
      <View>
        <Text>Username</Text>
        <TextInput
          onChangeText={(UserName) => setUserName(UserName)}
          placeholder="Enter Name"
          placeholderTextColor="#8b9cb5"
          returnKeyType="next"
          blurOnSubmit={false}
        />
      </View>
      <View>
        <Text>Password</Text>
        <TextInput
          onChangeText={(UserPassword) => setUserPassword(UserPassword)}
          placeholder="Enter Password"
          placeholderTextColor="#8b9cb5"
          returnKeyType="next"
          blurOnSubmit={false}
          secureTextEntry={true}
        />
      </View>
      <View>
        <Text>Re-type Password</Text>
        <TextInput
          onChangeText={(UserRetypePassword) =>
            setUserRetypePassword(UserRetypePassword)
          }
          placeholder="Enter Password"
          placeholderTextColor="#8b9cb5"
          returnKeyType="next"
          blurOnSubmit={false}
          secureTextEntry={true}
        />
      </View>
      <View>
        <Text>Phone</Text>
        <TextInput
          onChangeText={(UserPhone) => setUserPhone(UserPhone)}
          placeholder="Enter Phone"
          placeholderTextColor="#8b9cb5"
          returnKeyType="next"
          blurOnSubmit={false}
        />
      </View>
      <View>
        <Text>Address</Text>
        <TextInput
          onChangeText={(UserAddress) => setUserAddress(UserAddress)}
          placeholder="Enter Address"
          placeholderTextColor="#8b9cb5"
          returnKeyType="next"
          blurOnSubmit={false}
        />
      </View>
      <View>
        <Text>Birthday</Text>
        <TextInput
          onChangeText={(UserBirthday) => setUserBirthday(UserBirthday)}
          placeholder="Enter Birthday"
          placeholderTextColor="#8b9cb5"
          returnKeyType="next"
          blurOnSubmit={false}
        />
      </View>
      <View>
        <Text>Gender</Text>
        <TextInput
          onChangeText={(UserGender) => setUserGender(UserGender)}
          placeholder="Enter Gender"
          placeholderTextColor="#8b9cb5"
          returnKeyType="next"
          blurOnSubmit={false}
        />
      </View>
      <View>
        <Text>First Name</Text>
        <TextInput
          onChangeText={(UserFirstName) => setUserFirstName(UserFirstName)}
          placeholder="Enter First Name"
          placeholderTextColor="#8b9cb5"
          returnKeyType="next"
          blurOnSubmit={false}
        />
      </View>
      <View>
        <Text>Last Name</Text>
        <TextInput
          onChangeText={(UserLastName) => setUserLastName(UserLastName)}
          placeholder="Enter Last Name"
          placeholderTextColor="#8b9cb5"
          returnKeyType="next"
          blurOnSubmit={false}
        />
      </View>
      <TouchableOpacity activeOpacity={0.5} onPress={handleSubmitButton}>
        <Text>Sign up</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        <Text> Already have an account? </Text>
        <Text onPress={() => navigation.navigate('LoginScreen')}>Sign In</Text>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
