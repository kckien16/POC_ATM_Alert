import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native';

const ButtonLogin = props => {
    return <TouchableOpacity style={{ ...styles.button, ...props.style }}>{props.children}</TouchableOpacity>;
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#2190CD",
        borderRadius: 8,
        display:'flex',
        padding: 24,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center"
    }
})

export default ButtonLogin;