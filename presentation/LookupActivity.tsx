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
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Input from '../components/UI/Input';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {useTranslation} from 'react-i18next';
import Colors from '../constants/Colors';
import ToolBar from '../components/UI/ToolBar';
import FONTS  from '../constants/Fonts';
import RNPickerSelect from 'react-native-picker-select';


const lookup = ({navigation}) => {
  const onSuccess = (e: {data: string}) => {
    Linking.openURL(e.data).catch(err => Alert.alert('An error occured', err));
  };

  const {t, i18n} = useTranslation();

  const [IMEI, setIMEI] = useState();
  const [Loai, setLoai] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <QRCodeScanner
        containerStyle={{backgroundColor: '#FFF'}}
        onRead={onSuccess}
        reactivate={true}
        permissionDialogMessage="Need Pre"
        reactivateTimeout={10}
        showMarker={true}
        markerStyle={{borderColor: 'FFF', borderRadius: 10}}
      />

      <View style={{alignItems: 'center', marginTop: '45%'}}>
        <Text>Hoặc</Text>
      </View>
      <View style={styles.inputIMEI}>
        <TextInput
          style={styles.textIMEI}
          placeholder="Nhập IMEI/Seri number"
          value={IMEI}
          onChangeText={value => setIMEI(value)}></TextInput>
         <View style={styles.dropdown}>
          <RNPickerSelect
          onValueChange={e => i18n.changeLanguage(e)}
          items={[
            {label: 'Thiết bị cảnh báo dành cho máy ATM', value: 'xxx'},
            {label: 'Thiết bị cảnh báo dành cho phòng giao dịch', value: 'xxx'},
            
          ]}
          
           >
          <Text style={styles.Textlookup}>  Loại thiết bị                                                              ▽
          </Text>
            </RNPickerSelect>
            </View>
      </View>

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
    </SafeAreaView>
  );
};
export default lookup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    width: '100%',
  },
  dropdown:{
marginTop:10,
width:'100%',
height:40,
borderRadius:8,
justifyContent:'center',

backgroundColor: Colors.white,
  },
  testlookup: {
    fontSize:16,
    fontWeight:'800',
    lineHeight:20,
    color:'#091F3A'
    
  },
  btnBack:{
    
    marginLeft:26
  },
  textQR:{
   fontSize:14,
   lineHeight:20,
   
 
  },
  textor:{
    marginTop:20,
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
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: Colors.background,
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
    borderRadius: 20,
    alignItems: 'center',
    marginLeft: 20,
    justifyContent: 'center',
  },
});
