

import { NavigationContainer } from '@react-navigation/native';
import React,{useState, useEffect} from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Modal, Image, TextInput, FlatList, ScrollView, StatusBar, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { TT, ThongTin } from "../data/ThongTinTB";
import Card from '../components/UI/Card';
import ToolBar from '../components/UI/ToolBar';
import Button from '../components/UI/Button';

import SensorStatus from '../components/atm/SensorStatus';
import { Sensor, status } from '../data/Sensor_status';
import InformationLookupItem from '../components/atm/InformationLookupItem';
import Colors from '../constants/Colors';
import { useTranslation } from 'react-i18next';

import FONTS  from '../constants/Fonts';



const Device = ({ navigation }) => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      date + '/' + month + '/' + year 
      + ' ' + hours + ':' + min + ':' + sec
    );
  }, []);
  const { t, i18n } = useTranslation()
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ToolBar style={styles.Toolbar}>
          <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
            <FontAwesome name="angle-left" size={30} color={Colors.blue} />
          </TouchableOpacity>
          <Text style={styles.testlookup}>{t('device-lookup')}</Text>
          <TouchableOpacity
            style={{ flex: 3, alignItems: 'flex-end', marginRight: 20 }}
            onPress={() => navigation.navigate('ThongTinThietBi')}>
            <FontAwesome name="cog" size={26} color={Colors.blue} />
          </TouchableOpacity>
        </ToolBar>

        <View style={styles.information}>
          <Text style={styles.testinformation}>{t('atm-information')}</Text>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Card>
            <FlatList
              data={ThongTin}
              renderItem={({ item }) => (
                <InformationLookupItem
                  imei={item.imei}
                  sim={item.sim}
                  tinhTrang={item.tinhTrang}
                  loaiTB={item.loaiTB}
                  tenTB={item.tenTB}
                  diaChi={item.diaChi}
                  ngayKH={item.ngayKH}
                  ketnoi={item.ketnoi}
                  
                />
                
              )}
            />
        <View style={{flexDirection:'row',width:"100%"}}> 
          <Text style={{color:'#2190CD',fontSize:16}}>{t('query-time')}:</Text>
        <Text style={{marginLeft:'15%',color:'#2190CD',fontSize:16}}>
          {currentDate}
        </Text>
        </View>
          </Card>
        </View>

        <View style={{ flex: 1, marginTop: 20, marginLeft: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: '600' }}>
            {t("sensor-status")}
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Card>
            <FlatList
              data={Sensor}
              renderItem={({ item }) => (
                <SensorStatus
                  nhiet={item.nhiet}
                  rung={item.rung}
                  cuatrenATM={item.cuatrenATM}
                  cuaketATM={item.cuaketATM}
                  cuangoaiATM={item.cuangoaiATM}
                  duPhong={item.duPhong}
                  dichChuyen={item.dichChuyen}
                  roDien={item.roDien}
                  khoi={item.khoi}
                  pinDuPhong={item.pinDuPhong}
                  dienAp={item.dienAp}
                  baoHieu={item.baoHieu}
                />
              )}
            />
          </Card>
        </View>

        <View
          style={styles.containerfooter}>
          <View
            style={styles.fontwarning}>
            <TouchableOpacity
              style={styles.inputwarning}>
              <Text
                style={styles.textwarning}>
               {t('warning')}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={styles.update}>
            <TouchableOpacity
              style={styles.inputupdate}
              onPress={() => navigation.navigate('traCuuTB')}>
              <Text
                style={styles.textupdate}>
               {t('update')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );

}
export default Device;
const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  Toolbar:{
   justifyContent:'center',
   alignItems:'center',
  },
  btnBack:{
    height:32,
    marginLeft:26
  },
  testlookup: {
    fontSize:16,
    marginLeft: 10,
    ...FONTS.h2
  },
  information: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20
  },
  testinformation: {
    fontSize: 16,
    fontWeight: '600'
  },
  status: {
    flex: 1,
    margin: 20,
  },
  teststatus: {
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    flex: 1,
    width: "100%",
    flexDirection: 'row',
    padding: 15,
    marginBottom: 60
  },
  btnfooter: {
    width: "50%", flex: 1,
    margin: 10,
  },
 
  

  containerfooter: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    padding: 15,
    marginBottom: 60,
  },
  fontwarning: {
    width: '50%',
    flex: 1,
    margin: 10,
  },
  inputwarning: {
    borderColor: Colors.red,
    borderStyle: 'solid',
    borderWidth: 1,
    height: 40,
    backgroundColor: '#FFFF',
    borderRadius: 8,
    justifyContent: 'center',
  },
  textwarning: {
    fontSize: 16,
    textAlign: 'center',
    color: Colors.red,
    fontWeight: '500',
  },
  update: {
    width: '50%',
    flex: 1,
    margin: 10,
    backgroundColor: Colors.blue,
    borderRadius: 8,
  },
  inputupdate: {
    height: 40,
    borderRadius: 8,
    borderColor: Colors.blue,
    justifyContent: 'center',
    
    
  },
  textupdate: {
    fontSize: 16,
    textAlign: 'center',
    color: Colors.white,
    borderColor: Colors.blue,
    fontWeight: '500',
  }

})