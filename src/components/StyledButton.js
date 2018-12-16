import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class StyledButton extends Component {
    styles = StyleSheet.create({
        text: {
            fontSize: 20,
            padding: 15,
            backgroundColor: this.props.color,
            borderRadius: 10
        }
    });
    render() {
        //this.styles.text = { ...this.styles.text, ...this.props.style };
        return (
            //<Text onPress={this.props.onPress} style={this.styles.text}>{this.props.title}</Text>
            <View style={this.props.style}>
                <Button onPress={this.props.onPress} title={this.props.title} color={this.props.color} />
            </View>
        );
    }
}