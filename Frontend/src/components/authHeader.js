import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const AuthHeader = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  headerText: {
    color: '#6da7f2',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default AuthHeader;
