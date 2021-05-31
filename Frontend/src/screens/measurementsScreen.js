import React, {useState} from 'react';

import {View, StyleSheet, Alert, Text} from 'react-native';

import AuthInputField from '../components/authInputField';
import SignButton from '../components/signButton';

const MeasurementsScreen = () => {
  const [userHeight, setUserHeight] = useState(0);
  const [userWeight, setUserWeight] = useState(0);

  const handleSubmitButton = async () => {
    if (!userHeight) {
      alert('Please fill Height');
      return;
    }
    if (!userWeight) {
      alert('Please fill Weight');
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

    Alert.alert(
      'Results',
      `Your BMI is ${bmi}, indicating you're in the ${category} category for adults of your height. For your height, a normal weight range would be from ${lowerNormalWeight} to ${upperNormalWeight}`,
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.insideBody}>
          <AuthInputField title="Height" setData={setUserHeight} />
          <AuthInputField title="Weight" setData={setUserWeight} />
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
  signIn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '5%',
  },
  signInText: {
    color: '#6da7f2',
    fontSize: 15,
    fontWeight: 'bold',
  },
  accountText: {
    fontSize: 15,
  },
});

export default MeasurementsScreen;
