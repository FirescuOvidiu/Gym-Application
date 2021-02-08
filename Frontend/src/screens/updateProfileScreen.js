import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

const axios = require('axios').default;

import {updateUser} from '../redux/actions/userActions';

const UpdateProfileScreen = ({navigation}) => {
  const userReducer = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [email, setUserEmail] = useState(userReducer.email);
  const [username, setUserUsername] = useState(userReducer.username);
  const [phone, setUserPhone] = useState(userReducer.phone);
  const [address, setUserAddress] = useState(userReducer.address);
  const [birthday, setUserBirthday] = useState(userReducer.birthday);
  const [gender, setUserGender] = useState(userReducer.gender);
  const [name, setUserName] = useState(userReducer.name);
  const [password, setUserPassword] = useState('');
  const [userModified, setUserModified] = useState(false);

  const _updateUser = async () => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      const response = await axios.put(
        `http://192.168.100.2:3000/api/user/${userReducer._id}`,
        {
          email: email,
          username: username,
          password: password,
          phone: phone,
          address: address,
          birthday: birthday,
          gender: gender,
          name: name,
        },
        {
          headers: {
            Authorization: token,
          },
        },
      );
      alert(`${response.data.status}`);
      setUserModified(!userModified);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  useEffect(() => {
    dispatch(
      updateUser({
        email: email,
        username: username,
        phone: phone,
        address: address,
        birthday: birthday,
        gender: gender,
        name: name,
      }),
    );
  }, [userModified]);

  return (
    <ScrollView>
      <View>
        <Text>Email</Text>
        <TextInput
          defaultValue={userReducer.email}
          onChangeText={(UserEmail) => setUserEmail(UserEmail)}
        />
      </View>
      <View>
        <Text>Username</Text>
        <TextInput
          defaultValue={userReducer.username}
          onChangeText={(UserName) => setUserUsername(UserName)}
        />
      </View>
      <View>
        <Text>Password</Text>
        <TextInput
          onChangeText={(UserPassword) => setUserPassword(UserPassword)}
          placeholder="Enter Password"
          secureTextEntry={true}
        />
      </View>
      <View>
        <Text>Phone</Text>
        <TextInput
          defaultValue={userReducer.phone}
          onChangeText={(UserPhone) => setUserPhone(UserPhone)}
        />
      </View>
      <View>
        <Text>Address</Text>
        <TextInput
          defaultValue={userReducer.address}
          onChangeText={(UserAddress) => setUserAddress(UserAddress)}
        />
      </View>
      <View>
        <Text>Birthday</Text>
        <TextInput
          defaultValue={userReducer.birthday}
          onChangeText={(UserBirthday) => setUserBirthday(UserBirthday)}
        />
      </View>
      <View>
        <Text>Gender</Text>
        <TextInput
          defaultValue={userReducer.gender}
          onChangeText={(UserGender) => setUserGender(UserGender)}
        />
      </View>
      <View>
        <Text>First Name</Text>
        <TextInput
          defaultValue={userReducer.name.first}
          onChangeText={(UserFirstName) =>
            setUserName((prevState) => ({
              ...prevState,
              first: UserFirstName,
            }))
          }
        />
      </View>
      <View>
        <Text>Last Name</Text>
        <TextInput
          defaultValue={userReducer.name.last}
          onChangeText={(UserLastName) =>
            setUserName((prevState) => ({
              ...prevState,
              last: UserLastName,
            }))
          }
        />
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            _updateUser();
            navigation.navigate('Profile');
          }}>
          <Text>Update</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default UpdateProfileScreen;
