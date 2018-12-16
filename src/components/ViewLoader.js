import React, { Component } from 'react';
import TrendingView from './views/TrendingView';
import DiscoverView from './views/DiscoverView';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import { View, Image } from 'react-native';
import PlacesView from './views/PlacesView';
import RankView from './views/RankView';
import PointsOverlay from './PointsOverlay';

export default class ViewLoader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentView: 'DiscoverView'
        };
    }

    tabs = [
        {
            key: 'TrendingView',
            icon: require('../img/home_icon.png'),
            label: 'Начало',
            barColor: '#388E3C',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key: 'DiscoverView',
            icon: require('../img/find_icon.png'),
            label: 'Открий',
            barColor: '#2196f3',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key: 'MapView',
            icon: require('../img/map_icon.png'),
            label: 'Места',
            barColor: '#E53935',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key: 'RankView',
            icon: require('../img/leaderboard_icon.png'),
            label: 'Класация',
            barColor: '#661895',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        }
    ]

    viewList = {
        'TrendingView': TrendingView,
        'DiscoverView': DiscoverView,
        'MapView': PlacesView,
        'RankView': RankView
    }

    loadView = (view) => {
        this.setState({ currentPage: view });
    }

    renderIcon = icon => ({ isActive }) => (
        //<Icon size={24} color="white" name={icon} />
        <Image style={{ width: 24, height: 24 }} source={icon} />
    )

    renderTab = ({ tab, isActive }) => (
        <FullTab
            isActive={isActive}
            key={tab.key}
            label={tab.label}
            renderIcon={this.renderIcon(tab.icon)}
        />
    )

    render() {
        let props = {
            loadView: this.loadView
        }
        let CurrentView = this.viewList[this.state.currentView];
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <CurrentView {...props} />
                </View>
                <BottomNavigation
                    onTabPress={newTab => this.setState({ currentView: newTab.key })}
                    renderTab={this.renderTab}
                    tabs={this.tabs}
                />
            </View>
        );
    }
}


