import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

import {deleteWorkout} from '../redux/thunks/userThunks';

const WorkoutDetailsScreen = ({route, navigation}) => {
  const userReducer = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const workout = route.params.workout;

  return (
    <View style={styles.container}>
      <Text>name: {workout.name}</Text>
      <Text>date: {workout.date}</Text>
      <Text>type: {workout.type}</Text>
      <FlatList
        data={workout.exercises}
        keyExtractor={(item) => item.name}
        renderItem={({item}) => {
          return (
            <View>
              <Text>Exercise name: {item.name}</Text>
              <Text>Exercise reps: {item.reps}</Text>
              <Text>Exercise sets: {item.sets}</Text>
              <Text>Exercise weight: {item.weight}</Text>
            </View>
          );
        }}
      />
      <Text>notes: {workout.notes}</Text>
      <TouchableOpacity
        style={styles.deleteWorkoutButton}
        onPress={() => {
          dispatch(deleteWorkout({userReducer, workout}));
          navigation.goBack();
        }}>
        <Text style={styles.deleteWorkoutButtonText}>Delete Workout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
  },
  deleteWorkoutButton: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6da7f2',
    borderRadius: 10,
    marginTop: '7%',
    marginBottom: '5%',
  },
  deleteWorkoutButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default WorkoutDetailsScreen;
