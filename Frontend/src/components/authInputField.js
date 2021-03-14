import * as React from 'react';
import {Text, View, TextInput} from 'react-native';

const AuthInputField = ({
  title,
  setData,
  placeholderTextColor = '#8b9cb5',
  returnKeyType = 'next',
  blurOnSubmit = false,
  secureTextEntry = false,
}) => {
  return (
    <View>
      <Text>{title}</Text>
      <TextInput
        onChangeText={(UserData) => setData(UserData)}
        placeholder={'Enter ' + title}
        placeholderTextColor={placeholderTextColor}
        returnKeyType={returnKeyType}
        blurOnSubmit={blurOnSubmit}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default AuthInputField;
