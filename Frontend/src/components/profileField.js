import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ProfileField = ({text, data}) => {
  return (
    <View style={styles.field}>
      <Text style={styles.fieldName}>{text}</Text>
      <Text style={styles.fieldText}>{data}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  field: {
    flexDirection: 'row',
  },
  fieldName: {
    flex: 1,
    paddingBottom: 10,
    paddingTop: 10,
    marginBottom: 5,
    fontSize: 15,
  },
  fieldText: {
    flex: 1,
    alignItems: 'flex-end',
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 5,
    marginBottom: 5,
    fontSize: 15,
    borderWidth: 1,
    borderColor: 'gray',
  },
});

export default ProfileField;
