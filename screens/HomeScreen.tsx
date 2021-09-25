import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown-v2';
import {View,Animated,Text,StyleSheet} from 'react-native'
const data = [{
  value: 'Banana',
}, {
  value: 'Mango',
}, {
  value: 'Pear',
}];
const Demo =()=> {
 
    

    return (
      <View style={{ flex:1,alignItems:'center',marginTop:100,}}>
      <Dropdown
     style={styles.text}
    
        data={data}
      />
      </View>
    );
  }
export default Demo;
const styles = StyleSheet.create({
    text: {
      backgroundColor:'#ffff',
      width: 362,
      height: 40,
      borderWidth:1,
      borderColor:'#2190CD',
      fontSize:10,
     
      
     
    },
    
})