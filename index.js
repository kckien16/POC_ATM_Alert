/**
 * @format
 */
 import React, { Component } from 'react';
import {AppRegistry} from 'react-native';

import App from './App';
import i18n from './language/i18n';

// import Splash from './presentation/SplashActivity';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App );
