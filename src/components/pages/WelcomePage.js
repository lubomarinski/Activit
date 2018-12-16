import React, { Component } from 'react';
import { StyleSheet, Text, ImageBackground, View, Image } from 'react-native';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';

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
    welcomeCard: {
        padding: 30,
        backgroundColor: '#FFFFFFC0',
        borderRadius: 15
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
        margin: 10
    },
    fb_button: {
        width: 200,
        height: 40,
        bottom: 7.5
    },
    bottomCard: {
        padding: 25,
        backgroundColor: '#FFFFFFC0',
        borderRadius: 15,
        bottom: -15
    },
});

export default class WelcomePage extends Component {
    render() {
        return (
            <ImageBackground source={require('../../img/burgas3.jpg')} style={styles.container}>
                <View></View>
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
                            onPress={() => this.props.loadPage('SignupPage')}
                            style={styles.button}
                            title="Регистрация"
                            color="#2196f3"
                            titleColor='white'
                        />
                    </View>
                </View>
                <View style={styles.bottomCard}>
                    <Image style={styles.fb_button} source={require('../../img/fb_button.png')} />
                    {/*<RaisedTextButton
                        onPress={() => this.props.loadPage('ViewLoader')}
                        style={styles.button}
                        title="Вход с FB"
                        color="#29487d"
                        titleColor='white'
                    />*/}
                </View>
            </ImageBackground >
        );
    }
}