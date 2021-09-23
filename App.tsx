import 'react-native-gesture-handler';
import React from 'react';
import 'react-native-gesture-handler';
import Login from './presentation/LoginActivity';
import CaiDat from './presentation/SettingActivity';
import Lookup from './presentation/LookupActivity';
import Device from './presentation/DeviceActivity';
import ThongTinThietBi from './presentation/DeviceInformationActivity';
import traCuuTB from './presentation/DeviceLookupActivity';
import Forgot from './presentation/ForgotpasswordActivity'
import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';
import DrawerContent from './presentation/DrawerContent'
import { StyleSheet, Text } from 'react-native';
import Fonts from './constants/Fonts';

import {RootStackParamList} from './presentation/RootStackPrams';

 const Draw =createDrawerNavigator();
const Drawer =() =>{
  return(

         <Draw.Navigator 
         initialRouteName="Lookup" screenOptions={{headerShown: false}}
        drawerContent={props => <DrawerContent {...props} /> }
         >
         
           <Draw.Screen name ="Lookup" component={Lookup}></Draw.Screen>
           
        </Draw.Navigator>
  );
}
const Stack = createNativeStackNavigator<RootStackParamList>();
const App =()=>{
  return(
    <NavigationContainer>
         <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
           <Stack.Screen name ="Login" component={Login}  />
           <Stack.Screen name ="DrawerContent" component={DrawerContent}  />
           <Stack.Screen name ="Lookup" component={Drawer}  />
           <Stack.Screen name ="Device" component={Device}  />
           <Stack.Screen name ="ThongTinThietBi" component={ThongTinThietBi}  />
           <Stack.Screen name ="Forgot" component={Forgot}  />
           <Stack.Screen name ="CaiDat" component={CaiDat}  />
           <Stack.Screen name ="traCuuTB" component={traCuuTB}  />
        </Stack.Navigator>
       </NavigationContainer>
  
  

  );
}

const styles = StyleSheet.create({
  
})

export default App;
