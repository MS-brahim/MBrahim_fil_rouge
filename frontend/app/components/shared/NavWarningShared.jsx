import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'

const NavWarinigShared = () => {
    return <View style={styles.bgHead}></View>
}

const styles = StyleSheet.create({
    bgHead : {
        height:260,
        width:"110%",
        backgroundColor: '#E4A718',
        position: 'absolute',
        borderBottomLeftRadius: Dimensions.get('window').width /1.4,
        borderBottomRightRadius: Dimensions.get('window').width /1.5,

    }
});

export {NavWarinigShared}