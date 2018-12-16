import React, { Component } from 'react';
import WelcomePage from './pages/WelcomePage';
import TrendingView from './views/TrendingView';
import ViewLoader from './ViewLoader';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

export default class PageLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'WelcomePage'
    };
  }

  pageList = {
    'WelcomePage': WelcomePage,
    'ViewLoader': ViewLoader,
    'LoginPage': LoginPage,
    'SignupPage': SignupPage
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


