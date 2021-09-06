import React,{useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, ColorValue, StatusBar, SafeAreaView,ToastAndroid } from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native';


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

      <View style={{ flexDirection: 'row', padding: 10 }}>
        <Image style={{ width: 40, height: 40 }}
          source={require('../images/vietnam.png')} />

        <View style={{
          flex: 2,
          padding: 7,
          alignItems: 'flex-end',
        }}>
          <View style={{
            width: 70,
            height: 32,
            borderColor: '#2190CD',
            borderWidth: 2,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
            <Image style={{ width: 27, height: 27 }}
             source={require('../images/vietnam.png')} 
              />

            <Text style={{ color: 'blue', alignSelf: 'center', fontWeight: 'bold', fontSize: 12 }}> VNM </Text>
          </View>
        </View>
      </View>
      <Text style={styles.text}>
        Login
      </Text>
      <TextInput style={styles.textIput}
      value={email}
        placeholder='Email đăng nhập'
        onChangeText={text => setemail(text)}
      >
      </TextInput>

      <TextInput style={styles.textIput}
      value={pass}
        placeholder='Mật khẩu'
        keyboardType='numeric'
        returnKeyType='next'
        autoFocus={true}
        onChangeText={text => setpass(text)}
      >
      </TextInput>

      <TouchableOpacity>
        <Text style={styles.textForgot}>Quên mật khẩu</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonLogin} 
     onPress={() => checkLogin(email , pass)}>
      
        <Text style={styles.buttonLoginText}>ĐĂNG NHẬP</Text>
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
