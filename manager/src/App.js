import React, { Component } from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

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
    return (
     <Provider store={store}>
     <View>
        <LoginForm></LoginForm>
        </View>
    </Provider>);
  }
}

export default App;
