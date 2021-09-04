/**
 * @format
 */
 import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import CaiDat from './screens/CaiDat';
import ThongTinTB from './screens/ThongTinThietBi';

// import Splash from './screens/Splash'
// import Login from './screens/Login';
import {name as appName} from './app.json';

class Main extends Component {
    constructor(props) {
        super(props);
         this.state = { currentScreen: 'Splash' };
         console.log('start 3s') 
         setTimeout(() => {
            console.log('3s')
            this.setState({currentScreen: 'Login'})    
         }, 2000)
        
    }
    render(){
        const { currentScreen } = this.state
        let mainScreen  = currentScreen === 'Splash' ? <Splash /> : <Login />
        return mainScreen
    }
}
AppRegistry.registerComponent(appName, () => CaiDat);
