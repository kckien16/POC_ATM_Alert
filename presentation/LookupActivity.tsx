import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Linking,
  Alert,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Input from '../components/UI/Input';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { useTranslation } from 'react-i18next';
import Colors from '../constants/Colors';
import ToolBar from '../components/UI/ToolBar';
import FONTS from '../constants/Fonts';
import RNPickerSelect from 'react-native-picker-select';
import InputText from '../components/UI/InputText';

import { Formik } from 'formik';
import * as yup from 'yup';
import Fonts from '../constants/Fonts';

const loginValidSchema = yup.object().shape({
  Imei: yup.string()
  .length(13)
  .required('Imei is required')
  
});


const lookup = ({ navigation }) => {
  const onSuccess = (e: { data: string }) => {
    Linking.openURL(e.data).catch(err => Alert.alert('An error occured', err));
  };

  const { t, i18n } = useTranslation();

  const [IMEI, setIMEI] = useState();
  const [Loai, setLoai] = useState();

  return (
    <Formik
      initialValues={{ Imei: ''}}
      validateOnMount={true}
      onSubmit={values => navigation.navigate("Lookup")}
      validationSchema={loginValidSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
    <SafeAreaView style={styles.container}>

      <QRCodeScanner
        cameraStyle={{ width: 200, height: 150, marginLeft: 50, marginTop: 20, marginBottom:20}}
        // containerStyle={{backgroundColor: '#FFF'}}
        onRead={onSuccess}
        reactivate={true}
        permissionDialogMessage="Need Pre"
        reactivateTimeout={10}
        showMarker={true}
        markerStyle={{ borderColor: "#FFF", borderRadius: 10, width: 100, height: 100 }}
      />
      {/* <ToolBar>
         <View style={{flex:1,marginVertical:20,flexDirection:'row',}}> 
          <TouchableOpacity style={styles.btnBack} >
            <FontAwesome name="bars" size={20} color={Colors.blue} />

            
          </TouchableOpacity>
          

          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text style={styles.testlookup}>{t('device-lookup')}</Text>
          </View>
          </View>
        </ToolBar> */}

      <View style={{ alignItems: 'center',marginTop:150, flexDirection:"column" }}>
        <Text style={styles.textQR}>Di chuyển camera đến vùng chứa mã QR để quét</Text>
        <Text style={styles.textor}>Hoặc</Text>
      </View>
      <View style={styles.inputIMEI}>
        <InputText
          placeholder="Nhập IMEI/Seri number"
          onChangeText={handleChange('Imei')}
            onBlur={handleBlur('Imei')}
            value={values.Imei}
            error={errors.Imei} />
            {(errors.Imei && touched.Imei)&&<Text style={styles.error}>{errors.Imei}</Text>}
        <View style={styles.dropdown}>
          <RNPickerSelect
            onValueChange={e => i18n.changeLanguage(e)}
            items={[
              { label: 'Thiết bị cảnh báo dành cho máy ATM', value: 'xxx' },
              { label: 'Thiết bị cảnh báo dành cho phòng giao dịch', value: 'xxx' },

            ]}

          >
            <Text style={styles.Textlookup}>  Loại thiết bị                                                              ▽
            </Text>
          </RNPickerSelect>
        </View>
      </View>
      <View style={{flex:1, alignItems:"center", width:"100%"}}>
        <TouchableOpacity
        style={styles.inputTC}
        onPress={() => {
          navigation.navigate('Device', {
            IMEI: IMEI,
            Loai: Loai,
          });
        }}>
        <Text style={{}}>{t('device')}</Text>
      </TouchableOpacity>
      </View>
      
    </SafeAreaView>
    )}</Formik>
  );
};
export default lookup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    width: '100%',
  },
  dropdown: {
    marginTop: 10,
    width: '90%',
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignContent:"center",

    backgroundColor: Colors.white,
  },
  testlookup: {
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 20,
    color: '#091F3A'

  },
  btnBack: {

    marginLeft: 26
  },
  textQR: {
    marginTop: -50,
    fontSize: 14,
    lineHeight: 20,

  },
  textor: {
    marginTop: 20,
    ...FONTS.h2
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: Colors.black,
  },
  buttonText: {
    fontSize: 21,
    // color: 'rgb(0,122,255)',
    marginTop: 20,
  },
  buttonTouchable: {
    padding: 16,
  },
  inputIMEI: {
    flex:1,
    backgroundColor: Colors.background,
    width: '100%',
    alignItems:"center"
  },
  textIMEI: {
    marginTop: 35,
    borderWidth: 1,
    width: '100%',
    height: 44,
    borderRadius: 10,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    color: Colors.grey,
  },
  textloaiTB: {
    padding: 10,
    marginTop: 20,
    borderWidth: 1,
    width: '100%',
    height: 44,
    borderRadius: 10,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    color: Colors.grey,
  },
  inputTC: {
    width: '90%',
    backgroundColor: Colors.blue,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  error:{
    ...Fonts.h8,
    marginTop:5,
    marginLeft:"10%"
  },
});
