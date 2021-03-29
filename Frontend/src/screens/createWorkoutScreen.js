import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text} from 'react-native';

import {createWorkout} from '../redux/thunks/userThunks';

import SignButton from '../components/signButton';

const CreateWorkoutScreen = () => {
  const userReducer = useSelector((state) => state.userReducer);
  const [name, setName] = useState('');
  const [date, setDate] = useState(Date.now());
  const [type, setType] = useState('');
  const [exercises, setExercises] = useState([]);
  const [notes, setNotes] = useState('');
  const dispatch = useDispatch();

  const handleSubmitButton = async () => {
    if (!name) {
      alert('Please fill Name');
      return;
    }
    if (!date) {
      alert('Please fill Date');
      return;
    }
    if (!type) {
      alert('Please fill Type');
      return;
    }
    if (!Exercises) {
      alert('Please fill Exercises');
      return;
    }

    dispatch(
      createWorkout({
        userReducer,
        workout: {
          name: name,
          date: date,
          type: type,
          exercises: exercises,
          notes: notes,
        },
      }),
    );
  };

  return (
    <View>
      <Text>Test</Text>
      <SignButton submit={handleSubmitButton} text="Create Workout" />
    </View>
  );
};

export default CreateWorkoutScreen;
