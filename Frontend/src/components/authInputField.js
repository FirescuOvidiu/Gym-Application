import * as React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const AuthInputField = ({
  title,
  setData,
  placeholderTextColor = '#6da7f2',
  returnKeyType = 'next',
  blurOnSubmit = false,
  secureTextEntry = false,
}) => {
  return (
    <View>
      <Text style={styles.textBeforeTextInput}>{title}</Text>
      <TextInput
        style={styles.textInput}
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

const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: '#6da7f2',
    borderBottomWidth: 1,
    marginBottom: '5%',
  },
  textBeforeTextInput: {
    color: 'gray',
  },
});

export default AuthInputField;
