import {
  addWorkout,
  removeWorkout,
  addAllWorkouts,
} from '../actions/workoutActions';
import {
  userGetRequest,
  workoutGetRequest,
  workoutPostRequest,
  workoutDeleteRequest,
} from './httpRequests';

export const saveWorkouts = () => {
  return async (dispatch) => {
    try {
      const user = await userGetRequest();
      const workouts = await workoutGetRequest({user: user.data.user});

      dispatch(addAllWorkouts(workouts.data.workouts));
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};

export const createWorkout = ({workout}) => {
  return async (dispatch) => {
    try {
      const response = await workoutPostRequest({workout});

      dispatch(addWorkout(response.data.workout));
      alert(`${response.data.status}`);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};

export const deleteWorkout = ({workout}) => {
  return async (dispatch) => {
    try {
      const response = await workoutDeleteRequest({workout});

      dispatch(removeWorkout(workout._id));
      alert(`${response.data.status}`);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};
