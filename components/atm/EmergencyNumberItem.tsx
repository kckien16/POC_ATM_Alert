import React, {FC, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Emergency = props => {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.btnDel}>
          <FontAwesome name="minus-circle" size={24} color="#FF5B5B" />
        </TouchableOpacity>
        <Text style={styles.title}>{props.phone_emergency}</Text>
      </View>
    </View>
  );
};

export default Emergency;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:3,
    borderBottomColor:"black",
    borderBottomWidth: 0.2,
    paddingBottom:8,
    paddingTop:8
  },
  btnDel: {
    marginLeft: 2,
    marginTop: 2,
  },
  title: {
    fontSize: 16,
    marginLeft: 10,
  },
  br: {
    opacity: 0.1,
    width: '100%',
  },
});
