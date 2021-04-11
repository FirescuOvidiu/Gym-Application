import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import QRCodeScanner from 'react-native-qrcode-scanner';

import SignButton from '../components/signButton';
import {saveGym} from '../redux/thunks/gymThunks';

const QRCodeScreen = () => {
  const gymReducer = useSelector((state) => state.gymReducer);
  const dispatch = useDispatch();
  const [scan, setScan] = useState(false);

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

    dispatch(_updateUser({gym}));

    console.log(gym.usersInGym);
    setScan(false);
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
          <Text>QR Code Result: </Text>
          <Text>People in gym: {gymReducer.usersInGym}</Text>
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
});

export default QRCodeScreen;
