import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import WelcomePage from './pages/WelcomePage';

export default class PageLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'WelcomePage'
    };
  }

  pageList = {
    'WelcomePage': WelcomePage
  }

  loadPage = (page) => {
    this.setState({ currentPage: page });
  }

  render() {
    let props = {
      loadPage: this.loadPage
    }
    let Page = this.pageList[this.state.currentPage];
    return (
      <Page {...props} />
    );
  }
}


