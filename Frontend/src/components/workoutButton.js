import * as React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const WorkoutButton = ({workout, navigation}) => {
  return (
    <TouchableOpacity
      style={styles({workout}).workoutDetailsButton}
      onPress={() => navigation.navigate('WorkoutDetails', {workout})}>
      <Text style={styles({workout}).workoutDetailsButtonText}>
        {'Workout name: ' + workout.name}
      </Text>
      <Text>{'Workout date: ' + workout.date.substring(0, 10)}</Text>
      <Text style={styles({workout}).workoutDetailsButtonText}>
        {'Workout type: ' + workout.type}
      </Text>
    </TouchableOpacity>
  );
};

const styles = ({workout}) =>
  StyleSheet.create({
    workoutDetailsButton: {
      backgroundColor: workout.type === 'cardio' ? 'green' : 'red',
      alignItems: 'center',
      borderRadius: 10,
      marginBottom: '5%',
      padding: '3%',
    },
    workoutDetailsButtonText: {
      margin: '1%',
    },
  });

export default WorkoutButton;
