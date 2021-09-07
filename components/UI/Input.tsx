import React from 'react'
import { StyleSheet, View } from 'react-native'

const Input = props => {
    return <View style={{ ...styles.input, ...props.style }}>{props.children}</View>;
}

const styles = StyleSheet.create({
    input: {
        marginTop: 15,
        backgroundColor: '#FFFF',
        borderRadius:10,
        alignSelf: 'center',
        height: 40,
        width: 340,
    }
})

export default Input