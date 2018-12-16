import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, FlatList, Dimensions } from 'react-native';
import ImageCard from '../ImageCard';

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#EEEEEE',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default class TrendingView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageList: [
                {
                    title: 'cvfgbhngvfgh',
                    image: 'http://mining.free.bg/image.jpg',
                    large: true
                },
                {
                    title: 'cvfgbhngvfgh',
                    image: 'http://mining.free.bg/image.jpg'
                },
                {
                    title: 'cvfgbhngvfgh',
                    image: 'http://mining.free.bg/image.jpg',
                    large: true
                },
                {
                    title: 'cvfgbhngvfgh',
                    image: 'http://mining.free.bg/image.jpg'
                },
                {
                    title: 'cvfgbhngvfgh',
                    image: 'http://mining.free.bg/image.jpg'
                },
                {
                    title: 'cvfgbhngvfgh',
                    image: 'http://mining.free.bg/image.jpg',
                    large: true
                },
                {
                    title: 'cvfgbhngvfgh',
                    image: 'http://mining.free.bg/image.jpg',
                    large: true
                }
            ]
        }
    }

    getImageList = () => {
        let imageList = [[], []];
        let c = 0;
        for (let i = 0; i < this.state.imageList.length; i++) {
            imageList[c % 2].push(this.state.imageList[i]);
            if (i !== 0) if (this.state.imageList[i - 1].large) c++;
            c++;
        }
        return imageList;
    }

    render() {
        let imageList = this.getImageList();
        return (
            <View style={styles.page}>
                <ScrollView >
                    <View style={{ flex: 1, flexDirection: 'row', width: Dimensions.get('window').width }}>
                        <FlatList
                            data={imageList[0]}
                            //numColumns={2}
                            keyExtractor={(item, index) => index}
                            renderItem={(item) =>
                                <ImageCard
                                    img={item.item.image}
                                    text={item.item.title}
                                    large={item.item.large}
                                    left
                                //click={() => {this.props.loadPage()}}
                                />}
                        />
                        <FlatList
                            data={imageList[1]}
                            //numColumns={2}
                            keyExtractor={(item, index) => index}
                            renderItem={(item) =>
                                <ImageCard
                                    img={item.item.image}
                                    text={item.item.title}
                                    large={item.item.large}
                                //click={() => {this.props.loadPage()}}
                                />}
                        />
                    </View>
                </ScrollView>

            </View>
        );
    }
}