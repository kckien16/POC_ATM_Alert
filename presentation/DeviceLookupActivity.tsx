import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  Text, View, StyleSheet,
  TouchableOpacity, FlatList,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Card from '../components/UI/Card';
import ToolBar from '../components/UI/ToolBar';

import { ThongTin } from '../data/ThongTinTB';

const traCuuTB = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ToolBar>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ height: 30, width: 30, justifyContent: "center", marginLeft: 30 }}>
          <FontAwesome name="angle-left" size={35} color="#1e88e5" />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: "500" }}>Tra cứu thiết bị</Text>
      </ToolBar>


      <Card>
        <FlatList data={ThongTin}
          renderItem={({ item }) => (
            <View>
              <View style={{ flexDirection: "row", margin: 20, }}>
                <Text style={{ fontSize: 16 }}>IMEI:</Text>
                <Text style={{ fontSize: 16, right: "-500%", width: 180, fontWeight: "200", fontFamily: '#EAF5FA' }}>{item.imei}</Text>
              </View>

              <View style={{ flexDirection: "row", marginLeft: 20, marginBottom: 20 }}>
                <Text style={{ fontSize: 16 }}>Loại thiết bị:</Text>
                <Text style={{ fontSize: 16, right: "-130%", width: 180, fontWeight: "200", fontFamily: '#EAF5FA' }}>{item.loaiTB}</Text>
              </View>

            </View>
          )}>
        </FlatList>
      </Card>

      <Text style={{ fontSize: 16, fontWeight: "500", marginLeft: 25, marginTop: 25 }}>Tên thiết bị:</Text>
      <Card>
        <FlatList
          data={ThongTin}
          renderItem={({ item }) => (
            <View>
              <Text style={{ fontSize: 16, marginLeft: 20, }}>{item.tenTB}</Text>
            </View>
          )}>
        </FlatList>
      </Card>

      <Text style={{ fontSize: 16, fontWeight: "500", marginLeft: 25, marginTop: 25 }}>Số Sim:</Text>
      <Card>
        <FlatList
          data={ThongTin}
          renderItem={({ item }) => (
            <View>
              <Text style={{ fontSize: 16, marginLeft: 20, }}>{item.sim}</Text>
            </View>
          )}>
        </FlatList>
      </Card>
      <Text style={{ fontSize: 16, fontWeight: "500", marginLeft: 25, marginTop: 25 }}>Địa chỉ lắp đặt:</Text>
      <Card>
        <FlatList
          data={ThongTin}
          renderItem={({ item }) => (
            <View>
              <Text style={{ fontSize: 16, marginLeft: 20, }}>{item.diaChi}</Text>
            </View>
          )}>
        </FlatList>
      </Card>

      <View style={{ marginTop: 100 }}>
        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={styles.buttonLoginText}>Kích hoạt</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF5FA',
  },
  buttonLogin: {
    backgroundColor: '#4493e2',
    height: 45,
    marginTop: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 310,
    alignSelf: 'center',
  },
  buttonLoginText: {
    color: '#f4f6f7',
    fontWeight: 'bold',

  },

})

export default traCuuTB;



