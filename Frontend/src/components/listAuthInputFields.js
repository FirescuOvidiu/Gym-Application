import * as React from 'react';
import {ScrollView} from 'react-native';

import AuthInputField from './authInputField';

const ListAuthInputFields = ({
  setUserEmail,
  setUserName,
  setUserPassword,
  setUserRetypePassword,
  setUserPhone,
  setUserAddress,
  setUserBirthday,
  setUserGender,
  setUserFirstName,
  setUserLastName,
}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
  );
};

export default ListAuthInputFields;
