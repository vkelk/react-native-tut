import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyC_XFRkl0IWtcIx3etgrqLEi9L0pSO5G-A',
            authDomain: 'manager-a1f10.firebaseapp.com',
            databaseURL: 'https://manager-a1f10.firebaseio.com',
            projectId: 'manager-a1f10',
            storageBucket: 'manager-a1f10.appspot.com',
            messagingSenderId: '842870707219'
        };

        firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
