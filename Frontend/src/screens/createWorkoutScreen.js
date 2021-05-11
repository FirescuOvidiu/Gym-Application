import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, StyleSheet, Modal} from 'react-native';

import {createWorkout} from '../redux/thunks/workoutThunks';

import SignButton from '../components/signButton';
import AuthInputField from '../components/authInputField';

const CreateWorkoutScreen = () => {
  const userReducer = useSelector((state) => state.userReducer);
  const [modalVisible, setModalVisible] = useState(false);
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
        workout: {
          name: workoutName,
          date: workoutDate,
          type: workoutType,
          notes: workoutNotes,
          exercises: exercises,
          user: userReducer,
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

    alert('Exercise created');
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <AuthInputField title="Name" setData={setWorkoutName} />
        <AuthInputField title="Date" setData={setWorkoutDate} />
        <AuthInputField title="Type" setData={setWorkoutType} />
        <AuthInputField title="Notes" setData={setWorkoutNotes} />
        <Modal animationType="slide" visible={modalVisible}>
          <View style={styles.modalView}>
            <AuthInputField title="Name" setData={setExerciseName} />
            <AuthInputField title="Sets" setData={setExerciseSets} />
            <AuthInputField title="Reps" setData={setExerciseReps} />
            <AuthInputField title="Rest" setData={setExerciseRest} />
            <AuthInputField title="Weight" setData={setExerciseWeight} />
            <SignButton submit={createExercise} text="Create Exercise" />
            <SignButton
              submit={() => {
                setModalVisible(false);
              }}
              text="Cancel"
            />
          </View>
        </Modal>
        <SignButton
          submit={() => {
            setModalVisible(true);
          }}
          text="Create Exercise"
        />
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
  modalView: {
    margin: 20,
    padding: '5%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
  },
});

export default CreateWorkoutScreen;
