import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const WorkoutButton = ({workout}) => {
  return (
    <TouchableOpacity>
      <Text>{workout.name + ' ' + workout.date + ' ' + workout.type}</Text>
    </TouchableOpacity>
  );
};

export default WorkoutButton;
