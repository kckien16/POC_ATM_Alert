import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import Colors from '../../constants/Colors';
interface Props {
    onChangeText:(text:string)=>void;
}

export default function InputPhone({error,...ortherProps}) {
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
          style={{...styles.input, borderWidth:1, borderColor:validationColor()
          }}
          {...ortherProps}
          ></TextInput>
    </View>
    )

}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        paddingLeft:10,
        paddingRight:10
    },
    input: {
        backgroundColor: Colors.whitee,
        borderRadius:8,
        height: 40,
        width: "100%",
        paddingLeft:10
    }
})
