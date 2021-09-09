import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Input from '../components/UI/Input';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { useTranslation } from 'react-i18next';


const lookup  = ({navigation}) => {
  onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      Alert.alert('An error occured', err)
    );
  };

  const{t,i18n} = useTranslation();

  const [IMEI, setIMEI] = useState('498142699');
  const [Loai, setLoai] = useState('Thiết bị ATM');

  return (
    <SafeAreaView style={styles.container}>
    <QRCodeScanner
        containerStyle={{marginBottom:'50%',backgroundColor:"#FFF"}}
        onRead={this.onSuccess}
        reactivate={true}
        permissionDialogMessage="Need Pre"
        reactivateTimeout={10}
        showMarker={true}
        markerStyle={{borderColor:"FFF",borderRadius:10}}
     
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />


   
      {/* <View style={{alignItems:'center', marginTop: 200}}>
        <Text>Hoặc</Text>
      </View> */}
      <View 
        style={styles.inputIMEI}
        >
        <TextInput
          style={styles.textIMEI}
          placeholder="Nhập IMEI/Seri number"
          value={IMEI}
          onChangeText={value => setIMEI(value)}></TextInput>
        <TextInput
          style={styles.textloaiTB}
          placeholder="Loại thiết bị"
          value={Loai}
          onChangeText={value => setLoai(value)}></TextInput>
      </View>
      
      <TouchableOpacity 
      style={styles.inputTC}
        onPress={() => {
          navigation.navigate('Device', {
            IMEI: IMEI,
            Loai: Loai,
          });
        }}>
        <Text 
        style={{
        }}>{t("login")}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default lookup;

const styles = StyleSheet.create({

  container:{
    flex: 1,
     backgroundColor: '#F0F8FF'

  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
    marginTop:20,

  },
  buttonTouchable: {
    padding: 16
  },
  inputIMEI:{
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  textIMEI:{
          
    marginTop: 35,
    borderWidth: 1,
    width: '100%',
    height: 50,
    borderRadius: 10,
    borderColor: '#ffff',
    backgroundColor: '#ffff',
    color: '#202d2c',
  },
  textloaiTB:{
    padding: 10,
    marginTop: 35,
    borderWidth: 1,
    width: '100%',
    height: 50,
    borderRadius: 10,
    borderColor: '#ffff',
    backgroundColor: '#ffff',
    color: '#202d2c',
  },
  inputTC:{
    width:'90%',
    backgroundColor:'#098cf7',
    height:50,
   borderRadius:20,
   alignItems:'center',
   marginLeft:20,
   justifyContent:'center'
  }

})