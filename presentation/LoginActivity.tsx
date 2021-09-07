import React,{useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, ColorValue, StatusBar, SafeAreaView,ToastAndroid } from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native';


import Input from '../components/UI/Input';


const Login = () => {
  const [email, setemail] = useState();
  const [pass, setpass] = useState();
  const navigation = useNavigation();

  const checkLogin = (email:string , pass: string) => {
    if (email == '1' && pass == '1') {
      navigation.navigate("Lookup");
      ToastAndroid.show('Login success', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Xem lai email or pass', ToastAndroid.SHORT);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logocontainer}>
        <Image style={styles.Logo}
          source={require('../images/youtube.png')} />

        <View style={{
          flex: 2,
          padding: 7,
          alignItems: 'flex-end',
        }}>
          <View style={styles.LanguageVN}>
            <Image style={styles.imageVN}
             source={require('../images/vietnam.png')} />
            <Text style={styles.TextVN}> VNM </Text>
          </View>
        </View>

      </View>
      <Text style={styles.text}>
        Đăng nhập
      </Text>

      <Input>
      <TextInput 
      value={email}
        placeholder='  Email đăng nhập'
        onChangeText={text => setemail(text)}>
      </TextInput>
      </Input>

      <Input>
      <TextInput 
      value={pass}
        placeholder='  Mật khẩu'
        keyboardType='numeric'
        returnKeyType='next'
        autoFocus={true}
        onChangeText={text => setpass(text)}>
      </TextInput>
      </Input>

      <TouchableOpacity>
        <Text style={styles.textForgot}>Quên mật khẩu</Text>
      </TouchableOpacity>
       
     <TouchableOpacity style={styles.buttonLogin} 
     onPress={() => checkLogin(email , pass)}>
        <Text style={styles.buttonLoginText}>Đăng nhập</Text>
      </TouchableOpacity>
     
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF5FA',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop:100,
    paddingBottom:40,
  },
  logocontainer:{
    flexDirection: 'row',
     padding: 10 ,
  },
  Logo:{
   width:40,
   height:40,
  },
  imageVN:{
  width:25,
  height:25,
  },
  TextVN:{
     color: 'blue', 
     alignSelf: 'center', 
     fontWeight: 'bold', 
     fontSize: 10 ,
  },
  LanguageVN:{
  
      width: 68,
      height: 30,
      borderColor: '#2190CD',
      borderWidth: 0.6,
      flexDirection: 'row',
      justifyContent: 'center',
  },
  buttonLogin: {
    backgroundColor: '#4493e2',
    height: 40,
    marginTop: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 340,
    alignSelf: 'center',
  },
  buttonLoginText: {
    color:'#FFFF',
    fontWeight: 'bold',
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
