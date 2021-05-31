import React from 'react';
import {useSelector} from 'react-redux';
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const ProfileScreen = ({navigation}) => {
  const userReducer = useSelector((state) => state.userReducer);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          source={require('../images/profileBackground.jpg')}
          style={styles.backgroundImage}>
          <Text style={styles.headerTextName}>
            Welcome {userReducer.name.first} {userReducer.name.last}
          </Text>
          <Text style={styles.headerTextEmail}>{userReducer.email}</Text>
        </ImageBackground>
      </View>
      <View style={styles.body}>
        <View style={styles.insideBody}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('UserInformations')}>
            <Text style={styles.buttonText}>Account Informations</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Measurements')}>
            <Text style={styles.buttonText}>Measurements</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingBottom: 20,
    paddingTop: 10,
  },
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  headerTextName: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  headerTextEmail: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  body: {
    backgroundColor: 'white',
    flex: 2,
  },
  insideBody: {
    flex: 2,
    margin: '5%',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6da7f2',
    borderRadius: 10,
    marginTop: '7%',
    marginBottom: '5%',
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
