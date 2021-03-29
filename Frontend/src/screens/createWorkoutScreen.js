import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';

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
          exercises: exercises,
          workoutNotes: setWorkoutNotes,
        },
      }),
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <AuthInputField title="Workout Name" setData={setWorkoutName} />
        <AuthInputField title="Workout Date" setData={setWorkoutDate} />
        <AuthInputField title="Workout Type" setData={setWorkoutType} />
        <AuthInputField title="Workout Notes" setData={setWorkoutNotes} />
        <AuthInputField title="Exercise Name" setData={setExerciseName} />
        <AuthInputField title="Exercise Sets" setData={setExerciseSets} />
        <AuthInputField title="Exercise Reps" setData={setExerciseReps} />
        <AuthInputField title="Exercise Rest" setData={setExerciseRest} />
        <AuthInputField title="Exercise Weight" setData={setExerciseWeight} />
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
    flex: 1.5,
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '5%',
  },
});

export default CreateWorkoutScreen;
