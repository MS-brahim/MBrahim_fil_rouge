import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20
    }
});
 
const Spinner = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={22} color="#fff"/>
        </View>
    );
}

 
export {Spinner};