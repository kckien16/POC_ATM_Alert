/**
 * @format
 */
 import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
// import Splash from './presentation/SplashActivity';
<<<<<<< HEAD





=======
>>>>>>> 7e0de3c30c72daa8553b517e0271b6afbe8beb33
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
