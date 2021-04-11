import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import ListUpdateProfileField from '../components/listUpdateProfileFields';

import {_updateUser} from '../redux/thunks/userThunks';

import {updateUser} from '../redux/actions/userActions';

const UpdateProfileScreen = () => {
  const userReducer = useSelector((state) => state.userReducer);
  const [email, setUserEmail] = useState(userReducer.email);
  const [username, setUserUsername] = useState(userReducer.username);
  const [phone, setUserPhone] = useState(userReducer.phone);
  const [address, setUserAddress] = useState(userReducer.address);
  const [birthday, setUserBirthday] = useState(userReducer.birthday);
  const [gender, setUserGender] = useState(userReducer.gender);
  const [firstName, setUserFirstName] = useState(userReducer.name.first);
  const [lastName, setUserLastName] = useState(userReducer.name.last);
  const [password, setUserPassword] = useState('');
  const [userModified, setUserModified] = useState(false);
  const dispatch = useDispatch();

  const UpdateUser = () => {
    dispatch(
      _updateUser({
        user: {
          email,
          username,
          password,
          phone,
          address,
          birthday,
          gender,
          name: {
            first: firstName,
            last: lastName,
          },
        },
        onFinish: (error, result) => {
          if (error) {
            alert(error);
          } else {
            alert(result);
            setUserModified(!userModified);
          }
        },
      }),
    );
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
        name: {
          first: firstName,
          last: lastName,
        },
      }),
    );
  }, [userModified]);

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <ListUpdateProfileField
          userData={userReducer}
          setUserEmail={setUserEmail}
          setUserUsername={setUserUsername}
          setUserPassword={setUserPassword}
          setUserPhone={setUserPhone}
          setUserAddress={setUserAddress}
          setUserBirthday={setUserBirthday}
          setUserGender={setUserGender}
          setUserFirstName={setUserFirstName}
          setUserLastName={setUserLastName}
        />
      </View>
      <View style={styles.updateButton}>
        <TouchableOpacity activeOpacity={0.5} onPress={UpdateUser}>
          <Text style={styles.updateButtonText}>Update Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  body: {
    flex: 1,
    margin: '2%',
  },
  updateButton: {
    flex: 0.075,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6da7f2',
    borderRadius: 10,
  },
  updateButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default UpdateProfileScreen;
