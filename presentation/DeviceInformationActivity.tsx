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


const CaiDat = ({navigation}) => {


  return (
    <View>
      <View>
        <ToolBar>
          <TouchableOpacity
            style={styles.back}
            onPress={() => navigation.goBack()}>
            <FontAwesome name="angle-left" size={30} color={Colors.primary} />
          </TouchableOpacity>
          <Text style={styles.textToolBar}>Thông tin thiết bị</Text>
          <TouchableOpacity onPress={()=>navigation.navigate("CaiDat")}>
          <Text style={styles.textRight}>Chỉnh sữa</Text>
          </TouchableOpacity>
        </ToolBar>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.view}>
          <Card >
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
        <Text style={styles.titles}>Cài đặt số điện thoại</Text>
        <View style={styles.view}>
          <Card>
            <Text style={styles.title}>Số điện thoại khẩn cấp:</Text>
            <FlatList
              data={SDT_KC}
              renderItem={({item}) => (
                <EmergencyNumberItem phone_emergency={item.sdt} />
              )}
            />
            <Text style={styles.br}>
              
            </Text>
            <View style={styles.btnAddView}>
             
            </View>
          </Card>
        </View>

        <View style={styles.view}>
          <Card>
            <Text style={styles.title}>Số điện thoại nhận cuộc gọi:</Text>
            <FlatList
              data={SDT_Nhan}
              renderItem={({item}) => <Receiving phone_receiving={item.sdt} />}
            />
            <Text style={styles.br}>
              
            </Text>
            <View style={styles.btnAddView}>
            
            </View>
          </Card>
        </View>

        <View style={styles.view}>
          <Card>
            <Text style={styles.title}>Số điện thoại gửi tin nhắn:</Text>
            <FlatList
              data={SDT_GuiTN}
              renderItem={({item}) => <Send phone_send={item.sdt} />}
            />
            <Text style={styles.br}>
            </Text>
            <View style={styles.btnAddView}>
              
            </View>
          </Card>
        </View>
        <Text style={styles.titles}>Cài đặt ngưỡng cảnh báo</Text>
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
          
        </View>
      </ScrollView>
    </View>
  );
};

export default CaiDat;

const styles = StyleSheet.create({
   
  back: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    marginLeft: 30,
    
  },
 

  textToolBar: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textRight:{
    fontSize: 18,
    fontWeight: '500',
    marginLeft:80,
    color: Colors.blue

},
  scrollView: {
    backgroundColor: Colors.background,
    width: '100%',
    
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight:'bold'
    
  },
  titles: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 25,
    marginTop: 25,
  },
  title: {
    fontSize: 14,
    marginLeft: 15,
    marginTop: 15,
    
  },
  br: {
    fontWeight: '200',
    paddingLeft: 15,
    paddingRight: 15,
    height: 25,
  },
  btnAddView: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleBtn: {
    fontSize: 14,
    marginLeft: 10,
    marginTop: 2,
    color: Colors.blue,
  },
  btnAdd: {
    marginLeft: 15,
    flexDirection: 'row',
  },
  viewBtnSave: {
    margin: 20,
    height: 100,
  },
  titleSave: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
