import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import {createWorkout} from '../redux/thunks/userThunks';

import SignButton from '../components/signButton';
import AuthInputField from '../components/authInputField';

const CreateWorkoutScreen = () => {
  const userReducer = useSelector((state) => state.userReducer);
  const [workoutName, setWorkoutName] = useState('');
  const [workoutDate, setWorkoutDate] = useState(Date.now());
  const [workoutType, setWorkoutType] = useState('');
  const [workoutNotes, setWorkoutNotes] = useState('');
  const [exerciseName, setExerciseName] = useState('');
  const [exerciseReps, setExerciseReps] = useState(0);
  const [exerciseSets, setExerciseSets] = useState(0);
  const [exerciseRest, setExerciseRest] = useState(0);
  const [exerciseWeight, setExerciseWeight] = useState(0);
  const [exercises, setExercises] = useState([]);
  const dispatch = useDispatch();

  const handleSubmitButton = async () => {
    if (!workoutName) {
      alert('Please fill Workout Name');
      return;
    }
    if (!workoutDate) {
      alert('Please fill Workout Date');
      return;
    }
    if (!workoutType) {
      alert('Please fill Workout Type');
      return;
    }
    if (!exercises) {
      alert('Please fill Exercises');
      return;
    }

    dispatch(
      createWorkout({
        userReducer,
        workout: {
          name: workoutName,
          date: workoutDate,
          type: workoutType,
          notes: workoutNotes,
          exercises: exercises,
        },
      }),
    );
  };

  const createExercise = async () => {
    if (!exerciseName) {
      alert('Please fill Exercise Name');
      return;
    }
    if (!exerciseSets) {
      alert('Please fill Exercise Sets');
      return;
    }
    if (!exerciseReps) {
      alert('Please fill Exercise Reps');
      return;
    }
    if (!exerciseRest) {
      alert('Please fill Exercise Rest');
      return;
    }

    setExercises((exercises) => [
      ...Object.values(exercises),
      {
        name: exerciseName,
        sets: exerciseSets,
        reps: exerciseReps,
        rest: exerciseRest,
        weight: exerciseWeight,
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <ScrollView>
          <Text style={styles.title}>Workout</Text>
          <AuthInputField title="Workout Name" setData={setWorkoutName} />
          <AuthInputField title="Workout Date" setData={setWorkoutDate} />
          <AuthInputField title="Workout Type" setData={setWorkoutType} />
          <AuthInputField title="Workout Notes" setData={setWorkoutNotes} />
          <Text style={styles.title}>Exercise</Text>
          <AuthInputField title="Exercise Name" setData={setExerciseName} />
          <AuthInputField title="Exercise Sets" setData={setExerciseSets} />
          <AuthInputField title="Exercise Reps" setData={setExerciseReps} />
          <AuthInputField title="Exercise Rest" setData={setExerciseRest} />
          <AuthInputField title="Exercise Weight" setData={setExerciseWeight} />
          <SignButton submit={createExercise} text="Create Exercise" />
        </ScrollView>
        <SignButton submit={handleSubmitButton} text="Create Workout" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '5%',
  },
  title: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '5%',
  },
});

export default CreateWorkoutScreen;
