import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
 
const styles = StyleSheet.create({
    input: {
        height: 44,
        padding:10,
        borderWidth:1,
        borderColor:'white',
        marginTop:20,
        borderRadius:15,
        color:'white',
        fontSize:16,
        width:'auto'
    },
});
 
const Input = (props) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={props.placeholder}
            secureTextEntry={props.secureTextEntry}
            onChangeText={props.onChangeText}
            placeholderTextColor="white"
            disabled={props.isDisbled}
        />
    );
}

 
export {Input};