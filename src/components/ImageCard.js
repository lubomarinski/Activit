import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

export default class ImageCard extends Component {
    constructor(props) {
        super(props);
        imgSize = props.imgSize;
        if (imgSize === undefined) imgSize = {
            width: Dimensions.get('window').width * 0.45,
            height: Dimensions.get('window').width * 0.45
        }
        this.styles = StyleSheet.create({
            imageText: {
                color: '#212121',
                fontWeight: '300',
                fontSize: 20,
                textAlign: 'center',
                fontFamily: 'Roboto'
            },
            imagePanel: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#FAFAFA',
                width: imgSize.width,
                margin: Dimensions.get('window').width * 0.025
            },
            imageImg: {
                width: imgSize.width,
                height: imgSize.height
            },
            tView: {
                backgroundColor: '#00000000'
            }
        });
    };

    render() {
        return (
            <View style={this.styles.tView}>
                <View style={this.styles.imagePanel}>
                    <Image style={this.styles.imageImg} source={{ uri: this.props.img }} />
                    <Text style={this.styles.imageText}>{this.props.text}</Text>
                </View>
            </View>
        );
    }

}