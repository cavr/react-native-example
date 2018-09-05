import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    userLogged: null,
    loading: true
  }
  componentWillMount() {
    firebase.initializeApp({});

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({userLogged: true});
      } else {
        this.setState({userLogged: false});
      }
    });
  }

  renderContent() {
    switch (this.state.userLogged) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
        );
      case false:
        return <LoginForm/>
      default:
        return <Spinner size="large"/>
    }
    if (this.state.userLogged) {
      return (
        <Button>Log Out</Button>
      );
    }
    return <LoginForm/>
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication'/> {this.renderContent()}
      </View>
    );
  }
}

export default App;
