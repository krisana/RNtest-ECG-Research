import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';

import HomeScreen from '../screens/HomeScreen';
import NewsScreen from '../screens/NewsScreen';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Scene hideNavBar key="root">
          <Scene key="home" component={HomeScreen} initial />
          <Scene key="detail" component={NewsScreen} />
        </Scene>
      </Router>
    );
  }
}