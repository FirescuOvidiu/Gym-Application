import * as React from 'react';
import {FlatList} from 'react-native';

import WorkoutButton from './workoutButton';

const ListWorkouts = ({workouts, navigation}) => {
  return (
    <FlatList
      data={workouts}
      keyExtractor={(item) => item._id}
      renderItem={({item}) => {
        return <WorkoutButton workout={item} navigation={navigation} />;
      }}
    />
  );
};

export default ListWorkouts;
