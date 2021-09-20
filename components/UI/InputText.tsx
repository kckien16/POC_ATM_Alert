import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Colors from '../../constants/Colors'

interface Props {
  onChangeText:(text:string)=>void;
    placeholder: any;
    value: any;
    onBlur: any;
    secureTextEntry: any;
  }
export default function LoginInput({error,...ortherProps}){
    const validationColor = ()=>{
        if (error) {
            return Colors.red
        }else{
            return Colors.blue
        }
    };

    return(
        <View style={styles.container}>
        <TextInput
          style={{...styles.input, borderWidth:1,borderColor:validationColor()
          }}
          {...ortherProps}
          ></TextInput>
    </View>
    )

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
      },
      input: {
        marginTop: 10,
        backgroundColor: '#FFFF',
        borderRadius: 8,
        alignSelf: 'center',
        height: 44,
        width: '95%',
        paddingLeft: 10,
      },
      errorInput:{
        borderWidth:1,
        borderColor:Colors.red
      }
})
