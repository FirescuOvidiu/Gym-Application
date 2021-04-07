import React, {useState} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
const QRCodeScreen = () => {
  const [scan, setScan] = useState(false);
  const [result, setResult] = useState();

  return (
    <View>
      {!scan && (
        <View>
          <TouchableOpacity
            onPress={() => {
              setScan(true);
              setResult();
            }}>
            <Text>Start Scan</Text>
          </TouchableOpacity>
        </View>
      )}
      {scan && (
        <QRCodeScanner
          reactivate={true}
          showMarker={true}
          topContent={<Text>Scan your QRCode!</Text>}
          onRead={(e) => {
            console.log(e.data);
          }}
          bottomContent={
            <TouchableOpacity onPress={() => setScan(false)}>
              <Text>Cancel Scan</Text>
            </TouchableOpacity>
          }
        />
      )}
    </View>
  );
};

export default QRCodeScreen;
