

import { NavigationContainer } from '@react-navigation/native';
import React, { useState, FC, useRef, createRef, useEffect } from 'react';
import { View, Alert, Text, SafeAreaView, TouchableOpacity, Modal, Image, TextInput, FlatList, ScrollView, StatusBar, StyleSheet, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { TT, ThongTin } from "../data/ThongTinTB";
import Card from '../components/UI/Card';
import ToolBar from '../components/UI/ToolBar';
import Button from '../components/UI/Button';
;
import SensorStatus from '../components/atm/SensorStatus';
import { Sensor, status } from '../data/Sensor_status';
import InformationLookupItem from '../components/atm/InformationLookupItem';
import Colors from '../constants/Colors';
import { useTranslation } from 'react-i18next';
import RBSheet from "react-native-raw-bottom-sheet";
import { SIZES } from '../constants/theme'
import FONTS from '../constants/Fonts';


const actionSheetRef = createRef();
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
  const [IMEI, setIMEI] = useState();
  const [Loai, setLoai] = useState();


  const refRBSheet = useRef();
  const [activeInput, setActiveInput] = useState(null);
  return (

    <View style={styles.container}>
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
            <View style={{ flexDirection: 'row', }}>
              <Text style={{ color: '#347AFF', fontSize: 16, fontWeight: 'bold' }}>{t('query-time')}:</Text>
              <Text style={{ marginLeft: '15%', color: '#2190CD', fontSize: 16, }}>
                {currentDate}
              </Text>
            </View>
          </Card>
        </View>

        <View style={{ flex: 1, marginTop: 20, marginLeft: 22 }}>
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
              onPress={() => refRBSheet.current.open()}
              style={styles.inputupdate}>
              <Text
                style={styles.textupdate}>
                {t('update')}
              </Text>


            </TouchableOpacity>

            <RBSheet
              ref={refRBSheet}
              height={600}
              closeOnDragDown={true}
              openDuration={250}
              dragFromTopOnly={false}
              closeOnPressMask={false}

              customStyles={{

                wrapper: {
                  backgroundColor: 'rgba(0,0,0,0.3)',
                },
                draggableIcon: {
                  backgroundColor: "#000",
                  marginTop:'10%'
                },

                container: {

                  justifyContent: "center",
                  backgroundColor: '#DBE8F5',
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,

                  alignItems: "center",



                }
              }}

            >
              <View style={styles.containerBottomSheet}>
                <View
                  style={styles.bottomSheet}>
                  <TouchableOpacity
                    onPress={() => refRBSheet.current.close()}
                    style={styles.bottomSheetExit}>
                    <Text
                      style={styles.textbottomSheetExit}>
                      {t('exit')}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View></View>

                <View
                  style={styles.updateBottomSheet}>
                  <TouchableOpacity


                    style={styles.bottomSheetSave}>
                    <Text
                      style={styles.textbottomSheetSave}>
                      {t('save')}
                    </Text>
                  </TouchableOpacity>
                </View>


              </View>
              <View  >
                <View style={styles.viewItem}>
                  <Card style={styles.card}>
                    <FlatList data={ThongTin}
                      renderItem={({ item }) => (
                        <View>
                          <View style={styles.flexDirection}>
                            <Text style={styles.textFrame1}>{t('imei')}</Text>
                            <Text style={styles.textContentIMEI}>{item.imei}</Text>
                          </View>
                          <View style={styles.flexDirection}>
                            <Text style={styles.textFrame1}>{t('type-of-device')}</Text>
                            <Text style={styles.textContentLTB}>{item.loaiTB}</Text>

                          </View>

                          <View style={styles.flexDirection}>
                            <Text style={styles.textFrame1}>{t('activation-date')}</Text>
                            <Text style={styles.textContentNKH}>{item.ngayKH}</Text>

                          </View>

                        </View>

                      )}>


                    </FlatList>
                  </Card>


                </View>

              </View>

              <View style={{
                position: 'relative',
                justifyContent: 'center'
              }}>
                <Text style={styles.textFrame4}>{t('device-name')}</Text>

                <TextInput
                  placeholder="ATM - 1208323582"

                  onFocus={() => setActiveInput('device-name')}

                  style={{

                    width: 362,
                    height: 44,
                    padding: 8,

                    backgroundColor: Colors.white,
                    borderRadius: 8,


                    paddingVertical: 8,
                    borderWidth: 2,
                    borderColor: activeInput == "device-name" ? Colors.blue : Colors.white
                  }} />
              </View>
              <View style={{
                position: 'relative',
                justifyContent: 'center',

              }}>
                <Text style={styles.textFrame3}>{t('sim')}</Text>
                <TextInput
                  placeholder="0904025252"

                  onFocus={() => setActiveInput('sim')}

                  style={{

                    width: 362,
                    height: 44,
                    backgroundColor: Colors.white,
                    borderRadius: 8,
                    padding: 8,

                    paddingVertical: 8,
                    borderWidth: 2,
                    borderColor: activeInput == "sim" ? Colors.blue : Colors.white
                  }} />

              </View>
              <View style={{
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Text style={styles.textFrame2}>{t('place-bottomsheet')}</Text>
                <TextInput
                  placeholder="86/33 Âu Cơ, phường 9, quận Tân Bình, TP.HCM"

                  onFocus={() => setActiveInput('place-bottomsheet')}

                  style={{



                    width: 362,
                    height: 100,
                    padding: 8,
                    backgroundColor: Colors.white,
                    borderRadius: 8,
                    paddingVertical: SIZES.base * 2.5,
                    borderWidth: 2,
                    borderColor: activeInput == "place-bottomsheet" ? Colors.blue : Colors.white,
                    marginBottom: '35%'
                  }} />
              </View>
            </RBSheet>




          </View>
        </View>
      </ScrollView>
    </View>
  );

}
export default Device;
const styles = StyleSheet.create({

  container: {
    flex: 1,

    backgroundColor: Colors.background
  },
  flexDirection: {
    flexDirection: "row",
    padding: 8
  },
  textFrame1: {
    ...FONTS.h12
  },

  textFrame2: {

    marginRight: '76%',
    padding: 8,
    ...FONTS.h13

  },
  textFrame3: {
    marginRight: '55%',
    padding: 8,
    ...FONTS.h13,
  },
  textFrame4: {
    marginRight: '60%',
    padding: 8,
    ...FONTS.h13,
  },
  textContentIMEI: {
    fontSize: 14,

    fontWeight: '400',
    opacity: .5,
    marginLeft: '35%'


  },
  textContentLTB: {
    fontSize: 14,
    width: 179,
    fontWeight: '400',
    opacity: .5,
    marginLeft: '14%'

  },
  textContentNKH: {
    fontSize: 14,
    width: 179,
    fontWeight: '400',
    opacity: .5,
    marginLeft: '14%'
  },
  textContent: {
    ...FONTS.h2


  },
  viewItem: {
    flexDirection: 'row',

    width: "100%"
  },
  viewDc: {


  },
  card: {

    backgroundColor: '#EAF5FA',
    borderWidth: 1,
    borderColor: '#ACBCD1',



  },
  card2: {

    borderWidth: 1,
    marginBottom: '30%',
    borderColor: '#ACBCD1'


  },
  card4: {
    borderWidth: 1,
    borderColor: '#ACBCD1',


  },
  card3: {
    borderWidth: 1,
    borderColor: '#ACBCD1'
  },
  Toolbar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnBack: {
    height: 32,
    marginLeft: 26
  },
  testlookup: {

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
  containerBottomSheet: {
    flex: 1,

    flexDirection: 'row',
    padding: 15,


  },
  fontwarning: {
    width: '50%',
    flex: 1,
    margin: 10,
    justifyContent: 'center'
  },
  fontwarningR: {
    width: '50%',
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    backgroundColor: Colors.blue,
  },
  inputwarning: {
    borderColor: Colors.red,
    borderStyle: 'solid',
    borderWidth: 1,
    height: 44,
    backgroundColor: '#FFFF',
    borderRadius: 8,
    justifyContent: 'center',

  },
  bottomSheetExit: {
    borderColor: Colors.blue,
    borderStyle: 'solid',
    borderWidth: 1,
    height: 40,
    backgroundColor: '#FFFF',
    borderRadius: 8,
    justifyContent: 'center',


  },
  bottomSheetSave: {
    borderColor: Colors.blue,
    borderStyle: 'solid',
    borderWidth: 1,
    height: 40,
    backgroundColor: '#2196F3',
    borderRadius: 8,
    justifyContent: 'center',

  },
  textbottomSheetExit: {
    fontSize: 16,
    textAlign: 'center',
    color: Colors.blue,
    fontWeight: '500',
  },
  textbottomSheetSave: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
    fontWeight: '500',
  },

  bottomSheet: {

    flex: 1,
    width: '50%',
    margin: 10,
    marginTop: '135%'


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
  updateBottomSheet: {
    width: '50%',
    flex: 1,
    margin: 10,
    backgroundColor: Colors.blue,
    borderRadius: 8,
    marginTop: '135%'
  },
  inputupdate: {
    height: 44,
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

  },
  customStyles: {

  }


})