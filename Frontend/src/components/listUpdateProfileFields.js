import * as React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import UpdateProfileField from '../components/updateProfileField';

const ListUpdateProfileField = ({
  userData,
  setUserEmail,
  setUserUsername,
  setUserPassword,
  setUserPhone,
  setUserAddress,
  setUserBirthday,
  setUserGender,
  setUserFirstName,
  setUserLastName,
}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <UpdateProfileField
        text="Email"
        defaultValue={userData.email}
        setData={setUserEmail}
        placeholder="Enter Email"
      />
      <UpdateProfileField
        text="Username"
        defaultValue={userData.username}
        setData={setUserUsername}
        placeholder="Enter Username"
      />
      <UpdateProfileField
        text="Password"
        defaultValue={userData.password}
        setData={setUserPassword}
        secureTextEntry={true}
        placeholder="Enter Password"
      />
      <UpdateProfileField
        text="Phone"
        defaultValue={userData.phone}
        setData={setUserPhone}
        placeholder="Enter Phone"
      />
      <UpdateProfileField
        text="Address"
        defaultValue={userData.address}
        setData={setUserAddress}
        placeholder="Enter Address"
      />
      <UpdateProfileField
        text="Birthday"
        defaultValue={userData.birthday}
        setData={setUserBirthday}
        placeholder="Enter birthday"
      />
      <UpdateProfileField
        text="Gender"
        defaultValue={userData.gender}
        setData={setUserGender}
        placeholder="Enter Gender"
      />
      <UpdateProfileField
        text="First Name"
        defaultValue={userData.name.first}
        setData={setUserFirstName}
        placeholder="Enter First Name"
      />
      <UpdateProfileField
        text="Last Name"
        defaultValue={userData.name.last}
        setData={setUserLastName}
        placeholder="Enter Last Name"
      />
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
