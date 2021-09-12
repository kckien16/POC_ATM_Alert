import React, {useState} from 'react';
import {
  FlatList,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TT, ThongTin} from '../data/ThongTinTB';
import {SDT, SDT_KC} from '../data/SDT_KC';
import {Nhan, SDT_Nhan} from '../data/SDT_Nhan';
import {Gui, SDT_GuiTN} from '../data/SDT_GuiTN';
import {Warning, Warnings} from '../data/Warning';

import Card from '../components/UI/Card';
import ToolBar from '../components/UI/ToolBar';
import InformationItem from '../components/atm/InformationItem';
import EmergencyNumberItem from '../components/atm/EmergencyNumberItem';
import Colors from '../constants/Colors';
import Receiving from '../components/atm/ReceivingPhoneNumber';
import Send from '../components/atm/SendPhoneNumberItem';
import WarningItem from '../components/atm/WarningItem';
import Button from '../components/UI/Button';
import { useTranslation } from 'react-i18next';

import FONTS  from '../constants/Fonts';



const CaiDat = ({navigation}) => {
  const{t,i18n}=useTranslation()

  const onDelete =() =>{
    
  }
  return (
    <View>
      <View >
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
        <Text style={styles.titles}>{t("set-up-phone-number")}</Text>

        <View style={styles.view}>
          <Card>
            <Text style={styles.title}>{t("emergency-number")}</Text>
            <FlatList
              data={SDT_Nhan}
              renderItem={({item}) => <Receiving phone_receiving={item.sdt} />}
            />
            <Text style={styles.br}>
              ________________________________________________
            </Text>
            <View style={styles.btnAddView}>
              <TouchableOpacity style={styles.btnAdd}
              
              
              >
                <FontAwesome
                  name="plus-circle"
                  size={20}
                  color={Colors.blue}
                />
                <Text style={styles.titleBtn}>{t("add-an-emergency-phone-number")}</Text>
              </TouchableOpacity>
            </View>
          </Card>
        </View>

        <View style={styles.view}>
          <Card>
            <Text style={styles.title}>{t("phone-number-to-receive-calls")}</Text>
            <FlatList
              data={SDT_Nhan}
              renderItem={({item}) => <Receiving phone_receiving={item.sdt} />}
            />
            <Text style={styles.br}>
              ________________________________________________
            </Text>
            <View style={styles.btnAddView}>
              <TouchableOpacity style={styles.btnAdd}
              onPress={() => Alert.alert('Thêm thành công')}>
                <FontAwesome
                  name="plus-circle"
                  size={20}
                  color={Colors.blue}
                />
                <Text style={styles.titleBtn}>{t("add-phone-number-to-receive-calls")}</Text>
              </TouchableOpacity>
            </View>
          </Card>
        </View>

        <View style={styles.view}>
          <Card>
            <Text style={styles.title}>{t("phone-number-to-send-the-message")}</Text>
            <FlatList
              data={SDT_Nhan}
              renderItem={({item}) => <Receiving phone_receiving={item.sdt} />}
            />
            <Text style={styles.br}>
              ________________________________________________
            </Text>
            <View style={styles.btnAddView}>
              <TouchableOpacity style={styles.btnAdd}>
                <FontAwesome
                  name="plus-circle"
                  size={20}
                  color={Colors.blue}
                />
                <Text style={styles.titleBtn}>{t("add-phone-number-to-send-messages")}</Text>
              </TouchableOpacity>
            </View>
          </Card>
        </View>

        <Text style={styles.titles}>{t("alarm-threshold-setting")}</Text>
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
          <Button>
            <TouchableOpacity  onPress={() => { //button
              navigation.navigate('ThongTinThietBi');
            }}>
            <Text style={styles.titleSave}>{t("save")}</Text>
            </TouchableOpacity>
          </Button> 
        </View>
      </ScrollView>
    </View>
  );
};

export default CaiDat;

const styles = StyleSheet.create({
  back: {
    height:32,
    marginTop:18,
    marginLeft:26
  },
  textToolBar: {
    width:64,
    height:30,
    marginTop:25,
    marginLeft:10,
    marginBottom:12,
    alignItems:"center",
    ...FONTS.h2
  },
  scrollView: {
    backgroundColor: Colors.background,
    width: '100%',
  },
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20
  },
  viewPhone:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:12,
  },
  titles: {
    height:20,
    marginTop:32,
    marginLeft:26,
    ...FONTS.h2
  },
  title: {
    ...FONTS.h4
  },
  br: {
    opacity:0.3,
    width:"100%",
  },
  btnAddView: {
    marginLeft:2,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleBtn: {
    marginLeft: 10,
    marginTop: 2,
    ...FONTS.h5
  },
  btnAdd: {
    flexDirection: 'row',
    marginTop:10
  },
  viewBtnSave: {
    marginTop: 24,
    marginLeft:20,
    marginRight:20,
    marginBottom:30,
    height: 100,
  },
  titleSave: {
    ...FONTS.h1
  },
});
