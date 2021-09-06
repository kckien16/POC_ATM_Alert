import React from 'react'
import { StyleSheet, View } from 'react-native'

const Button = props => {
    return <View style={{ ...styles.button, ...props.style }}>{props.children}</View>;
}

const styles = StyleSheet.create({
    button: {
        height: 40,
        backgroundColor: "#3399FF",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default Button