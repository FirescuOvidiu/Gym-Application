import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const WorkoutButton = ({workout, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('WorkoutDetails', {workout})}>
      <Text>{workout.name + ' ' + workout.date + ' ' + workout.type}</Text>
    </TouchableOpacity>
  );
};

export default WorkoutButton;
