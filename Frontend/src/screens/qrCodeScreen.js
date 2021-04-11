import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

import SignButton from '../components/signButton';

const QRCodeScreen = () => {
  const [scan, setScan] = useState(false);
  const [result, setResult] = useState();

  const handleSubmitButton = async (e) => {
    setResult(e.data);
    setScan(false);
  };

  return (
    <>
      {!scan && (
        <View style={styles.body}>
          <SignButton
            submit={() => {
              setScan(true);
              setResult();
            }}
            text=" Start Scan "
          />
          <Text>QR Code Result: {result}</Text>
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
