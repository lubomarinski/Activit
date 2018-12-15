import React, { Component } from 'react';
import { StyleSheet, Text, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton';

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
        padding: 30,
        backgroundColor: '#FFFFFFC0',
        borderRadius: 5,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 1,
    },
    button: {
        margin: 10,
        color: 'white'
    }
});

export default class WelcomePage extends Component {
    render() {
        return (
            <ImageBackground source={require('../../img/burgas3.jpg')} style={styles.container}>
                <Text style={styles.welcome}>Добре дошли в опознай бургас!</Text>
                <StyledButton
                    onPress={() => this.props.loadPage('test')}
                    style={styles.button}
                    title="Вход"
                    color="blue"
                />
                <StyledButton
                    onPress={() => this.props.loadPage('ViewLoader')}
                    style={styles.button}
                    title="Регистрация"
                    color="blue"
                />
            </ImageBackground >
        );
    }
}