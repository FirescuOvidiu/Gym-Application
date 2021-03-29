import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';

import {createWorkout} from '../redux/thunks/userThunks';

import SignButton from '../components/signButton';
import AuthInputField from '../components/authInputField';

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
    if (!exercises) {
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
    <View style={styles.container}>
      <View style={styles.body}>
        <AuthInputField title="Workout Name" setData={setName} />
        <AuthInputField title="Workout Date" setData={setDate} />
        <AuthInputField title="Workout Type" setData={setType} />
        <AuthInputField title="Workout Notes" setData={setNotes} />
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
