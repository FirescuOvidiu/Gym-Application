import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';

import {getWorkouts} from '../redux/thunks/userThunks';

import ListWorkouts from '../components/listWorkouts';

const WorkoutsScreen = () => {
  const userReducer = useSelector((state) => state.userReducer);
  const [workouts, setWorkouts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorkouts({userReducer, setWorkouts}));
  }, [workouts]);

  return (
    <View>
      <Text>WorkoutsScreen</Text>
      <ListWorkouts workouts={workouts} />
    </View>
  );
};

export default WorkoutsScreen;
