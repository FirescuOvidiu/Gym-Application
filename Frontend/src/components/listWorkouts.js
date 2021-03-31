import * as React from 'react';
import {FlatList} from 'react-native';

import WorkoutButton from './workoutButton';

const ListWorkouts = ({workouts, navigation}) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={workouts.allWorkouts}
      keyExtractor={(item) => item}
      renderItem={({item}) => {
        return (
          <WorkoutButton
            workout={workouts.workoutsById[item]}
            navigation={navigation}
          />
        );
      }}
    />
  );
};

export default ListWorkouts;
