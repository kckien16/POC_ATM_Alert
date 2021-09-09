import React from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FONTS  from '../../constants/Fonts';

const Receiving = props => {
  return (
    <View
      style={styles.container}>
      <TouchableOpacity style={styles.btnDel}>
        <FontAwesome name="minus-circle" size={20} color="#FF5B5B" />
      </TouchableOpacity>
      <Text style={styles.title}>{props.phone_receiving}</Text>
    </View>
  );
};

export default Receiving;

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        height:24
        
    },
    btnDel:{
      marginLeft:2,
      marginTop:2,
    },
    title:{
        ...FONTS.h3,
        marginLeft: 10
    }
});
