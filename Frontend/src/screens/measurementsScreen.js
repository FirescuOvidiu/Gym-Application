import React, {useState} from 'react';

import {View, StyleSheet, Alert} from 'react-native';

import AuthInputField from '../components/authInputField';
import SignButton from '../components/signButton';

const MeasurementsScreen = () => {
  const [userHeight, setUserHeight] = useState(0);
  const [userWeight, setUserWeight] = useState(0);
  const [userAge, setUserAge] = useState(0);
  const [userGender, setUserGender] = useState('');

  const handleSubmitButton = async () => {
    if (!userHeight) {
      alert('Please fill Height');
      return;
    }
    if (!userWeight) {
      alert('Please fill Weight');
      return;
    }
    if (!userAge) {
      alert('Please fill Age');
      return;
    }
    if (!userGender) {
      alert('Please fill Gender');
      return;
    }
    if (userGender !== 'male' && userGender !== 'female') {
      alert('Gender should be male or female.');
      return;
    }

    const bmi = ((userWeight / (userHeight * userHeight)) * 10000).toFixed(1),
      category =
        bmi < 18.5
          ? 'Underweight'
          : bmi < 25
          ? 'Normal'
          : bmi < 30
          ? 'Overweight'
          : 'Obese',
      lowerNormalWeight = (0.00185 * userHeight * userHeight).toFixed(1),
      upperNormalWeight = (0.00249 * userHeight * userHeight).toFixed(1);

    let bmr = 10 * userWeight + 6.25 * userHeight - 5 * userAge;
    if (userGender === 'male') {
      bmr = bmr + 5;
    } else {
      bmr = bmr - 161;
    }

    Alert.alert(
      'Results',
      `Your BMI is ${bmi}, indicating you're in the ${category} category for adults of your height. For your height, a normal weight range would be from ${lowerNormalWeight} to ${upperNormalWeight}. Your BMR is ${bmr}.
      Based on your activity factor you should consume ${
        bmr * 1.2
      } calories if you do little to no exercise,
      ${bmr * 1.375} calories if you do light exercise/sports 1-3 days/week, ${
        bmr * 1.55
      } calories
      if you do moderate exercise/sports 3-5 days/week, ${
        bmr * 1.725
      } calories if you 
      do hard exercise/sports 6-7 days a week, ${
        bmr * 1.9
      } very hard exercise/sports & a physical job`,
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.insideBody}>
          <AuthInputField title="Height" setData={setUserHeight} />
          <AuthInputField title="Weight" setData={setUserWeight} />
          <AuthInputField title="Age" setData={setUserAge} />
          <AuthInputField title="Gender" setData={setUserGender} />
          <SignButton submit={handleSubmitButton} text="Calculate" />
        </View>
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
    backgroundColor: 'white',
  },
  insideBody: {
    flex: 1,
    margin: '5%',
  },
});

export default MeasurementsScreen;
