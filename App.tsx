import 'react-native-gesture-handler';
import React from 'react';

import Login from './screens/Login';
import CaiDat from './screens//CaiDat';
import Lookup from './screens/Lookup';
import Device from './screens/Device';
import ThongTinThietBi from './screens/ThongTinThietBi';
import traCuuTB from './screens/traCuuTB';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App =()=>{
  return(
    <NavigationContainer>
         <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
         
           <Stack.Screen name ="Login" component={Login}  />
           <Stack.Screen name ="Lookup" component={Lookup}  />
           <Stack.Screen name ="Device" component={Device}  />
           <Stack.Screen name ="ThongTinThietBi" component={ThongTinThietBi}  />
  
           <Stack.Screen name ="CaiDat" component={CaiDat}  />
           <Stack.Screen name ="traCuuTB" component={traCuuTB}  />
  
  
        </Stack.Navigator>
  
       </NavigationContainer>
  
  
  );
   }

export default App;