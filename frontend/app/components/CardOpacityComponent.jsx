import React from 'react';
import { View, StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
    cardSign:{
        borderRadius:15,
        backgroundColor: '#eef0f25c',
        padding:20,
        margin:10
    },
});
 
const CardOpacity = (props) => {
    return (
        <View style={styles.cardSign}>
            {props.children}
        </View>
    );
}

 
export {CardOpacity};