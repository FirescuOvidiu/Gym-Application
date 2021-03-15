import * as React from 'react';
import {ScrollView, View, Text, TextInput, StyleSheet} from 'react-native';

import UpdateProfileField from '../components/updateProfileField';

const ListUpdateProfileField = ({
  userReducer,
  setUserEmail,
  setUserUsername,
  setUserPassword,
  setUserPhone,
  setUserAddress,
  setUserBirthday,
  setUserGender,
  setUserName,
}) => {
  return (
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
        <Text style={styles.fieldName}>First Name</Text>
        <TextInput
          style={styles.fieldText}
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
        <Text style={styles.fieldName}>Last Name</Text>
        <TextInput
          style={styles.fieldText}
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
  );
};

const styles = StyleSheet.create({
  fieldName: {
    color: 'gray',
    paddingBottom: 5,
    paddingTop: 10,
    fontSize: 15,
  },
  fieldText: {
    borderWidth: 2,
    borderColor: '#6da7f2',
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default ListUpdateProfileField;
