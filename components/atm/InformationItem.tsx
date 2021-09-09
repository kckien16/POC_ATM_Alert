import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const InformationItem = props => {
  return (
    <View >
      <View style={styles.viewItem}>
        <View style={{flex: 2}}>
          <Text style={styles.titles}>IMEI:</Text>
        </View>
        <View style={{flex: 3}}>
          <Text style={styles.title}>{props.imei}</Text>
        </View>
      </View>
      <View style={styles.viewItem}>
        <View style={{flex: 2}}>
          <Text style={styles.titles}>SIM</Text>
        </View>
        <View style={{flex: 3}}>
          <Text style={styles.title}>{props.sim}</Text>
        </View>
      </View>
      <View style={styles.viewItem}>
        <View style={{flex: 2}}>
          <Text style={styles.titles}>Loại thiết bị</Text>
        </View>
        <View style={{flex: 3}}>
          <Text style={styles.title}>{props.loaiTB}</Text>
        </View>
      </View>
      <View style={styles.viewItem}>
        <View style={{flex: 2}}>
          <Text style={styles.titles}>Tên thiết bị</Text>
        </View>
        <View style={{flex: 3}}>
          <Text style={styles.title}>{props.tenTB}</Text>
        </View>
      </View>
      <View style={styles.viewItem}>
        <View style={{flex: 2}}>
          <Text style={styles.titles}>Địa chỉ</Text>
        </View>
        <View style={{flex: 3}}>
          <Text style={styles.title}>{props.diaChi}</Text>
        </View>
      </View>
      <View style={styles.viewItem}>
        <View style={{flex: 2}}>
          <Text style={styles.titles}>Ngày kích hoạt</Text>
        </View>
        <View style={{flex: 3}}>
          <Text style={styles.title}>{props.ngayKH}</Text>
        </View>
      </View>
    </View>
  );
};

export default InformationItem;

const styles = StyleSheet.create({
  titles: {
    fontSize: 16,
    fontWeight:'bold'
    
  },
  title: {
    fontSize: 16,
    width: 180,
    fontWeight: '300',
    marginLeft:"14%"
  },
  viewItem: {
    flexDirection: 'row',
    marginBottom: 20,
    width:"100%"
  },
});
