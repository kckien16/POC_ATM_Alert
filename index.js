/**
 * @format
 */
 import React, { Component } from 'react';
 import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import Home from './screens/HomeScreen'
import App from './App';
import i18n from './language/i18n';
console.disableYellowBox = true;

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App );
