import React from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const EmergencyNumberItem = props => {
  return (
    <View
      style={styles.container}>
      <TouchableOpacity style={styles.btnDel}>
        <FontAwesome name="minus-circle" size={24} color="#FF3333" />
      </TouchableOpacity>
      <Text style={styles.title}>{props.phone_emergency}</Text>
    </View>
  );
};

export default EmergencyNumberItem;

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    btnDel:{
        marginLeft: 15
    },
    title:{
        fontSize: 16, 
        marginLeft: 10
    }
});
