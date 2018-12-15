import React, { Component } from 'react';
import TrendingView from './views/TrendingView';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import { View, Image } from 'react-native';

export default class ViewLoader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentView: 'trendingView'
        };
    }

    tabs = [
        {
            key: 'trendingView',
            icon: require('../img/home_icon.png'),
            label: 'Начало',
            barColor: '#388E3C',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        }
    ]

    viewList = {
        'trendingView': TrendingView
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


