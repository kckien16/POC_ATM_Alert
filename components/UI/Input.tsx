import React from 'react'
import { StyleSheet, View } from 'react-native'

const Input = props => {
    return <View style={{ ...styles.input, ...props.style }}>{props.children}</View>;
}

const styles = StyleSheet.create({
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

export default Input;