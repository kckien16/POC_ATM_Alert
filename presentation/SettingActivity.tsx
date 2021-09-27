import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/Feather';
import FontAwesome2 from 'react-native-vector-icons/FontAwesome';
import {TT, ThongTin} from '../data/ThongTinTB';
import {SDT, SDT_KC} from '../data/SDT_KC';
import {Nhan, SDT_Nhan} from '../data/SDT_Nhan';
import {Gui, SDT_GuiTN} from '../data/SDT_GuiTN';
import {Warning, Warnings} from '../data/Warning';

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
import InputPhone from '../components/UI/InputPhone';

import {useNavigation} from '@react-navigation/native';
import Fonts from '../constants/Fonts';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../presentation/RootStackPrams';


const isValidPhone = (text: string) => {
  const phone =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
  return phone.test(text);
};

const updateError = (error: any, stateUpdate: (arg0: any) => void) => {
  stateUpdate(error);
  setTimeout(() => {
    stateUpdate('');
  }, 2500);
};

type authScreenProp = StackNavigationProp<RootStackParamList, 'ThongTinThietBi'>;

const CaiDat  = () => {
  const navigation = useNavigation<authScreenProp>();

  const [phoneInfo, setPhoneInfo] = useState({
    phone_E: '',
    phone_R: '',
    phone_S: '',
  });

  const [errorE, setErrorE] = useState('');
  const [errorR, setErrorR] = useState('');
  const [errorS, setErrorS] = useState('');

  const {phone_E, phone_R, phone_S} = phoneInfo;

  const handleOnChangeText = (text: any, fieldPhone: string) => {
    setPhoneInfo({...phoneInfo, [fieldPhone]: text});
  };

  const isValidFormPhoneE = () => {
    if (!isValidPhone(phone_E) || phone_E.length < 10 || phone_E.length > 10)
      return updateError('Phone is requied ', setErrorE);
    return true;
  };
  const isValidFormPhoneR = () => {
    if (!isValidPhone(phone_R) || phone_R.length < 10 || phone_R.length > 10)
      return updateError('Phone is requied ', setErrorR);
    return true;
  };
  const isValidFormPhoneS = () => {
    if (!isValidPhone(phone_S) || phone_S.length < 10 || phone_S.length > 10)
      return updateError('Phone is requied ', setErrorS);
    return true;
  };

  

  const {t, i18n} = useTranslation();

  const [sdt_kc, setSdtKC] = useState<SDT[] | null>(null);
  const [sdt_nhan, setSdtNhan] = useState<Nhan[] | null>(null);
  const [sdt_guiTN, setSdtGuiTN] = useState<Gui[] | null>(null);

  const [newSdtKC, setNewSdtKC] = useState<SDT | null>(null);
  const [newSdtNhan, setNewSdtNhan] = useState<Nhan | null>(null);
  const [newSdtGuiTN, setNewSdtGuiTN] = useState<Gui | null>(null);

  const [addPhoneEShown, setAddPhoneEShown] = useState<boolean>(false);
  const [addPhoneRShown, setAddPhoneRShown] = useState<boolean>(false);
  const [addPhoneSShown, setAddPhoneSShown] = useState<boolean>(false);

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
    if (isValidFormPhoneE()) {
      if (newSdtKC !== null && sdt_kc !== null) setSdtKC([...sdt_kc, newSdtKC]);
      else if (newSdtKC !== null && sdt_kc !== null) setSdtKC([newSdtKC]);
    }
  };

  const addPhoneR = () => {
    if (isValidFormPhoneR()) {
      if (newSdtNhan !== null && sdt_nhan !== null)
        setSdtNhan([...sdt_nhan, newSdtNhan]);
      else if (newSdtNhan !== null && sdt_nhan !== null)
        setSdtNhan([newSdtNhan]);
    }
  };

  const addPhoneS = () => {
    if (isValidFormPhoneS()) {
      if (newSdtGuiTN !== null && sdt_guiTN !== null)
        setSdtGuiTN([...sdt_guiTN, newSdtGuiTN]);
      else if (newSdtGuiTN !== null && sdt_guiTN !== null)
        setSdtGuiTN([newSdtGuiTN]);
    }
  };

  const ondelete1 = (index: any) => {
    if (index > -1) {
      setSdtKC(sdt_kc.splice(index, 1));
      setSdtKC(sdt_kc.splice(sdt_kc.length - 1, 1));
    }
  };

  const renderItem1 = ({item, index}: {item: any; index: any}) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            ondelete1(index);
          }}
          style={styles.btnDel}>
          <FontAwesome name="minus-circle" size={24} color="#FF5B5B" />
        </TouchableOpacity>
        <Text style={styles.titlez}>{item.sdt}</Text>
      </View>
    );
  };

  const ondelete2 = (index: number) => {
    if (index > -1) {
      setSdtNhan(sdt_nhan.splice(index, 1));
      setSdtNhan(sdt_nhan.splice(sdt_nhan.length - 1, 1));
    }
  };
  const renderItem2 = ({item, index}: {item: any; index: any}) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            ondelete2(index);
          }}
          style={styles.btnDel}>
          <FontAwesome name="minus-circle" size={24} color="#FF5B5B" />
        </TouchableOpacity>
        <Text style={styles.titlez}>{item.sdt}</Text>
      </View>
    );
  };

  const ondelete3 = (index: number) => {
    if (index > -1) {
      setSdtGuiTN(sdt_guiTN.splice(index, 1));
      setSdtGuiTN(sdt_guiTN.splice(sdt_guiTN.length - 1, 1));
    }
  };
  const renderItem3 = ({item, index}: {item: any; index: any}) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            ondelete3(index);
          }}
          style={styles.btnDel}>
          <FontAwesome name="minus-circle" size={24} color="#FF5B5B" />
        </TouchableOpacity>
        <Text style={styles.titlez}>{item.sdt}</Text>
      </View>
    );
  };

  return (
    <View>
      <View>
        <ToolBar>
          <TouchableOpacity
            style={styles.back}
            onPress={() => navigation.goBack()}>
            <FontAwesome2 name="angle-left" size={32} color={Colors.blue} />
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
            <View style={{borderBottomWidth: 0.2}}>
              <FlatList
                data={sdt_kc}
                keyExtractor={(item, index) => item.sdt.toString()}
                // renderItem={({item}) => <Receiving phone_receiving={item.sdt} />}
                renderItem={renderItem1}
              />
            </View>
            <View style={styles.btnAddView}>
              <View
                style={{
                  display: addPhoneEShown == false ? 'flex' : 'none',
                  width: '100%',
                }}>
                <TouchableOpacity
                  style={styles.btnAddShown}
                  onPress={() => {
                    setAddPhoneEShown(true);
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
                  display: addPhoneEShown == true ? 'flex' : 'none',
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
                  <InputPhone
                    value={phone_E}
                    error={errorE}
                    onChangeText={(text: any) => {
                      handleOnChangeText(text, 'phone_E');
                      if (newSdtKC !== null) {
                        setNewSdtKC({...newSdtKC, sdt: text});
                      } else {
                        setNewSdtKC({id: Date.now(), sdt: text});
                      }
                    }}
                  />
                </View>
                {errorE ? <Text style={styles.error}>{errorE}</Text> : null}
              </View>
            </View>
          </Card>
        </View>

        <View style={styles.view}>
          <Card>
            <Text style={styles.title}>
              {t('phone-number-to-receive-calls')}
            </Text>
            <View style={{borderBottomWidth: 0.2}}>
              <FlatList
                data={sdt_nhan}
                keyExtractor={(item, index) => item.sdt.toString()}
                // renderItem={({item}) => <Receiving phone_receiving={item.sdt} />}
                renderItem={renderItem2}
              />
            </View>
            <View style={styles.btnAddView}>
              <View
                style={{
                  display: addPhoneRShown == false ? 'flex' : 'none',
                  width: '100%',
                }}>
                <TouchableOpacity
                  style={styles.btnAddShown}
                  onPress={() => {
                    setAddPhoneRShown(true);
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
                  display: addPhoneRShown == true ? 'flex' : 'none',
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
                  <InputPhone
                    value={phone_R}
                    error={errorR}
                    onChangeText={(text: any) => {
                      handleOnChangeText(text, 'phone_R');
                      if (newSdtNhan !== null) {
                        setNewSdtNhan({...newSdtNhan, sdt: text});
                      } else {
                        setNewSdtNhan({id: Date.now(), sdt: text});
                      }
                    }}
                  />
                </View>
                {errorR ? <Text style={styles.error}>{errorR}</Text> : null}
              </View>
            </View>
          </Card>
        </View>

        <View style={styles.view}>
          <Card>
            <Text style={styles.title}>
              {t('phone-number-to-send-the-message')}
            </Text>
            <View style={{borderBottomWidth: 0.2}}>
              <FlatList
                data={sdt_guiTN}
                keyExtractor={(item, index) => item.sdt.toString()}
                // renderItem={({item}) => <Receiving phone_receiving={item.sdt} />}
                renderItem={renderItem3}
              />
            </View>
            <View style={styles.btnAddView}>
              <View
                style={{
                  display: addPhoneSShown == false ? 'flex' : 'none',
                  width: '100%',
                }}>
                <TouchableOpacity
                  style={styles.btnAddShown}
                  onPress={() => {
                    setAddPhoneSShown(true);
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
                  display: addPhoneSShown == true ? 'flex' : 'none',
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
                  <InputPhone
                    value={phone_S}
                    error={errorS}
                    onChangeText={(text: any) => {
                      handleOnChangeText(text, 'phone_S');
                      if (newSdtGuiTN !== null) {
                        setNewSdtGuiTN({...newSdtGuiTN, sdt: text});
                      } else {
                        setNewSdtGuiTN({id: Date.now(), sdt: text});
                      }
                    }}
                  />
                </View>
                {errorS ? <Text style={styles.error}>{errorS}</Text> : null}
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
            onPress={() => navigation.navigate('ThongTinThietBi')}>
            <Text style={styles.titleSave}>{t('save')}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
    // )}</Formik>
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
    opacity:0.8
  },
  title: {
    ...FONTS.h2,
    opacity:0.8
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
    ...Fonts.h1,
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
    marginTop: 3,
    borderBottomColor: 'black',
    borderBottomWidth: 0.2,
    paddingBottom: 8,
    paddingTop: 8,
  },
  btnDel: {
    marginLeft: 2,
    marginTop: 2,
  },
  titlez: {
    marginLeft: 10,
    ...Fonts.h3,
    opacity:0.7
  },
  error: {
    ...Fonts.h8,
    marginTop: 5,
    marginLeft: '10%',
  },
});
