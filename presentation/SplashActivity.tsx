import React from 'react';
import {Text,View, StyleSheet, TextInput, TouchableOpacity, Image, ColorValue, StatusBar, SafeAreaView} from 'react-native';
import Colors from '../constants/Colors';

const Splash =()=>{
    return(
    <SafeAreaView style = {styles.container}>
        <View style={ styles.logocontainer}>
        <Image style={styles.image}
        
     source ={require('../images/youtube.png')}/>  
        </View>
     <View style = {styles.Textcontainer}>
     <Text>Version 1.0.0.2</Text>
     </View>
     </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
      flex:1
      
    },
    logocontainer:{
        alignSelf:'center',
        justifyContent:'center',
        flex:2
    },
    image:{
        width:60,
        height:60,
    },
    Textcontainer:{
        alignItems: 'center',flexDirection:'column-reverse',
        flex:1
    },
    
})
export default Splash;