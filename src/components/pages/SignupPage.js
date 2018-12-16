import React, { Component } from 'react';
import { StyleSheet, Text, ImageBackground, View, Dimensions } from 'react-native';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';
import { TextField } from 'react-native-material-textfield';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#000000'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 1,
    },
    contentCard: {
        //width: Dimensions.get('window').width * 0.6,
        //height: Dimensions.get('window').height
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
        margin: 10,
        color: 'white'
    }
});

export default class SignupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    render() {
        return (
            //<ImageBackground source={require('../../img/burgas3.jpg')} style={styles.container}>
            <View style={styles.container}>
                <View></View>
                <View style={styles.contentCard}>
                    <Text style={styles.welcome}>Ргистрирай се в опознай бургас!</Text>
                    <TextField
                        label='Email'
                        value={this.state.email}
                        fontSize={20}
                        onChangeText={(email) => this.setState({ email })}
                    />
                    <TextField
                        label='Password'
                        value={this.state.password}
                        fontSize={20}
                        secureTextEntry
                        onChangeText={(password) => this.setState({ password })}
                    />
                    <View style={styles.buttonsContainer}>
                        <RaisedTextButton
                            onPress={() => this.props.loadPage('ViewLoader')}
                            style={styles.button}
                            title="Регистрация"
                            color="#2196f3"
                            titleColor='white'
                        />
                        <TextButton
                            onPress={() => this.props.loadPage('WelcomePage')}
                            style={styles.button}
                            title="Назад"
                            titleColor='#2196f3'
                        />
                    </View>
                </View>
                <View>
                    <TextButton
                        onPress={() => this.props.loadPage('LoginPage')}
                        style={styles.button}
                        title="Вход"
                        titleColor='#2196f3'
                    />
                </View>
            </View>
            //</ImageBackground >
        );
    }
}