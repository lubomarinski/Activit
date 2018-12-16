import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, FlatList, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#EEEEEE',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default class PlacesView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            markers: [
                {
                    latitude: 37.78825,
                    longitude: -122.4324
                },
                {
                    latitude: 37.08825,
                    longitude: -122.0324
                }
            ]
        }
    }

    render() {
        return (
            <View style={styles.page}>
                <MapView
                    region={this.state.region}
                    onRegionChange={(region) => this.setState({ region })} >
                    {this.state.markers.map(marker => (
                        <Marker
                            coordinate={marker}
                            image={require('../../img/pin.png')}
                        />
                    ))}
                </MapView>
            </View>
        );
    }
}