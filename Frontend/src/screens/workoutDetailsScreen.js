import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {deleteWorkout} from '../redux/thunks/workoutThunks';

import ProfileField from '../components/profileField';

const WorkoutDetailsScreen = ({route, navigation}) => {
  const userReducer = useSelector((state) => state.userReducer);
  const workout = route.params.workout;
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.insideBody}>
          <ProfileField text={'Workout Name'} data={workout.name} />
          <ProfileField
            text={'Workout Date'}
            data={workout.date.substring(0, 10)}
          />
          <ProfileField text={'Workout Type'} data={workout.type} />
          <ProfileField text={'Workout Notes'} data={workout.notes} />
          <Text style={styles.headerText}>Workout Exercises</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={workout.exercises}
            keyExtractor={(item) => item._id}
            renderItem={({item}) => {
              return (
                <View>
                  <ProfileField text={'Exercise Name'} data={item.name} />
                  <ProfileField text={'Exercise Reps'} data={item.reps} />
                  <ProfileField text={'Exercise Sets'} data={item.sets} />
                  <ProfileField text={'Exercise Rest'} data={item.rest} />
                  <ProfileField text={'Exercise Weight'} data={item.weight} />
                </View>
              );
            }}
          />
          <TouchableOpacity
            style={styles.deleteWorkoutButton}
            onPress={() => {
              Alert.alert(
                'Delete Workout',
                'Are you sure? You want to delete this workout?',
                [
                  {
                    text: 'Cancel',
                    onPress: () => {
                      return null;
                    },
                  },
                  {
                    text: 'Confirm',
                    onPress: () => {
                      dispatch(deleteWorkout({workout}));
                    },
                  },
                ],
                {cancelable: false},
              );
            }}>
            <Text style={styles.deleteWorkoutButtonText}>Delete Workout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '5%',
    marginBottom: '5%',
  },
  body: {
    flex: 1,
    backgroundColor: 'white',
  },
  insideBody: {flex: 1, margin: '5%'},
  deleteWorkoutButton: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6da7f2',
    borderRadius: 10,
    marginTop: '7%',
  },
  deleteWorkoutButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default WorkoutDetailsScreen;
