import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/';

class App extends Component {

    componentWillMount() {
        firebase.initializeApp(
            {
                apiKey: 'AIzaSyB-I9wwtaTJF005OgCvJq9gyByYO05SEgo',
                authDomain: 'auth-9de17.firebaseapp.com',
                databaseURL: 'https://auth-9de17.firebaseio.com',
                projectId: 'auth-9de17',
                storageBucket: '',
                messagingSenderId: '115277985825',
                appId: '1:115277985825:web:2e8ebe1e9517ed13'
            }
        )
    }

    render() {
        return(
            <View>
                <Header text='Authentication'></Header>
                <LoginForm/>
            </View>
        );
    }
}

export default App;