import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
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
      return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
      );
      case false:
        return <LoginForm />;
      default:
        return <Spinner styles={styles.spinnerStyle} size='large' />;
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

const styles = {
  spinnerStyle: {
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  imageStyle: {
    size: { height: 150, width: 150}
  }
};

export default App;
