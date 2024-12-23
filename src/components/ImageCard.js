import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

export default class ImageCard extends Component {
    constructor(props) {
        super(props);
        let imgSize = props.imgSize;
        if (imgSize === undefined) imgSize = {
            width: Dimensions.get('window').width * 0.45,
            height: Dimensions.get('window').width * 0.45
        }
        if (props.large) imgSize.height = imgSize.height * 2;
        this.styles = StyleSheet.create({
            imageText: {
                color: '#212121',
                fontWeight: '300',
                fontSize: 20,
                textAlign: 'center',
                fontFamily: 'Roboto',
                flexWrap: 'wrap',
                fontFamily: 'montserratalt_medium',
                paddingTop: 4,
                paddingBottom: 5
            },
            imagePanel: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                width: imgSize.width,
                margin: Dimensions.get('window').width * 0.025,
                borderRadius: 15,
                overflow: 'hidden',
                elevation: 3,
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