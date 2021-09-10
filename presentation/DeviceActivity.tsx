

import { NavigationContainer } from '@react-navigation/native';
import React, { useState, FC } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Modal, Image, TextInput, FlatList, ScrollView, StatusBar, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { TT, ThongTin } from "../data/ThongTinTB";
import Card from '../components/UI/Card';
import ToolBar from '../components/UI/ToolBar';
import Button from '../components/UI/Button';

import SensorStatus from '../components/atm/SensorStatus';
import { Sensor, status } from '../data/Sensor_status';
import InformationItem from '../components/atm/InformationItem';
import Colors from '../constants/Colors';
import { useTranslation } from 'react-i18next';

const Device = ({ navigation }) => {
  const { t, i18n } = useTranslation()
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ToolBar style={styles.Toolbar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
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
                <InformationItem
                  imei={item.imei}
                  sim={item.sim}
                  loaiTB={item.loaiTB}
                  tenTB={item.tenTB}
                  diaChi={item.diaChi}
                  ngayKH={item.ngayKH}
                />
              )}
            />
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
  testlookup: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 15
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