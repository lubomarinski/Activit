import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

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
        this.styles.text = { ...this.styles.text, ...this.props.style };
        return (
            <Text onPress={this.props.onPress} style={this.styles.text}>{this.props.title}</Text>
        );
    }
}