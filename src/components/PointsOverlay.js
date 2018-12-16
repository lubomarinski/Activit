import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { getUserPoints } from '../api/user';

const styles = StyleSheet.create({
    root: {
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 10000,
        backgroundColor: 'lightgray',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomLeftRadius: 4,
        padding: 6,
        elevation: 4,
    },
    image: {
        width: 32,
        height: 32,
    },
    text: {
        paddingLeft: 4,
        paddingRight: 4,
        color: '#000000CC',
        fontSize: 18,
        fontFamily: 'montserratalt_medium',
    },
});

export default class PointsOverlay extends React.Component {
    state = {
        isLoading: true,
        points: 0,
    }
    interval = null;
    componentDidMount() {
        this.refreshPoints();
        this.interval = setInterval(this.refreshPoints, 1000);
    }
    refreshPoints = async () => {
        const points = await getUserPoints();
        this.setState({ isLoading: false, points });
    };
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <View style={styles.root}>
                <Image style={styles.image} source={require('../img/points.png')} />
                {this.state.isLoading
                    ? <Text style={styles.text}>...</Text>
                    : <Text style={styles.text}>{this.state.points}</Text>
                }
            </View>
        );
    }
}