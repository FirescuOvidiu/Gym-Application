import AsyncStorage from '@react-native-community/async-storage';

import {addUser, updateUser} from '../actions/userActions';
import {
  addWorkout,
  deleteWorkout,
  addAllWorkouts,
} from '../actions/workoutActions';
import {
  loginRequest,
  registerRequest,
  userGetRequest,
  userPutRequest,
  userGetWorkoutsRequest,
  userDeleteWorkoutRequest,
  userPostWorkoutRequest,
} from './httpRequests';

export const loginUser = ({user, navigation}) => {
  return async () => {
    try {
      const response = await loginRequest({user});

      await AsyncStorage.setItem('accessToken', response.data.accessToken);
      navigation.replace('TabNavigatorRoutes');
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};

export const registerUser = ({user}) => {
  return async () => {
    try {
      const response = await registerRequest({user});

      alert(`${response.data.status}`);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};

export const saveUser = () => {
  return async (dispatch) => {
    try {
      let user = await userGetRequest();

      user = user.data.user;
      user.birthday = user.birthday.substring(0, 10);
      user.date = user.date.substring(0, 10);
      dispatch(addUser(user));
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};

export const _updateUser = ({user}) => {
  return async (dispatch) => {
    try {
      const response = await userPutRequest({user});

      dispatch(updateUser(user));
      alert(`${response.data.status}`);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};

export const saveWorkouts = () => {
  return async (dispatch) => {
    try {
      const user = await userGetRequest();
      user = user.data.user;
      const workouts = await userGetWorkoutsRequest({user});

      dispatch(addAllWorkouts(workouts.data.workouts));
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};

export const _deleteWorkout = ({userReducer, workout}) => {
  return async (dispatch) => {
    try {
      const response = await userDeleteWorkoutRequest({userReducer, workout});

      dispatch(deleteWorkout(workout._id));
      alert(`${response.data.status}`);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};

export const createWorkout = ({userReducer, workout}) => {
  return async (dispatch) => {
    try {
      const response = await userPostWorkoutRequest({userReducer, workout});

      dispatch(addWorkout(response.data.workout));
      alert(`${response.data.status}`);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};
