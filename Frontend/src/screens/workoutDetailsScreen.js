import React from 'react';
import {View, Text, FlatList} from 'react-native';

const WorkoutDetailsScreen = ({route, navigation}) => {
  let workout = route.params.workout;

  return (
    <View>
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
    </View>
  );
};

export default WorkoutDetailsScreen;
