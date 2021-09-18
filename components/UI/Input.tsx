import React, {FC, useState} from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';
import Colors from '../../constants/Colors';

interface Props {
  onChangeText: any;
  placeholder: any;
  value: any;
  onBlur: any;
  secureTextEntry: any;
}


const Input: FC<Props> = props => {
  return (
    <View style={styles.container}>
        <TextInput
          style={{...styles.input
          }}
          onChangeText={props.onChangeText}
          placeholder={props.placeholder}
          value={props.value}
          onBlur={props.onBlur}
          secureTextEntry={props.secureTextEntry}
          ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
<<<<<<< HEAD
  container: {
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
  },
  input: {
    marginTop: 15,
    backgroundColor: '#FFFF',
    borderRadius: 8,
    alignSelf: 'center',
    height: 44,
    width: '89%',
    paddingLeft: 10,
  },
  errorInput:{
    borderWidth:1,
    borderColor:Colors.red
  }
});
=======
    input: {
    
         marginTop:16,
        backgroundColor: '#FFFFFF',
        borderRadius:8,
        flexDirection: 'row',
        alignSelf: 'center',
        width: 362,
        height: 44,
        display:"flex"
    
    }
})
>>>>>>> 58855e8938a6181f9ae40e6751a540dd09e264d7

export default Input;
