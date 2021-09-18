import { NavigationContainer } from '@react-navigation/native';
import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacityBase } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



const DrawerContent=({navigation})=>{
   
        return(
            <View style={styles.container}>
                <View style={{flex:1,justifyContent:'center'}}>
                    <TouchableOpacity style={{width:100,height:50,backgroundColor:'#1231',justifyContent:'center',alignItems:'center'}}
                    onPress={()=>navigation.navigate('Login')}>
                        <Text>Đăng Xuất</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    

}

export default DrawerContent;
const styles = StyleSheet.create({
  container: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#fff'
  }
});
