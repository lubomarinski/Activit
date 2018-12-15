import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground  } from 'react-native';
import DiscoverView from '../views/DiscoverView';

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
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default class WelcomePage extends Component {
    render() {
        return <DiscoverView />;
        return (
            <ImageBackground source={require('../../img/burgas3.jpg')} style={styles.container}>
                <Text style={styles.welcome}>Добре дошли в опознай бургас!</Text>
            </ImageBackground >
        );
    }
}