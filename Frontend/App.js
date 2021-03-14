import * as React from 'react';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';

import AppNavigtorRoutes from './src/navigation/stackNavigatorRotues';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigtorRoutes />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
