import React from 'react'
import { StyleSheet, View } from 'react-native'

const ViewItem = props => {
    return <View style={{ ...styles.item, ...props.style }}>{props.children}</View>;
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row', margin: 20
    }
})

export default ViewItem;