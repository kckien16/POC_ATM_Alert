import React from 'react'
import { StyleSheet, View } from 'react-native'

const Card = props => {
    return <View style={{ ...styles.card, ...props.style }}>{props.children}</View>;
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        marginTop: 20,
        width: "90%",
        padding:20,
    }
})

export default Card