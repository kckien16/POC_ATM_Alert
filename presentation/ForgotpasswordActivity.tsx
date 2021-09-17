import React from 'react';
import {Text,View, StyleSheet,TextInput, TouchableOpacity, Image, ColorValue, StatusBar, SafeAreaView} from 'react-native';
import Colors from '../constants/Colors';
import ToolBar from '../components/UI/ToolBar';
import Input from '../components/UI/Input';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import InformationItem from '../components/atm/InformationItem';
import Fonts from '../constants/Fonts';

import { useTranslation } from 'react-i18next';


 const Forgot = ({navigation}) => {
    const{t,i18n}=useTranslation()
    const [text, setText] = React.useState('');
return(
    <SafeAreaView style = {styles.container}>

        <ToolBar>
          <TouchableOpacity
            style={styles.back}
            onPress={() => navigation.goBack()}>
            <FontAwesome name="angle-left" size={32} color={Colors.blue} />
          </TouchableOpacity>
          <Text style={styles.textToolBar}>{t('Forgot Password')}</Text>
        </ToolBar>
      <View>
          <Text style={styles.TextInfo}>{t('Enter the email address link to the account so I can resend the password')}</Text>
          <Input>
        <TextInput
         label="Email"
         value={text}
         onChangeText={text => setText(text)}
          placeholder={t('  Text@gmail.com')}
         />
         
      </Input>
      
      <TouchableOpacity
      onPress={() => navigation.navigate('Login')}
        style={styles.buttonLogin}>
        <Text style={styles.buttonLoginText}>{t('SEND')}</Text>
      </TouchableOpacity>
      </View>

 </SafeAreaView>
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
 })
 export default Forgot;