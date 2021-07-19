import * as React from 'react';
import {StyleSheet} from 'react-native';

import {Button} from 'react-native-elements';

const SignButton = ({submit, text}) => {
  return <Button buttonStyle={styles.button} onPress={submit} title={text} />;
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#6da7f2',
    borderRadius: 10,
    marginTop: '5%',
    marginBottom: '5%',
  },
});

export default SignButton;
