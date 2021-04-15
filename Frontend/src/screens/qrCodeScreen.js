import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import QRCodeScanner from 'react-native-qrcode-scanner';

import SignButton from '../components/signButton';
import {
  saveUsersInGym,
  createUserInGym,
  deleteUserFromGym,
} from '../redux/thunks/userInGymThunks';
import {
  createReservation,
  deleteReservation,
  saveReservations,
} from '../redux/thunks/reservationThunks';

const QRCodeScreen = () => {
  const gymReducer = useSelector((state) => state.gymReducer);
  const userReducer = useSelector((state) => state.userReducer);
  const reservationReducer = useSelector((state) => state.reservationReducer);
  const userInGymReducer = useSelector((state) => state.userInGymReducer);
  const dispatch = useDispatch();
  const [scan, setScan] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [userInGym, setUserInGym] = useState(false);

  useEffect(() => {
    dispatch(saveReservations({gym: gymReducer}));
    dispatch(saveUsersInGym({gym: gymReducer}));
    setDisabled(
      reservationReducer.ReservationsById[userReducer._id] !== undefined,
    );
    setUserInGym(
      userInGymReducer.usersInGymById[userReducer._id] !== undefined,
    );
  }, []);

  const handleSubmitButton = async (e) => {
    if (e.data === 'Someone entered the gym.') {
      if (userInGym) {
        setScan(false);
        alert('The user is already in gym');
        return;
      }
      dispatch(
        createUserInGym({
          userInGym: {user: userReducer, gym: gymReducer},
          setUserInGym,
        }),
      );
    }

    if (e.data === 'Someone exited the gym.') {
      if (!userInGym) {
        setScan(false);
        alert("The user isn't in gym");
        return;
      }
      dispatch(
        deleteUserFromGym({
          userInGym: userInGymReducer.usersInGymById[userReducer._id],
          setUserInGym,
        }),
      );
    }

    setScan(false);
  };

  const handleMakeReservation = async () => {
    dispatch(
      createReservation({
        reservation: {
          user: userReducer,
          gym: gymReducer,
        },
        setDisabled,
      }),
    );
  };

  const handleCancelReservation = async () => {
    dispatch(
      deleteReservation({
        reservation: reservationReducer.ReservationsById[userReducer._id],
        setDisabled,
      }),
    );
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
                userInGymReducer.allUsersInGym.length +
                  reservationReducer.allReservations.length
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

          <Text>People in gym: {userInGymReducer.allUsersInGym.length}</Text>
          <Text>
            Maximum number of people in gym: {gymReducer.maxUsersInGym}
          </Text>
          <Text>Reservations: {reservationReducer.allReservations.length}</Text>
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
