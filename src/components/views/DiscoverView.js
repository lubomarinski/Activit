import React from 'react';
import { View, Text, Image, FlatList, CameraRoll, Alert, StyleSheet, ScrollView } from 'react-native';
import Button from '../Button';
import { getModelPics } from '../../api/images';
import { getLocation, calculateDistance } from '../../utils/geolocation';
import Pic from '../DiscoverPic';

import ImagePicker from 'react-native-image-picker';
import PointsOverlay from '../PointsOverlay';

const imagePickerOptions = {
    title: 'Избери снимка',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

const styles = StyleSheet.create({
    pageTitleText: {
        flexWrap: 'wrap',
        fontFamily: 'montserratalt_medium',
        fontSize: 24,
        color: '#000000CC',
        textAlign: 'center',
        padding: 8,
    },
    container: {
        backgroundColor: '#EEE',
    },
    itemContainer: {
        marginTop: 24,
        alignItems: 'center',
    },
    cameraButton: {
        position: 'absolute',
        bottom: 64,
        alignSelf: 'center',
    }
});

export default class DiscoverView extends React.Component {
    state = {
        isLoading: true,
        items: [],
        location: null,
    };
    async componentDidMount() {
        const location = await getLocation();
        this.setState({ location });
        this.setState({
            isLoading: false,
            items: [
                {
                    title: 'Коледната елха на Бургас',
                    picUrl: 'none', likes: 123,
                    location: [42.496256, 27.473455],
                    description: 'Великолепната коледна елха е един от символите на зимния Бургас и е смятана за една от най-красивите градски елхи.'
                },
                {
                    title: 'Коледният мост на Бургас',
                    picUrl: 'none2',
                    likes: 73,
                    location: [42.495346, 27.484942],
                    description: 'Великолепната коледна мост е един от символите на зимния Бургас и е смятана за една от най-красивите градски мост.'
                }
            ]
        });
        const pics = await getModelPics({ location, maxdist: 500 /*meters*/, limit: 20, skip: 0 });
    }
    onCameraClicked = () => {
        ImagePicker.showImagePicker(imagePickerOptions, async (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const imageBlob = await (await fetch('data:image/jpeg;base64,' + response.data)).blob();

            }
        });
    };
    render() {
        if (this.state.isLoading) {
            return <Text>Loading...</Text>;
        }
        const renderPic = ({ item }) => {
            const distance = calculateDistance(this.state.location, item.location);
            return (
                <Pic key={item.picUrl}
                    distance={distance | 0}
                    {...item}
                />
            );
        };
        return (
            <View style={styles.container}>
                <PointsOverlay />
                <Text style={styles.pageTitleText}>Открий Бургас!</Text>
                <ScrollView contentContainerStyle={styles.itemContainer}>
                    <FlatList
                        data={this.state.items}
                        renderItem={renderPic}
                    />
                    <View style={{ height: 72 }} />
                </ScrollView >
                <CameraButton onPress={this.onCameraClicked} style={styles.cameraButton} />
            </View>
        );
    }
}

class CameraButton extends React.Component {
    constructor(props) {
        super(props);
        this.styles = StyleSheet.create({
            button: {
                overflow: 'hidden',
                zIndex: 100,
            },
            imageStyles: {
                padding: 8,
                borderRadius: 100,
                elevation: 8,
                backgroundColor: "#FAFAFA",
            }
        });
    }
    render() {
        return (
            <Button rippleColor="#00000088" rippleCircular={true} style={this.styles.button} {...this.props}>
                <View style={this.styles.imageStyles}>
                    <Image source={require('../../img/camera.png')} />
                </View>
            </Button>
        );
    }
}