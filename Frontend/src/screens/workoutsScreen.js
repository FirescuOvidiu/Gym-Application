import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';

import {getWorkouts} from '../redux/thunks/userThunks';

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
      <FlatList
        data={workouts}
        keyExtractor={(item) => item._id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity>
              <Text>Test</Text>
            </TouchableOpacity>
          );
        }}
      />
      <Text>Test1</Text>
    </View>
  );
};

export default WorkoutsScreen;
