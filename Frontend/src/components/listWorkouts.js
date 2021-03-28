import * as React from 'react';
import {FlatList} from 'react-native';

import WorkoutButton from './workoutButton';

const ListWorkouts = ({workouts}) => {
  return (
    <FlatList
      data={workouts}
      keyExtractor={(item) => item._id}
      renderItem={({item}) => {
        return <WorkoutButton workout={item} />;
      }}
    />
  );
};

export default ListWorkouts;
