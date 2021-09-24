import React  from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { useTranslation } from 'react-i18next';
import FONTS  from '../../constants/Fonts';



const InformationItem = props => {
  const{t,i18n} = useTranslation();
  return (
    <View >
      <View style={styles.viewItem}>
        <View style={{flex: 2}}>
          <Text style={styles.titles}>{t("imei")}:</Text>
        </View>
        <View style={{flex: 3}}>
          <Text style={styles.title}>{props.imei}</Text>
        </View>
      </View>
      <View style={styles.viewItem}>
        <View style={{flex: 2}}>
          <Text style={styles.titles}>{t("sim")}:</Text>
        </View>
        <View style={{flex: 3}}>
          <Text style={styles.title}>{props.sim}</Text>
        </View>
</View>

       <View style={styles.viewItem}>
        <View style={{flex: 2}}>
          <Text style={styles.titles}>{t("status")}:</Text>
        </View>
        <View style={{flex: 3}}>
          <Text style={styles.title}>{props.tinhTrang}</Text>
        </View>
      </View>

      <View style={styles.viewItem}>
        <View style={{flex: 2}}>
          <Text style={styles.titles}>{t("type-of-device")}:</Text>
        </View>
        <View style={{flex: 3}}>
          <Text style={styles.title}>{props.loaiTB}</Text>
        </View>
      </View>
      <View style={styles.viewItem}>
        <View style={{flex: 2}}>
          <Text style={styles.titles}>{t("device-name")}:</Text>
        </View>
        <View style={{flex: 3}}>
          <Text style={styles.title}>{props.tenTB}</Text>
        </View>
      </View>
      <View style={styles.viewItem}>
        <View style={{flex: 2}}>
          <Text style={styles.titles}>{t("place")}:</Text>
        </View>
        <View style={{flex: 3}}>
          <Text style={styles.title}>{props.diaChi}</Text>
        </View>
      </View>
      <View style={styles.viewItem}>
        <View style={{flex: 2}}>
          <Text style={styles.titles}>{t("activation-date")}:</Text>
        </View>
        <View style={{flex: 3}}>
          <Text style={styles.title}>{props.ngayKH}</Text>
        </View>
      </View>

      <View style={styles.viewItem}>
        <View style={{flex: 2}}>
          <Text style={styles.titles}>{t("connection")}:</Text>
        </View>
        <View style={{flex: 3}}>
          <Text style={styles.title}>{props.ketnoi}</Text>
        </View>
   </View>
  
    </View>
  );
};

export default InformationItem;

const styles = StyleSheet.create({
  titles: {
    ...FONTS.h2,
    opacity:0.8,
  
    
    
  },
  title: {
    
    width: 179,
    opacity:.5,
    left:"15%",
    ...FONTS.h14
  },
  viewItem: {
    flexDirection: 'row',
    marginBottom: 20,
    width:"100%"
  },
});
