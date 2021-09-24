import React from 'react'
import { StyleSheet, View } from 'react-native'

const Card = props => {
    return <View style={{ ...styles.card, ...props.style }}>{props.children}</View>;
}

const styles = StyleSheet.create({
    card: {
        width:"89%",
        padding:16,
        backgroundColor:"#FFFFFF",
        borderRadius:12,
        marginBottom:0,
       
    }
})

export default Card