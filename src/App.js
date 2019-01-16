import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyAg_DMasCgMZkOwisIhSMd_7bGGBEyZddE',
        authDomain: 'authentication-4d7b9.firebaseapp.com',
        databaseURL: 'https://authentication-4d7b9.firebaseio.com',
        projectId: 'authentication-4d7b9',
        storageBucket: 'authentication-4d7b9.appspot.com',
        messagingSenderId: '928435007444'
      });

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ loggedIn: true });
        } else {
          this.setState({ loggedIn: false });
        }
      });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return <Button>Log Out</Button>;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
