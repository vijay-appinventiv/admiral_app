import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet } from 'react-native';

//custom imports below
import store from './store';
import Home from './screens/home';

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})