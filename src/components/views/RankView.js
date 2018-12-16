import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, FlatList, Dimensions } from 'react-native';
import ImageCard from '../ImageCard';
import UserCard from '../UserCard';

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#EEEEEE',
        flex: 1,
        justifyContent: 'space-between'
    },
    scroll: {
        width: Dimensions.get('window').width
    },
    listContainer: {
        alignItems: 'center'
    }
});

export default class RankView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: [
                {
                    fullName: 'cvfgbhngvfgh',
                    points: 59,
                    place: 1
                },
                {
                    fullName: 'dfgfvgbf',
                    points: 58,
                    place: 2
                },
                {
                    fullName: 'fgfdefgbhg',
                    points: 25,
                    place: 3
                },
                {
                    fullName: 'frtghgfgbhn',
                    points: 4,
                    place: 4
                },
                {
                    fullName: 'dfgfgh',
                    points: 1,
                    place: 5
                }
            ]
        }
    }

    render() {
        return (
            <View style={styles.page}>
                <ScrollView style={styles.scroll} >
                    <View style={styles.listContainer}>
                        <FlatList
                            data={this.state.userList}
                            //numColumns={2}
                            keyExtractor={(item, index) => index}
                            renderItem={(item) =>
                                <UserCard
                                    fullName={item.item.fullName}
                                    points={item.item.points}
                                    place={item.item.place}
                                //click={() => {this.props.loadPage()}}
                                />}
                        />
                    </View>
                </ScrollView>

            </View>
        );
    }
}