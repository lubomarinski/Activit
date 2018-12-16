import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

export default class UserCard extends Component {
    constructor(props) {
        super(props);
        if (props.large) imgSize.height = imgSize.height * 2;
        this.styles = StyleSheet.create({
            container: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: Dimensions.get('window').width * 0.8,
                height: 50,
                borderRadius: 50,
                backgroundColor: '#FAFAFA',
                margin: 10
            },
            text: {
                padding: 20,
                fontSize: 20
            }
        });
    };

    render() {
        return (
            <View onPress={this.props.onPress} style={this.styles.container}>
                <Text style={this.styles.text}>{this.props.fullName}</Text>
                <Text style={this.styles.text}>{this.props.points}</Text>
            </View>
        );
    }

}