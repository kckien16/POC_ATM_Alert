import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Colors from '../../constants/Colors';
import { useTranslation } from 'react-i18next';

import FONTS  from '../../constants/Fonts';

const WarningInformation = props => {
  const{t,i18n}=useTranslation()

  const [isEdittable ,setisEdittable ] = useState(false);

 
  return (
    <View style={{flex:1,width:"95%"}}>
      <View style={styles.viewItem}>
        <View style={styles.viewTitle}>
          <Text style={styles.titles}
          
          >{t("vibration-warning-threshold")}</Text>
        </View>
        <View style={styles.viewInput}>
          <TextInput
          editable={false} selectTextOnFocus={false} 
          placeholder='1500'
          style={styles.input}></TextInput>
        </View>
      </View>
      <View style={styles.viewItem}>
        <View style={styles.viewTitle}>
          <Text style={styles.titles}>{t("leakage-alarm-threshold")}</Text>
        </View>
        <View style={styles.viewInput}>
          <TextInput
          placeholder='1500' 
          editable={false} selectTextOnFocus={false} 
           style={styles.input }
          
           />
        </View>
      </View>
      <View style={styles.viewItem}>
        <View style={styles.viewTitle}>
          <Text style={styles.titles}>{t("smoke-alarm-threshold")}</Text>
        </View>
        <View style={styles.viewInput}>
          <TextInput
          editable={false} selectTextOnFocus={false} 
          placeholder='70'
           style={styles.input}></TextInput>
        </View>
      </View>
      <View style={styles.viewItem}>
        <View style={styles.viewTitle}>
          <Text style={styles.titles}>{t("temperature-warning-threshold")}</Text>
        </View>
        <View style={styles.viewInput}>
          <TextInput
          editable={false} selectTextOnFocus={false} 
          placeholder='70'
           style={styles.input}></TextInput>
        </View>
      </View>
      <View style={styles.viewItem}>
        <View style={styles.viewTitle}>
          <Text style={styles.titles}>{t("battery-warning")}</Text>
        </View>
        <View style={styles.viewInput}>
          <TextInput
         editable={false} selectTextOnFocus={false} 
          placeholder='70'
          style={styles.input}></TextInput>
        </View>
      </View>
    </View>
  );
};

export default WarningInformation;

const styles = StyleSheet.create({
  viewItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '120%',
    marginTop:8,
  
  },
  viewTitle: {
    flex: 1,
    marginLeft: 25,
  },
  viewInput: {
    flex: 1,
    alignItems:"center",
    marginRight:'5%'

    
  },
  titles: {
    ...FONTS.h6
    
  },
  input: {
    width: 116,
    height: 44,
    backgroundColor:'#DBE8F5',
    borderRadius: 8,
    textAlign: 'right',
    paddingRight:16,
    ...FONTS.h6
  },
});
