import React, {useState} from 'react';
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
import FontAwesome2 from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Input from '../components/UI/Input';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {useTranslation} from 'react-i18next';
import Colors from '../constants/Colors';
import ToolBar from '../components/UI/ToolBar';
import FONTS from '../constants/Fonts';
import RNPickerSelect from 'react-native-picker-select';
import InputText from '../components/UI/InputText';

// import { RNCamera } from 'react-native-camera';
import {Formik} from 'formik';
import * as yup from 'yup';
import Fonts from '../constants/Fonts';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './RootStackPrams';
import SelectDropdown from 'react-native-select-dropdown';

const loginValidSchema = yup.object().shape({
  Imei: yup.string().length(13),
});
type authScreenProp = StackNavigationProp<RootStackParamList, 'Device'>;

const lookup = () => {
  const status = ['Thiết bị cảnh báo dành cho máy ATM', 'Thiết bị cảnh báo dành cho phòng giao dịch'];

  const navigation = useNavigation<authScreenProp>();
  const onSuccess = (e: {data: string}) => {
    Linking.openURL(e.data).catch(err => Alert.alert('An error occured', err));
  };

  const {t, i18n} = useTranslation();

  const [IMEI, setIMEI] = useState();
  const [Loai, setLoai] = useState();

  return (
    <Formik
      initialValues={{Imei: ''}}
      validateOnMount={true}
      onSubmit={values => navigation.navigate('Lookup')}
      validationSchema={loginValidSchema}>
      {({handleChange, handleBlur, handleSubmit, values, touched, errors}) => (
        <SafeAreaView style={styles.container}>
          <ToolBar>
            <View style={{flex: 1, marginVertical: 20, flexDirection: 'row'}}>
              <TouchableOpacity style={styles.btnBack}>
                <FontAwesome name="bars" size={20} color={Colors.blue} />
              </TouchableOpacity>

              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.testlookup}>{t('device-lookup')}</Text>
              </View>
            </View>
          </ToolBar>
          <View
            style={{
              overflow: 'hidden',
              width: '90%',
              backgroundColor: '#000',
              height: 219,
              borderRadius: 15,
              marginLeft: 22,
              marginVertical: 25,
            }}>
            <QRCodeScanner
              cameraStyle={{
                flex: 1,
                marginBottom: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              // containerStyle={{backgroundColor: '#000F',width:'90%',height:}}
              onRead={onSuccess}
              // flashMode={RNCamera.Constants.FlashMode.torch}
              // topViewStyle={{  marginBottom:20}}
              reactivate={true}
              // cameraProps={{}}
              fadeIn={true}
              permissionDialogMessage="Need Pre"
              reactivateTimeout={10}
              showMarker={true}
              markerStyle={{
                borderColor: '#FFF',
                borderRadius: 10,
                width: 100,
                height: 100,
                marginTop: 30,
              }}>
              {/* <BarcodeMask width={300} height={100} edgeBorderWidth={1} /> */}
            </QRCodeScanner>
          </View>
          <View style={{alignItems: 'center', marginTop: 30}}>
            <Text style={styles.textQR}>
              Di chuyển camera đến vùng chứa mã QR để quét
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.textor}>Hoặc</Text>
          </View>

          <View style={styles.inputIMEI}>
            <InputText
              placeholder="Nhập IMEI/Seri number"
              onChangeText={handleChange('Imei')}
              onBlur={handleBlur('Imei')}
              value={values.Imei}
              error={errors.Imei}
            />
            {errors.Imei && touched.Imei && (
              <Text style={styles.error}>{errors.Imei}</Text>
            )}

            <View style={{marginTop: 10, flexDirection: 'row'}}>
              <View style={{flex: 1, width: '100%', alignItems: 'center', justifyContent:"center"}}>
                <SelectDropdown
                  buttonStyle={styles.drop}
                  rowStyle={styles.row}
                  buttonTextStyle={styles.rowText}
                  rowTextStyle={styles.rowText}
                  data={status}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    return item;
                  }}
                />
                <View style={{flex:1, position:"absolute", alignSelf:"flex-end", marginRight:"10%"}}>
                  <FontAwesome name="angle-down" size={24} color={Colors.blue} />
                </View>
                  
                
              </View>
            </View>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.inputTC}
              onPress={() => navigation.navigate('Device')}>
              <Text style={styles.fontBtn}>{t('device')}</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )}
    </Formik>
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
    borderColor: Colors.blue,
    borderWidth: 1,
    backgroundColor: Colors.white,
    flexDirection: 'row',
  },
  drop: {
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 8,
    height: 44,
  },
  row:{
    backgroundColor: '#fff',
  },
  rowText:{
    textAlign:"left",
    fontSize: 16, 
    fontWeight: 'normal', 
    fontFamily:"Mulish", 
    fontStyle:"normal",
    color: "#091F3A",
    lineHeight:20
  },
  btnText:{
    textAlign:"left",
    fontSize: 16, 
    fontWeight: 'normal', 
    fontFamily:"Mulish", 
    fontStyle:"normal",
    color: "#ACBCD1",
    lineHeight:24
  },

  testlookup: {
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 20,
    color: '#091F3A',
  },

  icon: {
    backgroundColor: '#000',
  },

  btnBack: {
    marginLeft: 26,
  },
  textQR: {
    marginTop: -50,
    fontSize: 14,
    lineHeight: 20,
  },
  textor: {
    marginTop: 20,
    ...FONTS.h4,
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
    backgroundColor: Colors.background,
    alignItems: 'center',
  },
  textIMEI: {
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
    marginTop: 40,
  },
  fontBtn: {
    ...FONTS.h1,
  },
  error: {
    ...Fonts.h8,
    marginTop: 5,
    marginLeft: '10%',
  },
});
