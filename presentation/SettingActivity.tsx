import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TT, ThongTin} from '../data/ThongTinTB';
import {SDT, SDT_KC} from '../data/SDT_KC';
import {Nhan, SDT_Nhan} from '../data/SDT_Nhan';
import {Gui, SDT_GuiTN} from '../data/SDT_GuiTN';
import {Warning, Warnings} from '../data/Warning';

import Dialog, { DialogContent } from 'react-native-popup-dialog';

import Card from '../components/UI/Card';
import ToolBar from '../components/UI/ToolBar';
import InformationItem from '../components/atm/InformationItem';
import Emergency from '../components/atm/EmergencyNumberItem';
import Colors from '../constants/Colors';
import Receiving from '../components/atm/ReceivingPhoneNumber';
import Send from '../components/atm/SendPhoneNumberItem';
import WarningItem from '../components/atm/WarningItem';
import {useTranslation} from 'react-i18next';

import FONTS from '../constants/Fonts';
import InputText from '../components/UI/InputText';
const CaiDat = ({navigation}) => {
  const {t, i18n} = useTranslation();

  const [sdt_kc, setSdtKC] = useState<SDT[] | null>(null);
  const [sdt_nhan, setSdtNhan] = useState<Nhan[] | null>(null);
  const [sdt_guiTN, setSdtGuiTN] = useState<Gui[] | null>(null);

  const [newSdtKC, setNewSdtKC] = useState<SDT | null>(null);
  const [newSdtNhan, setNewSdtNhan] = useState<Nhan | null>(null);
  const [newSdtGuiTN, setNewSdtGuiTN] = useState<Gui | null>(null);

  const [inputShown, setInputShown] = useState<boolean>(false);

  useEffect(() => {
    (() => {
      setSdtKC(SDT_KC);
    })();
  }, []);
  useEffect(() => {
    (() => {
      setSdtNhan(SDT_Nhan);
    })();
  }, []);
  useEffect(() => {
    (() => {
      setSdtGuiTN(SDT_GuiTN);
    })();
  }, []);

  const addPhoneE = () => {
    if (newSdtKC !== null && sdt_kc !== null) setSdtKC([...sdt_kc, newSdtKC]);
    else if (newSdtKC !== null && sdt_kc !== null) setSdtKC([newSdtKC]);
  };

  const addPhoneR = () => {
    if (newSdtNhan !== null && sdt_nhan !== null)
      setSdtNhan([...sdt_nhan, newSdtNhan]);
    else if (newSdtNhan !== null && sdt_nhan !== null) setSdtNhan([newSdtNhan]);
  };

  const addPhoneS = () => {
    if (newSdtGuiTN !== null && sdt_guiTN !== null)
      setSdtGuiTN([...sdt_guiTN, newSdtGuiTN]);
    else if (newSdtGuiTN !== null && sdt_guiTN !== null)
      setSdtGuiTN([newSdtGuiTN]);
  };
  // const ondelete = item => {
  //   const data = sdt_kc.filter(i => i.id !== item.id);
  //   setSdtKC({data});
  // };
  // const renderItem = ({item}) => {
  //   return (
  //     <View style={styles.container}>
  //       <TouchableOpacity
  //         onPress={() => {
  //           ondelete(item);
  //         }}
  //         style={styles.btnDel}>
  //         <FontAwesome name="minus-circle" size={20} color="#FF5B5B" />
  //       </TouchableOpacity>
  //       <Text style={styles.title}>{item.sdt}</Text>
  //     </View>
  //   );
  // };
  return (
    <View>
      <View>
        <ToolBar>
          <TouchableOpacity
            style={styles.back}
            onPress={() => navigation.goBack()}>
            <FontAwesome name="angle-left" size={32} color={Colors.blue} />
          </TouchableOpacity>
          <Text style={styles.textToolBar}>{t('setting')}</Text>
        </ToolBar>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.view}>
          <Card>
            <FlatList
              data={ThongTin}
              renderItem={({item}) => (
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
        <Text style={styles.titles}>{t('set-up-phone-number')}</Text>

        <View style={styles.view}>
          <Card>
            <Text style={styles.title}>{t('emergency-number')}</Text>
            <FlatList
              data={sdt_kc}
              renderItem={({item}) => <Emergency phone_emergency={item.sdt} />}
            />
            
            <View style={styles.btnAddView}>
              <View
                style={{
                  display: inputShown == false ? 'flex' : 'none',
                  width: '100%',
                }}>
                <TouchableOpacity
                  style={styles.btnAddShown}
                  onPress={() => {
                    setInputShown(true);
                  }}>
                  <FontAwesome
                    name="plus-circle"
                    size={24}
                    color={Colors.blue}
                  />
                  <Text style={styles.titleBtn}>
                    {t('add-an-emergency-phone-number')}
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  display: inputShown == true ? 'flex' : 'none',
                  width: '100%',
                }}>
                <View style={{alignItems: 'center', flexDirection: 'row'}}>
                  <TouchableOpacity onPress={addPhoneE}>
                    <FontAwesome
                      name="plus-circle"
                      size={24}
                      color={Colors.blue}
                    />
                  </TouchableOpacity>
                  <InputText
                    onChangeText={text => {
                      if (newSdtKC !== null) {
                        setNewSdtKC({...newSdtKC, sdt: text});
                      } else {
                        setNewSdtKC({id: Date.now(), sdt: text});
                      }
                    }}
                  />
                </View>
              </View>
            </View>
          </Card>
        </View>

        <View style={styles.view}>
          <Card>
            <Text style={styles.title}>
              {t('phone-number-to-receive-calls')}
            </Text>
            <FlatList
              data={sdt_nhan}
              renderItem={({item}) => <Receiving phone_receiving={item.sdt} />}
            />

            <View style={styles.btnAddView}>
              <View
                style={{
                  display: inputShown == false ? 'flex' : 'none',
                  width: '100%',
                }}>
                <TouchableOpacity
                  style={styles.btnAddShown}
                  onPress={() => {
                    setInputShown(true);
                  }}>
                  <FontAwesome
                    name="plus-circle"
                    size={24}
                    color={Colors.blue}
                  />
                  <Text style={styles.titleBtn}>
                    {t('add-an-emergency-phone-number')}
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  display: inputShown == true ? 'flex' : 'none',
                  width: '100%',
                }}>
                <View style={{alignItems: 'center', flexDirection: 'row'}}>
                  <TouchableOpacity onPress={addPhoneR}>
                    <FontAwesome
                      name="plus-circle"
                      size={24}
                      color={Colors.blue}
                    />
                  </TouchableOpacity>
                  <InputText
                    onChangeText={text => {
                      if (newSdtNhan !== null) {
                        setNewSdtNhan({...newSdtNhan, sdt: text});
                      } else {
                        setNewSdtNhan({id: Date.now(), sdt: text});
                      }
                    }}
                  />
                </View>
              </View>
            </View>
          </Card>
        </View>

        <View style={styles.view}>
          <Card>
            <Text style={styles.title}>
              {t('phone-number-to-send-the-message')}
            </Text>
            <FlatList
              data={sdt_guiTN}
              renderItem={({item}) => <Send phone_send={item.sdt} />}
            />
            <View style={styles.btnAddView}>
              <View
                style={{
                  display: inputShown == false ? 'flex' : 'none',
                  width: '100%',
                }}>
                <TouchableOpacity
                  style={styles.btnAddShown}
                  onPress={() => {
                    setInputShown(true);
                  }}>
                  <FontAwesome
                    name="plus-circle"
                    size={24}
                    color={Colors.blue}
                  />
                  <Text style={styles.titleBtn}>
                    {t('add-an-emergency-phone-number')}
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  display: inputShown == true ? 'flex' : 'none',
                  width: '100%',
                }}>
                <View style={{alignItems: 'center', flexDirection: 'row'}}>
                  <TouchableOpacity onPress={addPhoneS}>
                    <FontAwesome
                      name="plus-circle"
                      size={24}
                      color={Colors.blue}
                    />
                  </TouchableOpacity>
                  <InputText
                    onChangeText={text => {
                      if (newSdtGuiTN !== null) {
                        setNewSdtGuiTN({...newSdtGuiTN, sdt: text});
                      } else {
                        setNewSdtGuiTN({id: Date.now(), sdt: text});
                      }
                    }}
                  />
                </View>
              </View>
            </View>
          </Card>
        </View>

        <Text style={styles.titles}>{t('alarm-threshold-setting')}</Text>
        <View style={{flex: 1}}>
          <FlatList
            data={Warnings}
            renderItem={({item}) => (
              <WarningItem
                rung={item.rung}
                roDien={item.roDien}
                khoi={item.khoi}
                nhietDo={item.nhietDo}
                pin={item.pin}
              />
            )}
          />
        </View>
        <View style={styles.viewBtnSave}>
          <TouchableOpacity
            style={styles.btnSave}
            onPress={() => {
              navigation.navigate('ThongTinThietBi');
            }}>
            <Text style={styles.titleSave}>{t('save')}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default CaiDat;

const styles = StyleSheet.create({
  back: {
    height: 32,
    marginTop: 18,
    marginLeft: 26,
  },
  textToolBar: {
    width: 64,
    height: 30,
    marginTop: 25,
    marginLeft: 10,
    marginBottom: 12,
    alignItems: 'center',
    ...FONTS.h2,
  },
  scrollView: {
    backgroundColor: Colors.background,
    width: '100%',
  },
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  viewPhone: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  titles: {
    height: 20,
    marginTop: 32,
    marginLeft: 26,
    ...FONTS.h2,
  },
  title: {
    ...FONTS.h4,
  },
  
  btnAddView: {
    marginLeft: 2,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  titleBtn: {
    marginLeft: 10,
    marginTop: 2,
    ...FONTS.h5,
  },
  btnAdd: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnAddShown: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewBtnSave: {
    marginTop: 24,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30,
    height: 100,
  },
  titleSave: {
    ...FONTS.h1,
  },
  btnSave: {
    height: 44,
    backgroundColor: '#2190CD',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    height: 24,
  },
  btnDel: {
    marginLeft: 2,
    marginTop: 2,
  },
  title: {
    marginLeft: 10,
    ...FONTS.h3,
  },
});
