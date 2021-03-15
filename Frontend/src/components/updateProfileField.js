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
      <Text style={styles.fieldName}>{text}</Text>
      <TextInput
        style={styles.fieldText}
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
    paddingBottom: 5,
    paddingTop: 10,
    fontSize: 15,
  },
  fieldText: {
    borderWidth: 1,
    borderColor: 'blue',
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default UpdateProfileField;
