import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React, {useState, FC, useRef, createRef, useEffect} from 'react';
import {
  View,
  Alert,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {TT, ThongTin} from '../data/ThongTinTB';
import Card from '../components/UI/Card';
import ToolBar from '../components/UI/ToolBar';
import Button from '../components/UI/Button';
import SensorStatus from '../components/atm/SensorStatus';
import {Sensor, status} from '../data/Sensor_status';
import InformationLookupItem from '../components/atm/InformationLookupItem';
import Colors from '../constants/Colors';
import {useTranslation} from 'react-i18next';
import RBSheet from 'react-native-raw-bottom-sheet';
import {SIZES} from '../constants/theme';
import FONTS from '../constants/Fonts';
import InputText from '../components/UI/InputText';
import InputPlace from '../components/UI/InputPlace';

import {Formik} from 'formik';
import * as yup from 'yup';
import Fonts from '../constants/Fonts';
import lookup from './LookupActivity';

const actionSheetRef = createRef();

const number =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/i;

const loginValidSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  sim: yup.string().length(11).required('Number is required').matches(number, 'Number is required'),
  place: yup.string().required('Place is required'),
});

const Device = () => {
  const navigation = useNavigation();
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
    );
  }, []);
  const {t, i18n} = useTranslation();
  const [IMEI, setIMEI] = useState();
  const [Loai, setLoai] = useState();

  const refRBSheet = useRef();
  const [activeInput, setActiveInput] = useState(null);
  return (
    <Formik
      initialValues={{name: '', sim: '', place: ''}}
      validateOnMount={true}
      onSubmit={values => navigation.navigate('Device')}
      validationSchema={loginValidSchema}>
      {({handleChange, handleBlur, handleSubmit, values, touched, errors}) => (
        <View style={styles.container}>
          <ScrollView>
            <ToolBar style={styles.Toolbar}>
              <TouchableOpacity
                style={styles.btnBack}
                onPress={() => navigation.goBack()}>
                <FontAwesome name="angle-left" size={30} color={Colors.blue} />
              </TouchableOpacity>
              <Text style={styles.testlookup}>{t('device-lookup')}</Text>
              <TouchableOpacity
                style={{flex: 3, alignItems: 'flex-end', marginRight: 20}}
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
                  renderItem={({item}) => (
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
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      color: '#347AFF',
                      fontSize: 16,
                      fontWeight: 'bold',
                    }}>
                    {t('query-time')}:
                  </Text>
                  <Text
                    style={{marginLeft: '15%', color: '#2190CD', fontSize: 16}}>
                    {currentDate}
                  </Text>
                </View>
              </Card>
            </View>

            <View style={{flex: 1, marginTop: 20, marginLeft: 22}}>
              <Text style={{fontSize: 16, fontWeight: '600'}}>
                {t('sensor-status')}
              </Text>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Card>
                <FlatList
                  data={Sensor}
                  renderItem={({item}) => (
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

            <View style={styles.containerfooter}>
              <View style={styles.fontwarning}>
                <TouchableOpacity style={styles.inputwarning}>
                  <Text style={styles.textwarning}>{t('warning')}</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.update}>
                <TouchableOpacity
                  onPress={() => refRBSheet.current.open()}
                  style={styles.inputupdate}>
                  <Text style={styles.textupdate}>{t('update')}</Text>
                </TouchableOpacity>

                <RBSheet
                  ref={refRBSheet}
                  height={470}
                  closeOnDragDown={true}
                  openDuration={250}
                  dragFromTopOnly={false}
                  closeOnPressMask={false}
                  customStyles={{
                    wrapper: {
                      backgroundColor: 'rgba(0,0,0,0.3)',
                    },

                    container: {
                      justifyContent: 'center',
                      backgroundColor: Colors.white,
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,

                      alignItems: 'center',
                    },
                  }}>
                  <View style={styles.containerBottomSheet}>
                    <View style={styles.bottomSheet}>
                      <TouchableOpacity
                        onPress={() => refRBSheet.current.close()}
                        style={styles.bottomSheetExit}>
                        <Text style={styles.textbottomSheetExit}>
                          {t('exit')}
                        </Text>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.updateBottomSheet}>
                      <TouchableOpacity style={styles.bottomSheetSave}
                      >
                        <Text style={styles.textbottomSheetSave}>
                          {t('save')}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View>
                    <View style={styles.viewItem}>
                      <Card style={styles.card}>
                        <FlatList
                          data={ThongTin}
                          renderItem={({item}) => (
                            <View>
                              <View style={styles.flexDirection}>
                                <Text style={styles.textFrame1}>
                                  {t('imei')}
                                </Text>
                                <Text style={styles.textContentIMEI}>
                                  {item.imei}
                                </Text>
                              </View>
                              <View style={styles.flexDirection}>
                                <Text style={styles.textFrame1}>
                                  {t('type-of-device')}
                                </Text>
                                <Text style={styles.textContentLTB}>
                                  {item.loaiTB}
                                </Text>
                              </View>

                              <View style={styles.flexDirection}>
                                <Text style={styles.textFrame1}>
                                  {t('activation-date')}
                                </Text>
                                <Text style={styles.textContentNKH}>
                                  {item.ngayKH}
                                </Text>
                              </View>
                            </View>
                          )}></FlatList>
                      </Card>
                    </View>
                  </View>

                  <View
                    style={{
                      position: 'relative',
                      justifyContent: 'center',
                      width:"100%"
                    }}>
                    <Text style={styles.textFrame4}>{t('device-name')}</Text>

                    <InputText
                      placeholder={t('enter-name')}
                      onChangeText={handleChange('name')}
                      onBlur={handleBlur('name')}
                      value={values.name}
                      error={errors.name}
                    />
                  </View>
                  <View
                    style={{
                      position: 'relative',
                      justifyContent: 'center',
                      width:"100%"
                    }}>
                    <Text style={styles.textFrame3}>{t('sim')}</Text>
                    <InputText
                      placeholder={t('sim')}
                      onChangeText={handleChange('sim')}
                      onBlur={handleBlur('sim')}
                      value={values.sim}
                      error={errors.sim}
                    />
                  </View>
                  <View
                    style={{
                      position: 'relative',
                      width:"100%"
                    }}>
                    <Text style={styles.textFrame2}>
                      {t('place-bottomsheet')}:
                    </Text>
                    <InputPlace
                      placeholder={t('place-bottomsheet')}
                      onChangeText={handleChange('place')}
                      onBlur={handleBlur('place')}
                      value={values.place}
                      error={errors.place}
                    /> 
                  </View>
                </RBSheet>
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </Formik>
  );
};
export default Device;
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: Colors.background,
  },
  flexDirection: {
    flexDirection: 'row',
    marginTop:5
  },
  textFrame1: {
    ...FONTS.h12,
  },

  textFrame2: {
    marginLeft:"8%",
    ...FONTS.h13,
    marginTop:10,
    marginBottom:-8
  },
  textFrame3: {
    marginLeft:"8%",
    ...FONTS.h13,
    marginTop:10,
    marginBottom:-8
  },
  textFrame4: {
  marginLeft:"8%",
    ...FONTS.h13,
    marginTop:15,
    marginBottom:-8
  },
  textContentIMEI: {
    fontSize: 14,
    fontWeight: '400',
    opacity: 0.5,
    marginLeft: '40%',
  },
  textContentLTB: {
    fontSize: 14,
    width: 150,
    fontWeight: '400',
    opacity: 0.5,
    marginLeft: '25%',
  },
  textContentNKH: {
    fontSize: 14,
    width: 179,
    fontWeight: '400',
    opacity: 0.5,
    marginLeft: '19%',
  },
  textContent: {
    ...FONTS.h2,
  },
  viewItem: {
    flexDirection: 'row',
    width: '101%',
  },
  card: {
    marginTop:110,
    backgroundColor: '#EAF5FA',
    borderWidth: 1,
    borderColor: '#ACBCD1',
  },
  card2: {
    borderWidth: 1,
    marginBottom: '30%',
    borderColor: '#ACBCD1',
  },
  card4: {
    borderWidth: 1,
    borderColor: '#ACBCD1',
  },
  card3: {
    borderWidth: 1,
    borderColor: '#ACBCD1',
  },
  Toolbar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnBack: {
    height: 32,
    marginLeft: 26,
  },
  testlookup: {
    marginLeft: 10,
    ...FONTS.h2,
  },
  information: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  testinformation: {
    fontSize: 16,
    fontWeight: '600',
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
    width: '100%',
    flexDirection: 'row',
    padding: 15,
    marginBottom: 60,
  },
  btnfooter: {
    width: '50%',
    flex: 1,
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
    padding: 16,
    marginBottom:-40
  },
  fontwarning: {
    width: '50%',
    flex: 1,
    margin: 10,
    justifyContent: 'center',
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
    marginTop: '135%',
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
    marginTop: '135%',
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
  error:{
    ...Fonts.h8,
    marginTop:5,
    marginLeft:"10%"
  },
});
