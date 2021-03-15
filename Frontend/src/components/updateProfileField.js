import * as React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const UpdateProfileField = ({
  text,
  defaultValue,
  setData,
  secureTextEntry = false,
  placeholder = '',
}) => {
  return (
    <View>
      <Text>{text}</Text>
      <TextInput
        defaultValue={defaultValue}
        onChangeText={(UserData) => setData(UserData)}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fieldName: {
    color: 'gray',
    flex: 1,
    paddingBottom: 10,
    paddingTop: 10,
    marginBottom: 5,
    fontSize: 15,
  },
  fieldText: {
    flex: 1,
    textAlign: 'right',
    paddingBottom: 10,
    paddingTop: 10,
    paddingRight: 5,
    marginBottom: 5,
    fontSize: 15,
  },
});

export default UpdateProfileField;
