import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const SignButton = ({handleSubmitButton}) => {
  return (
    <TouchableOpacity style={styles.signButton} onPress={handleSubmitButton}>
      <Text style={styles.signText}>Sign Up</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  signButton: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#6da7f2',
    borderRadius: 10,
    marginTop: '5%',
    marginBottom: '5%',
  },
  signText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default SignButton;
