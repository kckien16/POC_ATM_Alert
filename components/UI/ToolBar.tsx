import React from 'react'
import { StyleSheet, View } from 'react-native'

const ToolBar = props => {
    return <View style={{ ...styles.toolbar, ...props.style }}>{props.children}</View>;
}

const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: "#ffff", 
        height: 68,
        flexDirection:"row",
    }
})

export default ToolBar