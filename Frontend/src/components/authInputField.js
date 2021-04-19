import * as React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

import {Input} from 'react-native-elements';

const AuthInputField = ({
  title,
  setData,
  placeholderTextColor = '#6da7f2',
  blurOnSubmit = false,
  secureTextEntry = false,
}) => {
  return (
    <View>
      <Input
        label={title}
        labelStyle={styles.labelStyle}
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={styles.inputStyle}
        onChangeText={setData}
        placeholder={'Enter ' + title}
        placeholderTextColor={placeholderTextColor}
        blurOnSubmit={blurOnSubmit}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainerStyle: {
    borderBottomColor: '#6da7f2',
  },
  labelStyle: {
    fontSize: 15,
    fontWeight: 'normal',
    color: 'gray',
  },
  inputStyle: {
    fontSize: 15,
  },
});

export default AuthInputField;
