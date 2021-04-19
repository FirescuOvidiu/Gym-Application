import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';

const UpdateProfileField = ({
  text,
  defaultValue,
  setData,
  secureTextEntry = false,
  blurOnSubmit = false,
  placeholder = '',
}) => {
  return (
    <View>
      <Input
        label={text}
        labelStyle={styles.labelStyle}
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={styles.inputStyle}
        containerStyle={styles.containerStyle}
        onChangeText={setData}
        placeholder={placeholder}
        blurOnSubmit={blurOnSubmit}
        secureTextEntry={secureTextEntry}
        defaultValue={defaultValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainerStyle: {
    borderWidth: 2,
    borderColor: '#6da7f2',
    borderRadius: 10,
    marginTop: 5,
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

export default UpdateProfileField;
