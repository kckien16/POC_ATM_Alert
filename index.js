/**
 * @format
 */
 import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import App from './App';

import Splash from './presentation/SplashActivity';
<<<<<<< HEAD


=======
=======
<<<<<<< HEAD
// import Splash from './presentation/SplashActivity';
=======

>>>>>>> 79aae23567d7436fc5429d37973a03c5e555870a
>>>>>>> fde2d9c8354e53cdd0984774c4b321fc32210111
>>>>>>> 2bc856ea8d0f32c3f32cb82cf5b56b1d8c013f88
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
AppRegistry.registerComponent(appName, () =>App );
