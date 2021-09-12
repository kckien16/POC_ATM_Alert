import React from 'react';
import {StyleSheet, Text, View,TouchableOpacity,Alert} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';




const EmergencyNumberItem = (props: { phone_emergency: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {


  return (
    <View
      style={styles.container}>
      <TouchableOpacity style={styles.btnDel}
      onPress={() => Alert.alert('Simple Button pressed')}
      

      >


      
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
      marginLeft:2,
      marginTop:2,
    },
    title:{
        fontSize: 16, 
        marginLeft: 10
    }
});


