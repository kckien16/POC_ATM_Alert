/**
 * @format
 */
 import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
<<<<<<< HEAD
import App from './App';
// import Splash from './presentation/SplashActivity';
=======
import App from './App'


>>>>>>> da801b9c82beefa860c104725a3554b8ca9c9eed
import {name as appName} from './app.json';

// class Main extends Component {
//     constructor(props) {
//         super(props);
//          this.state = { currentScreen: 'Splash' };
//          console.log('start 3s') 
//          setTimeout(() => {
//             console.log('3s')
//             this.setState({currentScreen: 'Login'})    
//          }, 2000)
        
//     }
//     render(){
//         const { currentScreen } = this.state
//         let mainScreen  = currentScreen === 'Splash' ? <Splash /> : <Login />
//         return mainScreen
//     }
// }
AppRegistry.registerComponent(appName, () => App );
