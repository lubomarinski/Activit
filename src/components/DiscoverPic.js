import React from 'react';
import { Dimensions, View, Text, StyleSheet, Image } from 'react-native';
import Button from '../components/Button';

export default class Pic extends React.Component {
    constructor(props) {
        super(props);
        const dims = Dimensions.get('window');
        const imageWidth = Math.min(dims.width, dims.height);
        this.imageWidth = imageWidth;
        this.styles = StyleSheet.create({
            container: {
                elevation: 3,
                borderRadius: 16,
                marginBottom: 24,
                overflow: 'hidden',
                flex: 1,
            },
            image: {
                width: imageWidth - 24,
                height: imageWidth - 72,
            },
            footer: {
                flex: 1,
                flexDirection: 'row',
                backgroundColor: 'white'
            },
            titleText: {
                flexWrap: 'wrap',
                fontFamily: 'montserratalt_medium',
                fontSize: 18,
                color: '#000000CC',
                textAlign: 'center',
                padding: 8,
            },
            likesText: {
                fontSize: 16,
                color: '#FFFFFF',
                textAlign: 'center',
                fontWeight: '600',
            },
            descriptionText: {
                flexWrap: 'wrap',
                fontFamily: 'montserratalt',
                paddingLeft: 16,
                paddingRight: 16,
                paddingBottom: 12,
            },
            likesButton: {
                position: 'absolute',
                bottom: 0,
                right: 0,
                padding: 8,
                paddingLeft: 16,
                paddingRight: 16,
            },
            distanceButton: {
                position: 'absolute',
                bottom: 0,
                left: 0,
                padding: 8,
                paddingLeft: 16,
                paddingRight: 16,
            },
            distanceText: {
                fontSize: 16,
                color: '#FFFFFF',
                textAlign: 'center',
                fontWeight: '600',
            },
        });
    }
    render() {
        const { title, picUrl, likes, description, distance } = this.props;
        return (
            <View style={this.styles.container}>
                <View style={this.styles.image}>
                    <Image style={this.styles.image}
                        width={this.imageWidth}
                        height={this.imageWidth - 72}
                        resizeMethod="scale"
                        source={require('../img/placeholder1.jpg')} />
                    <Button rippleColor="#FFFFFF55" style={this.styles.likesButton}>
                        <Text style={this.styles.likesText}>❤ {likes}</Text>
                    </Button>
                    <Button rippleColor="#FFFFFF55" style={this.styles.distanceButton}>
                        <Text style={this.styles.distanceText}>{distance}м</Text>
                    </Button>
                </View>
                <View style={this.styles.footer}>
                    <View style={{ flex: 1 }}>
                        <Text style={this.styles.titleText}>{title}</Text>
                        <Text style={this.styles.descriptionText}>{description}</Text>
                    </View>
                </View>
            </View>
        );
    }
}