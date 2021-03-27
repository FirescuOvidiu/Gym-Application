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
    <ScrollView showsHorizontalScrollIndicator={false}>
      <UpdateProfileField
        text="Email"
        defaultValue={userData.email}
        setData={setUserEmail}
      />
      <UpdateProfileField
        text="Username"
        defaultValue={userData.username}
        setData={setUserUsername}
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
      />
      <UpdateProfileField
        text="Address"
        defaultValue={userData.address}
        setData={setUserAddress}
      />
      <UpdateProfileField
        text="Birthday"
        defaultValue={userData.birthday}
        setData={setUserBirthday}
      />
      <UpdateProfileField
        text="Gender"
        defaultValue={userData.gender}
        setData={setUserGender}
      />
      <UpdateProfileField
        text="First Name"
        defaultValue={userData.name.first}
        setData={setUserFirstName}
      />
      <UpdateProfileField
        text="Last Name"
        defaultValue={userData.name.last}
        setData={setUserLastName}
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
