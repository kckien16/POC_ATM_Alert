import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity, FlatList,} from 'react-native';
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
          style={styles.toolBar}>
          <FontAwesome name="angle-left" size={35} color="#1e88e5" />
        </TouchableOpacity>
        <Text style= {styles.title}>Tra cứu thiết bị</Text>
      </ToolBar>
      <Card style = {styles.card}>
        <FlatList data={ThongTin}
          renderItem={({ item }) => (
            <View>
              <View style={styles.flexDirection}>
                <Text style={styles.textFrame1}>IMEI:</Text>
                <Text style={styles.textContentIMEI}>{item.imei}</Text>
              </View>
              <View style={styles.flexDirection}>
                <Text style={styles.textFrame1}>Loại thiết bị:</Text>
                <Text style={styles.textContentLTB}>{item.loaiTB}</Text>
              </View>
            </View>
          )}>
        </FlatList>
      </Card>
      <Text style={styles.textFrame2}>Tên thiết bị:</Text>
      <Card style = {styles.card}>
        <FlatList
          data={ThongTin}
          renderItem={({ item }) => (
            <View>
              <Text style={styles.textContent}>{item.tenTB}</Text>
            </View>
          )}>
        </FlatList>
      </Card>
      <Text style={styles.textFrame2}>Số Sim:</Text>
      <Card>
        <FlatList
          data={ThongTin}
          renderItem={({ item }) => (
            <View>
              <Text style={styles.textContent}>{item.sim}</Text>
            </View>
          )}>
        </FlatList>
      </Card>
      <Text style={styles.textFrame2}>Địa chỉ lắp đặt:</Text>
      <Card>
        <FlatList
          data={ThongTin}
          renderItem={({ item }) => (
            <View>
              <Text style={styles.textContent}>{item.diaChi}</Text>
            </View>
          )}>
        </FlatList>
      </Card>
      <View>
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
  card: {
    alignSelf: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: "500" 
  },
  toolBar: {
    height: 30,
    width: 30, 
    justifyContent: "center", 
    marginLeft: 30
  },
  flexDirection: {
    flexDirection: "row", 
    margin: 20,
  },
  textFrame1: {
    fontSize: 16
  },
  textContentIMEI: {
    fontSize: 16, 
    right: "-500%",
    width: 180,
    fontWeight: "200",
    fontFamily: '#EAF5FA'
  },
  textContentLTB: {
    fontSize: 16,
    right: "-130%",
    width: 180,
    fontWeight: "200",
    fontFamily: '#EAF5FA'
  },
  textFrame2: {
    fontSize: 16,
    fontWeight: "500", 
    marginLeft: 25, 
    marginTop: 25
  },
  textContent: {
    fontSize: 16,
    marginLeft: 20,
  },
  buttonLogin: {
    backgroundColor: '#4493e2',
    height: 45,
    marginTop: 80,
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
});
export default traCuuTB;



