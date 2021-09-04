import React, { Component } from 'react';
import {Text,View, StyleSheet, TextInput, TouchableOpacity, Image, ColorValue, StatusBar, SafeAreaView} from 'react-native';

const Login =() => {
  return(
    <SafeAreaView style = {styles.container}>
    
      <View style = {{flexDirection: 'row',padding:10}}>
      <Image style = {{width: 40, height: 40}}
      source ={require('./images/youtube.png')}>
        </Image>
        
        <View style = {{
          flex:2,
          padding:7,
          alignItems:'flex-end',
         }}>
           <View style={{ width: 70, 
            height: 32, 
            borderColor: '#2190CD', 
            borderWidth: 2,  
            flexDirection: 'row',
            justifyContent:'center' ,
            }}>
        <Image style = {{width:27, height:27}}
      source ={require('./images/vietnam.png')} />
       
        <Text style = {{color: 'blue', alignSelf: 'center', fontWeight:'bold',fontSize:12}}> VNM </Text>
        </View>
        </View>
        </View>

      <Text style = {styles.text}>
        Đăng nhập
      </Text>
      <TextInput style = {styles.textIput}
        placeholder = '       Email đăng nhập'
      >
      </TextInput>
      
      <TextInput style = {styles.textIput}
        placeholder = '       Mật khẩu'
        keyboardType = 'numeric'
        returnKeyType='next'
        secureTextEntry= {true}
        autoFocus={true}
      >
      </TextInput>

      <TouchableOpacity>
        <Text style = {styles.textForgot}>Quên mật khẩu</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.buttonLogin}>
        <Text style = {styles.buttonLoginText}>ĐĂNG NHẬP</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#EAF5FA',
  },
  
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 180,
  },
  buttonLogin: {
    backgroundColor: '#4493e2',
    height: 45,
    marginTop: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 310,
    alignSelf: 'center',
    //marginTop: 50,
  },
  buttonLoginText: {
    color: '#f4f6f7',
    fontWeight: 'bold',
  },
  textIput: {
    marginTop: 30,
    backgroundColor: '#f4f6f7',
    borderRadius: 10,
    alignSelf: 'center',
    width: 330,
  },
  textForgot: {
    color: '#0a83fc',
    textAlign: 'right',
    marginRight: 20,
    marginTop: 20,
    textDecorationLine: 'underline',
  }
})
export default Login;
