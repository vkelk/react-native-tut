import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm'

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCT5jCJHPLfs6QKucHjc7DtWUeRtkKinjI",
            authDomain: "auth-504e3.firebaseapp.com",
            databaseURL: "https://auth-504e3.firebaseio.com",
            projectId: "auth-504e3",
            storageBucket: "auth-504e3.appspot.com",
            messagingSenderId: "563074733173"
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
                    <Card>
                        <CardSection>
                            <Button onPress={() => firebase.auth().signOut()}>
                                Log Out
                            </Button>
                        </CardSection>
                    </Card>
                );
            case false:
                return <LoginForm />;
            default:
                return (
                    <Card>
                        <CardSection>
                        <Spinner size="large" />
                        </CardSection>
                    </Card>
                );
        }        
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );  
    };
}

export default App;
