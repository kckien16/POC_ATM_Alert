import React from 'react';
import {Text,View, StyleSheet,TextInput, TouchableOpacity, Image, ColorValue, StatusBar, SafeAreaView} from 'react-native';
import Colors from '../constants/Colors';
import ToolBar from '../components/UI/ToolBar';
import Input from '../components/UI/Input';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import InformationItem from '../components/atm/InformationItem';
import Fonts from '../constants/Fonts';

import { Formik } from 'formik';
import * as yup from 'yup';

import { useTranslation } from 'react-i18next';
import InputText from '../components/UI/InputText';
import { useNavigation } from '@react-navigation/core';

const loginValidSchema = yup.object().shape({
  email: yup.string().email('Please enter valid email')
  .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Email is required!!!'),
});


 const Forgot = () => {
  const navigation = useNavigation();
    const{t,i18n}=useTranslation()
    const [text, setText] = React.useState('');
return(
  <Formik
      initialValues={{ email: ''}}
      validateOnMount={true}
      onSubmit={values => navigation.navigate("Login")}
      validationSchema={loginValidSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
    <SafeAreaView style = {styles.container}>

        <ToolBar>
          <TouchableOpacity
            style={styles.back}
            onPress={()=> navigation.goBack()}>
            <FontAwesome name="angle-left" size={32} color={Colors.blue} />
          </TouchableOpacity>
          <Text style={styles.textToolBar}>{t('Forgot Password')}</Text>
        </ToolBar>
      <View>
          <Text style={styles.TextInfo}>{t('Enter the email address link to the account so I can resend the password')}</Text>
          <InputText placeholder={t('email')}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            error={errors.email}
            >
          </InputText>
          {(errors.email && touched.email)&&<Text style={styles.error}>{errors.email}</Text>}
      
      <TouchableOpacity
      onPress={handleSubmit}
        style={styles.buttonLogin}>
        <Text style={styles.buttonLoginText}>{t('SEND')}</Text>
      </TouchableOpacity>
      </View>

 </SafeAreaView>
 )}</Formik>
)
}
 const styles = StyleSheet.create({
     container:{
         flex:1,
backgroundColor:Colors.whitee
     },
     TextInfo:{
       marginLeft:15,
        marginTop:103,
     ...Fonts.h11,
     },
     back: {
        height:32,
        marginTop:18,
        marginLeft:26
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
     textToolBar: {
        marginTop:25,
        marginLeft:10,
        marginBottom:12,
        alignItems:"center",
      },
      error:{
        ...Fonts.h8,
        marginTop:5,
        marginLeft:"10%"
      },
 })
 export default Forgot;