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
                    points: 5
                },
                {
                    fullName: 'dfgfvgbf',
                    points: 9
                },
                {
                    fullName: 'fgfdefgbhg',
                    points: 8
                },
                {
                    fullName: 'frtghgfgbhn',
                    points: 2
                },
                {
                    fullName: 'dfgfgh',
                    points: 58
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
                                //click={() => {this.props.loadPage()}}
                                />}
                        />
                    </View>
                </ScrollView>

            </View>
        );
    }
}