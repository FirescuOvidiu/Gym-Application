import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import QRCodeScanner from 'react-native-qrcode-scanner';

import SignButton from '../components/signButton';
import {
  saveGym,
  _updateGym,
  createReservation,
  deleteReservation,
} from '../redux/thunks/gymThunks';

const QRCodeScreen = () => {
  const gymReducer = useSelector((state) => state.gymReducer);
  const userReducer = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [scan, setScan] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    dispatch(saveGym());
  }, []);

  const handleSubmitButton = async (e) => {
    let gym = gymReducer;

    if (e.data === 'Someone entered the gym.') {
      gym.usersInGym++;
    }
    if (e.data === 'Someone exited the gym.') {
      gym.usersInGym--;
    }

    dispatch(_updateGym({gym}));
    setScan(false);
  };

  const handleMakeReservation = async () => {
    dispatch(
      createReservation({
        gymReducer,
        reservation: {
          user: userReducer._id,
          date: Date.now(),
        },
      }),
    );
    setDisabled(true);
  };

  const handleCancelReservation = async () => {
    dispatch(
      deleteReservation({
        gymReducer,
        userReducer,
      }),
    );
    setDisabled(false);
  };

  return (
    <>
      {!scan && (
        <View style={styles.body}>
          <SignButton
            submit={() => {
              setScan(true);
            }}
            text=" Start Scan "
          />
          <TouchableOpacity
            disabled={
              disabled ||
              gymReducer.maxUsersInGym <=
                gymReducer.usersInGym + gymReducer.reservations.length
                ? true
                : false
            }
            style={styles.signButton}
            onPress={handleMakeReservation}>
            <Text style={styles.signText}>Make Reservation</Text>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={!disabled}
            style={styles.signButton}
            onPress={handleCancelReservation}>
            <Text style={styles.signText}>Cancel Reservation</Text>
          </TouchableOpacity>

          <Text>People in gym: {gymReducer.usersInGym}</Text>
          <Text>
            Maximum number of people in gym: {gymReducer.maxUsersInGym}
          </Text>
          <Text>Reservations: {gymReducer.reservations.length}</Text>
        </View>
      )}
      {scan && (
        <View style={styles.container}>
          <QRCodeScanner
            showMarker={true}
            topContent={
              <View style={styles.body}>
                <Text style={styles.title}>Scan the QR Code</Text>
              </View>
            }
            onRead={handleSubmitButton}
            bottomContent={
              <View>
                <SignButton
                  submit={() => setScan(false)}
                  text=" Cancel Scan "
                />
              </View>
            }
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    margin: '5%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingBottom: '5%',
  },
  signButton: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#6da7f2',
    borderRadius: 10,
    marginTop: '5%',
    marginBottom: '5%',
  },
  signText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default QRCodeScreen;
