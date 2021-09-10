import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, ColorValue, StatusBar, SafeAreaView, ToastAndroid, Alert } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';
import SwitchSelector from 'react-native-switch-selector'

import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import Colors from '../constants/Colors';
import Input from '../components/UI/Input';
import { useTranslation } from 'react-i18next';

const options = [
  { label: 'English', value: 'en' },
  { label: 'VietNamese', value: 'vn' },
]

const Login = () => {
  const [email, setemail] = useState();
  const [pass, setpass] = useState();
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const checkLogin = (email: string, pass: string) => {
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
            <TouchableOpacity>
              <SwitchSelector options={options}
                hasPadding
                initial={0}
                onPress={(e) => {
                  i18n.changeLanguage(e);
                }} />
              <Image style={styles.imageVN}
                source={require('../images/vietnam.png')} />
              <Text style={styles.TextVN}> VNM </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text style={styles.text}>
        {t("login")}
      </Text>
      <Input>
        <TextInput
          value={email}
          placeholder={t('email')}
          onChangeText={text => setemail(text)}>
        </TextInput>
      </Input>

      <Input>
        <TextInput
          value={pass}
          placeholder={t("password")}
          keyboardType='numeric'
          returnKeyType='next'
          autoFocus={true}
          onChangeText={text => setpass(text)}>
        </TextInput>
      </Input>

      <TouchableOpacity>
        <Text style={styles.textForgot}>{t("forgot-password")}</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.buttonLogin}
        onPress={() => checkLogin(email, pass)}>

        <Text style={styles.buttonLoginText}>{t("signup")}</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background

  },

  text: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 100,
    paddingBottom: 40,
  },
  logocontainer: {
    flexDirection: 'row',
    padding: 10,
  },
  Logo: {
    width: 40,
    height: 40,
  },
  imageVN: {
    width: 25,
    height: 25,
  },
  TextVN: {
    color: 'blue',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 10,
  },
  LanguageVN: {

    width: 68,
    height: 30,
    borderColor: '#EAF5FA',
    borderWidth: 0.6,
    flexDirection: 'row',
    justifyContent: 'center',

  },
  buttonLogin: {
    backgroundColor: Colors.blue,
    height: 44,
    marginTop: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 362,
    alignSelf: 'center',

  },
  buttonLoginText: {
    color: Colors.white,
    fontWeight: 'bold',
  },

  textForgot: {
    color: Colors.blue,
    textAlign: 'right',
    marginRight: 20,
    marginTop: 20,
    textDecorationLine: 'underline',
  }
})
export default Login;
