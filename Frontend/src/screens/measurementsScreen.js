import React, {useState} from 'react';

import {View, StyleSheet, Alert, Modal, Text} from 'react-native';

import AuthInputField from '../components/authInputField';
import SignButton from '../components/signButton';

const MeasurementsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [userHeight, setUserHeight] = useState(0);
  const [userWeight, setUserWeight] = useState(0);
  const [userAge, setUserAge] = useState(0);
  const [userGender, setUserGender] = useState('');
  const [bmi, setBmi] = useState(0);
  const [category, setCategory] = useState('');
  const [lowerNormalWeight, setLowerNormalWeight] = useState(0);
  const [upperNormalWeight, setUpperNormalWeight] = useState(0);
  const [bmr, setBmr] = useState(0);

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

    setModalVisible(true);

    setBmi(((userWeight / (userHeight * userHeight)) * 10000).toFixed(1));
    setCategory(
      bmi < 18.5
        ? 'Underweight'
        : bmi < 25
        ? 'Normal'
        : bmi < 30
        ? 'Overweight'
        : 'Obese',
    );
    setLowerNormalWeight((0.00185 * userHeight * userHeight).toFixed(1));
    setUpperNormalWeight((0.00249 * userHeight * userHeight).toFixed(1));
    setBmr(
      userGender === 'male'
        ? 10 * userWeight + 6.25 * userHeight - 5 * userAge + 5
        : 10 * userWeight + 6.25 * userHeight - 5 * userAge - 161,
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
          <Modal animationType="slide" visible={modalVisible}>
            <View style={styles.modalView}>
              <Text>
                {'    '}Your BMI is {bmi}, indicating you're in the {category}{' '}
                category for adults of your height. For your height, a normal
                weight range would be from {lowerNormalWeight} to{' '}
                {upperNormalWeight}.{'\n\n'}
                {'    '}Your BMR is {bmr}. Based on your activity factor you
                should consume:
              </Text>
              <Text style={styles.bmrText}>
                - {(bmr * 1.2).toFixed(0)} calories if you do little to no
                exercise
              </Text>
              <Text style={styles.bmrText}>
                - {(bmr * 1.375).toFixed(0)} calories if you do light
                exercise/sports 1-3 days/week
              </Text>
              <Text style={styles.bmrText}>
                - {(bmr * 1.55).toFixed(0)} calories if you do moderate
                exercise/sports 3-5 days/week
              </Text>
              <Text style={styles.bmrText}>
                - {(bmr * 1.725).toFixed(0)} calories if you do hard
                exercise/sports 6-7 days a week
              </Text>
              <Text style={styles.bmrText}>
                - {(bmr * 1.9).toFixed(0)} very hard exercise/sports & a
                physical job
              </Text>
              <SignButton
                submit={() => {
                  setModalVisible(false);
                }}
                text="Cancel"
              />
            </View>
          </Modal>
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
  bmrText: {
    marginBottom: '2%',
  },
  modalView: {
    margin: 20,
    padding: '5%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
  },
});

export default MeasurementsScreen;
