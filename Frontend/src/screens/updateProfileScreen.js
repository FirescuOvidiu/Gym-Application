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

import UpdateProfileField from '../components/updateProfileField';

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
    <View style={{flex: 1}}>
      <View style={{flex: 1, margin: '2%'}}>
        <ScrollView persistentScrollbar={true}>
          <UpdateProfileField
            text="Email"
            defaultValue={userReducer.email}
            setData={setUserEmail}
          />
          <UpdateProfileField
            text="Username"
            defaultValue={userReducer.username}
            setData={setUserUsername}
          />
          <UpdateProfileField
            text="Password"
            defaultValue={userReducer.password}
            setData={setUserPassword}
            secureTextEntry={true}
            placeholder="Enter Password"
          />
          <UpdateProfileField
            text="Phone"
            defaultValue={userReducer.phone}
            setData={setUserPhone}
          />
          <UpdateProfileField
            text="Address"
            defaultValue={userReducer.address}
            setData={setUserAddress}
          />
          <UpdateProfileField
            text="Birthday"
            defaultValue={userReducer.birthday}
            setData={setUserBirthday}
          />
          <UpdateProfileField
            text="Gender"
            defaultValue={userReducer.gender}
            setData={setUserGender}
          />
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
        </ScrollView>
      </View>
      <View style={{flex: 0.1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            _updateUser();
            navigation.navigate('Profile');
          }}>
          <Text>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UpdateProfileScreen;
