import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native';

const Button = props => {
    return <TouchableOpacity style={{ ...styles.button, ...props.style }}>{props.children}</TouchableOpacity>;
}

const styles = StyleSheet.create({
    button: {
        height: 44,
        backgroundColor: "#2190CD",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default Button;