import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Colors from '../../constants/Colors';

const WarningItem = props => {
  return (
    <View>
      <View style={styles.viewItem}>
        <View style={styles.viewTitle}>
          <Text style={styles.titles}>Ngưỡng cảnh báo rung:</Text>
        </View>
        <View style={styles.viewInput}>
          <TextInput style={styles.input}>{props.rung}</TextInput>
        </View>
      </View>
      <View style={styles.viewItem}>
        <View style={styles.viewTitle}>
          <Text style={styles.titles}>Ngưỡng cảnh báo rò điện (dòng):</Text>
        </View>
        <View style={styles.viewInput}>
          <TextInput style={styles.input}>{props.roDien}</TextInput>
        </View>
      </View>
      <View style={styles.viewItem}>
        <View style={styles.viewTitle}>
          <Text style={styles.titles}>Ngưỡng cảnh báo khói (mật độ):</Text>
        </View>
        <View style={styles.viewInput}>
          <TextInput style={styles.input}>{props.khoi}</TextInput>
        </View>
      </View>
      <View style={styles.viewItem}>
        <View style={styles.viewTitle}>
          <Text style={styles.titles}>Ngưỡng cảnh báo nhiệt độ (độ C):</Text>
        </View>
        <View style={styles.viewInput}>
          <TextInput style={styles.input}>{props.nhietDo}</TextInput>
        </View>
      </View>
      <View style={styles.viewItem}>
        <View style={styles.viewTitle}>
          <Text style={styles.titles}>Cảnh báo PIN (%):</Text>
        </View>
        <View style={styles.viewInput}>
          <TextInput style={styles.input}>{props.pin}</TextInput>
        </View>
      </View>
    </View>
  );
};

export default WarningItem;

const styles = StyleSheet.create({
  viewItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop:15,
   

  },
  viewTitle: {
    flex: 2,
    marginLeft: 25,
  },
  viewInput: {
    flex: 1,
    
  },
  titles: {
    fontSize: 14,
    fontWeight:'bold'
  },
  input: {
    width: 100,
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    textAlign: 'right',
    paddingRight: 20,
  },
});
