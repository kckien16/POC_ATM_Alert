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

export default Input;
