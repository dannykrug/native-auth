import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyAg_DMasCgMZkOwisIhSMd_7bGGBEyZddE',
        authDomain: 'authentication-4d7b9.firebaseapp.com',
        databaseURL: 'https://authentication-4d7b9.firebaseio.com',
        projectId: 'authentication-4d7b9',
        storageBucket: 'authentication-4d7b9.appspot.com',
        messagingSenderId: '928435007444'
      });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An App</Text>
      </View>
    );
  }
}

export default App;
