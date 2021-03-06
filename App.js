import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import AppNavigator from './src/navigation/AppNavigator';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
  colors: {
    ...DefaultTheme.colors,
    primary: '#5373ab',
    accent: '#f1c40f',
  },
};

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <AppNavigator />
      </PaperProvider>
    </Provider>
  );
}
