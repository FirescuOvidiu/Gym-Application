import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {getWorkouts} from '../redux/thunks/userThunks';

import ListWorkouts from '../components/listWorkouts';

const WorkoutsScreen = ({navigation}) => {
  const userReducer = useSelector((state) => state.userReducer);
  const [workouts, setWorkouts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorkouts({userReducer, setWorkouts}));
  }, [workouts]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Workouts</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.insideBody}>
          <ListWorkouts workouts={workouts} navigation={navigation} />
          <TouchableOpacity
            style={styles.createWorkoutButton}
            onPress={() => navigation.navigate('CreateWorkout')}>
            <Text style={styles.createWorkoutButtonText}>Create Workout</Text>
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
  header: {
    flex: 1,
  },
  headerText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '5%',
  },
  body: {
    backgroundColor: 'white',
    flex: 10,
  },
  insideBody: {
    margin: '5%',
    flex: 10,
  },
  createWorkoutButton: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#6da7f2',
    borderRadius: 10,
    marginTop: '7%',
  },
  createWorkoutButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default WorkoutsScreen;
