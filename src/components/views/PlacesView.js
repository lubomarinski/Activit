import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, FlatList, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { getLocation } from '../../utils/geolocation';

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#EEEEEE',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        width: Dimensions.get('window').width, //full width
        height: Dimensions.get('window').height, //full height
        flex: 1
    }
});

export default class PlacesView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMapReady: false,
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            markers: []
        }
    }

    async componentDidMount() {
        const location = await getLocation();
        this.setState({
            region: {
                latitude: location[0],
                longitude: location[1],
                latitudeDelta: 0.0522,
                longitudeDelta: 0.0221,
            }, 
            markers: [
                {
                    location: {
                        latitude: location[0],
                        longitude: location[1]
                    },
                    title: 'Заглавие',
                    description: 'Описание',
                    image: 'http://mining.free.bg/image.jpg',
                }
            ]
        });
    }

    onMapLayout = () => {
        this.setState({ isMapReady: true });
    }

    render() {
        return (
            <View style={styles.page}>
                <MapView
                    style={styles.map}
                    onLayout={this.onMapLayout}
                    region={this.state.region}
                    onRegionChangeComplete={(region) => this.setState({ region })} >
                    {this.state.isMapReady && this.state.markers.map(marker => (
                        <Marker
                            coordinate={marker.location}
                            image={require('../../img/pin3.png')}
                            title={marker.title}
                            description={marker.description}
                        />
                    ))}
                </MapView>
            </View>
        );
    }
}