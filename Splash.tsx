import React, { Component } from 'react';
import {Text,View, StyleSheet, TextInput, TouchableOpacity, Image, ColorValue, StatusBar, SafeAreaView} from 'react-native';

const App1 =()=>{
    return(
    <SafeAreaView style = {styles.container}>
        <View style={{alignSelf:'center',justifyContent:'center',flex:2}}>
        <Image style={{width:60, height:60}}
     source ={require('./images/youtube.png')}/>  
        </View>
     <View style = {{alignItems: 'center',flexDirection:'column-reverse',flex:1}}>
     <Text>Version 1.0.0.2</Text>

     </View>
     </SafeAreaView>
     
    )
}
const styles = StyleSheet.create({
    container: {
       backgroundColor: 'white',
      flex:1
      
    },
})
export default App1;