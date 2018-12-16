import React, { Component } from 'react';
import { StyleSheet, Text, ImageBackground, View } from 'react-native';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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
    welcomeCard: {
        padding: 30,
        backgroundColor: '#FFFFFFC0',
        borderRadius: 5
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
        margin: 10
    }
});

export default class WelcomePage extends Component {
    render() {
        return (
            <ImageBackground source={require('../../img/burgas3.jpg')} style={styles.container}>
                <View style={styles.welcomeCard}>
                    <Text style={styles.welcome}>Добре дошли в опознай бургас!</Text>
                    <View style={styles.buttonsContainer}>
                        <RaisedTextButton
                            onPress={() => this.props.loadPage('LoginPage')}
                            style={styles.button}
                            title="Вход"
                            color="#2196f3"
                            titleColor='white'
                        />
                        <RaisedTextButton
                            onPress={() => this.props.loadPage('ViewLoader')}
                            style={styles.button}
                            title="Регистрация"
                            color="#2196f3"
                            titleColor='white'
                        />
                    </View>
                </View>
            </ImageBackground >
        );
    }
}