import React from 'react'
import { StyleSheet, View } from 'react-native'

const Input = props => {
    return <View style={{ ...styles.input, ...props.style }}>{props.children}</View>;
}

const styles = StyleSheet.create({
    input: {
        marginTop: 30,
        backgroundColor: '#f4f6f7',
        borderRadius: 10,
        alignSelf: 'center',
        width: 330,
    }
})

export default Input