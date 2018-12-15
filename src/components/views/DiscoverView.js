import React from 'react';
import { View, Text, Image, Dimensions, FlatList, Alert, StyleSheet, ScrollView } from 'react-native';
import Button from '../Button';
import { getModelPics } from '../../api/images';
import { getLocation } from '../../utils/geolocation';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE',
    },
    itemContainer: {
        marginTop: 24,
        alignItems: 'center',
    },
    cameraButton: {
        position: 'absolute',
        bottom: 12,
        alignSelf: 'center',
    }
});

export default class DiscoverView extends React.Component {
    state = {
        isLoading: true,
        items: [],
    };
    async componentDidMount() {
        this.setState({
            isLoading: false,
            items: [
                { title: 'Коледната елха в центъра на Бургас', picUrl: 'none', likes: 123 },
                { title: 'Коледният мост в центъра на Бургас', picUrl: 'none', likes: 73 }
            ]
        });
        const location = await getLocation();
        const pics = await getModelPics({ location, maxdist: 500 /*meters*/, limit: 20, skip: 0 });
    }
    render() {
        if (this.state.isLoading) {
            return <Text>Loading...</Text>;
        }
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.itemContainer}>
                    <FlatList
                        data={this.state.items}
                        renderItem={({ item }) => <Pic key={item.picUrl} {...item} />}
                    />
                </ScrollView >
                <CameraButton style={styles.cameraButton} />
            </View>
        );
    }
}

class CameraButton extends React.Component {
    constructor(props) {
        super(props);
        this.styles = StyleSheet.create({
            button: {
                overflow: 'hidden'
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
            <Button style={this.styles.button} {...this.props}>
                <View style={this.styles.imageStyles}>
                    <Image source={require('../../img/camera.png')} />
                </View>
            </Button>
        );
    }
}

class Pic extends React.Component {
    constructor(props) {
        super(props);
        this.dims = Dimensions.get('window');
        this.styles = StyleSheet.create({
            container: {
                elevation: 3,
                borderRadius: 16,
                height: this.dims.width + 80,
                marginBottom: 24,
                overflow: 'hidden',
                width: this.dims.width - 24,
            },
            image: {
                width: this.dims.width - 24,
                height: this.dims.width,
            },
            titleText: {
                overflow: 'hidden',
                fontWeight: '400',
                fontSize: 18,
                color: '#000000CC',
                textAlign: 'center',
                padding: 8,
            },
            likesText: {
                fontWeight: '400',
                fontSize: 16,
                color: '#000000BB',
                textAlign: 'center',
            },
            likesButton: {
                padding: 4,
                borderLeftWidth: 1,
                borderLeftColor: 'lightgray',
            },
            likesFiller: {
                flex: 1,
            },
        });
    }
    render() {
        const { title, picUrl, likes } = this.props;
        const likesWidth = 72;
        const titleWidth = this.dims.width - 24;
        return (
            <View style={this.styles.container}>
                <View style={this.styles.image}>
                    <Image style={this.styles.image}
                        width={this.dims.width}
                        height={this.dims.width}
                        resizeMethod="scale"
                        source={require('../../img/placeholder1.jpg')} />
                </View>
                <View style={{ height: 48, flexDirection: 'column' }}>
                    <View style={{ width: titleWidth }}>
                        <Text style={this.styles.titleText}>{title}</Text>
                    </View>
                    <View style={{ width: likesWidth }}>
                        <Button style={this.styles.likesButton}><Text style={this.styles.likesText}>❤ {likes}</Text></Button>
                    </View>
                </View>
            </View>
        );
    }
}