import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';

import Colors from '../constants/Colors';
import Input from '../components/UI/Input';
import InputText from '../components/UI/InputText';
import { useTranslation } from 'react-i18next';

import { Formik } from 'formik';
import * as yup from 'yup';

import RNPickerSelect from 'react-native-picker-select';
import Fonts from '../constants/Fonts';

const loginValidSchema = yup.object().shape({
  email: yup.string().email('Please enter valid email')
  .required('Email address is required')
  .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Email is required!!!'),
  pass: yup.string().min(8, ({ min }) => `Please musty be at least ${min} character`)
    .required('Password is required')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});


const Login = () => {

  
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();


  return (
    <Formik
      initialValues={{ email: '', pass: '' }}
      validateOnMount={true}
      onSubmit={values => navigation.navigate("Lookup")}
      validationSchema={loginValidSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
        <View style={styles.container}>
          
          <View style={styles.logocontainer}>
            <Image style={styles.Logo} source={require('../images/youtube.png')} />
            <View
              style={{
                flex: 2,
                padding: 7,
                alignItems: 'flex-end',
              }}>
              <View style={styles.LanguageVN}>
                <RNPickerSelect
                  onValueChange={e => i18n.changeLanguage(e)}
                  items={[
                    { label: 'Vietnamese', value: 'vn' },
                    { label: 'English', value: 'en' },
                  ]}>
                  <Image
                    style={styles.imageVN}
                    source={require('../images/vietnam.jpg')}
                  />
                  <Text style={styles.TextVN}> VNM </Text>
                </RNPickerSelect>
              </View>
            </View>
          </View>
          <Text style={styles.text}>{t('login')}</Text>
          
          <InputText placeholder={t('email')}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            error={errors.email}
            >
          </InputText>
          {(errors.email && touched.email)&&<Text style={styles.error}>{errors.email}</Text>}

          <InputText placeholder={t('password')}
            onChangeText={handleChange('pass')}
            onBlur={handleBlur('pass')}
            value={values.pass}
            secureTextEntry
            error={errors.pass}
            >
          </InputText>
          {(errors.pass && touched.pass)&&<Text style={styles.error}>{errors.pass}</Text>}

          <TouchableOpacity>
            <Text style={styles.textForgot} onPress={() => navigation.navigate('Forgot')}>{t('forgot-password')}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonLoginText}>{t('signup')}</Text>
          </TouchableOpacity>
        </View>
      )}</Formik>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  text: {
   ...Fonts.h8,
    textAlign: 'center',
  marginTop:103,
  marginBottom:63,
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
    width: 16,
    height: 16,
  },
  TextVN: {
    alignSelf: 'center',
    display: 'flex',
   ...Fonts.h5,
  },
  LanguageVN: {
   justifyContent:'center',
    width: 68,
    height: 34,
    opacity: 0.8,
    borderColor: Colors.blue,
    borderWidth:0.6,
    borderRadius:4,
    flexDirection: 'row',
    alignItems:'center',
  },
  buttonLogin: {
    backgroundColor: Colors.blue,
    height: 44,
    marginTop: 62,
    borderRadius: 8,
    padding:12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 362,
    alignSelf: 'center',
  },
  buttonLoginText: {
    ...Fonts.h10,
   position:"relative"
  },
  textForgot: {
    ...Fonts.h9,
    textAlign: 'right',
    marginRight: 20,
    marginTop: 12,
    textDecorationLine: 'underline',
  },
  error:{
    ...Fonts.h8,
    marginTop:5,
    marginLeft:"10%"
  },
  errors:{
    borderWidth:1,
    borderColor:Colors.red
  }
});
export default Login;
