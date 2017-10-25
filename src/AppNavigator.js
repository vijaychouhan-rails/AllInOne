import React from 'react';
import { connect } from 'react-redux';
import {
  Dimensions,
  StyleSheet,
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import First from './containers/First';
import Second from './containers/Second';
import Third from './containers/Third';

const RouterWithRedux = connect()(Router);

const AppNavigator = () => (
  <RouterWithRedux>
    <Scene>
      <Scene
        key="first"
        component={First}
        initial
      />
      <Scene
        key="second"
        component={Second}
      />
      <Scene
        key="third"
        component={Third}
      />
    </Scene>
  </RouterWithRedux>
);

export default AppNavigator;
