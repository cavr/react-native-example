import React, { Component } from 'react-native';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyA7wO0RHLZ76alX6RPSQ8Ea9hR2ZybgvKY",
      authDomain: "manager-e5a71.firebaseapp.com",
      databaseURL: "https://manager-e5a71.firebaseio.com",
      projectId: "manager-e5a71",
      storageBucket: "manager-e5a71.appspot.com",
      messagingSenderId: "315921799052"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (<Provider store={createStore(reducers)}>
      <View>
        <Text>Hello!
        </Text>
      </View>
    </Provider>);
  }
}

export default App;
