/**
 * @format
 */
 import React, { Component } from 'react';
 import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';

import App from './App';
import i18n from './language/i18n';

import Home from './screens/HomeScreen'
// import Splash from './presentation/SplashActivity';
console.disableYellowBox = true;
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App );
