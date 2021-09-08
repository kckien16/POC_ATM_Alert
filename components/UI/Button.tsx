import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native';

const Button = props => {
    return <TouchableOpacity style={{ ...styles.button, ...props.style }}>{props.children}</TouchableOpacity>;
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