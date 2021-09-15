import React from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FONTS  from '../../constants/Fonts';

const Receiving = props => {
  return (
    <View>
      <View
      style={styles.container}>
     
      <Text style={styles.title}>{props.phone_receiving}</Text>
    </View>
    </View>
    
  );
};

export default Receiving;

const styles = StyleSheet.create({
    container:{
      flexDirection: 'row',
      alignItems: 'center',
      marginTop:3,
      borderBottomColor:"black",
      borderBottomWidth: 0.2,
      paddingBottom:8,
      paddingTop:8
        
    },
    btnDel:{
      marginLeft:2,
      marginTop:2,
    },
    title:{
        ...FONTS.h3,
        marginLeft: 10
    },
    br: {
      opacity: 0.1,
      width: '100%',
    },
});
