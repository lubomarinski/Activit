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
                backgroundColor: 'white',
                margin: 10,
                elevation: 3,
            },
            textCoin: {
                fontSize: 20
            },
            pointsView: {
                flexDirection: 'row',
                justifyContent: 'center',
                padding: 20
            },
            coin: {
                width: 28,
                height: 28
            },
            text: {
                fontSize: 20,
                paddingLeft: 5,
                paddingRight: 5,
                fontWeight: 'bold'
            }
        });
    };

    render() {
        return (
            <View onPress={this.props.onPress} style={this.styles.container}>
                <View style={this.styles.pointsView} >
                    <Text style={this.styles.text}>{this.props.place}</Text>
                    <Text style={this.styles.textCoin}>{this.props.fullName}</Text>
                </View>
                <View style={this.styles.pointsView} >
                    <Image style={this.styles.coin} source={require('../img/points.png')} />
                    <Text style={this.styles.textCoin}>{this.props.points}</Text>
                </View>
            </View>
        );
    }

}