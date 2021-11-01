import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
 
const styles = StyleSheet.create({
    SocialBtn: {
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flexDirection :'row'
    }
});
 
const SocialButtonShared = ({title, btnType, color, backgroundColor}) => {
    return (
        <TouchableOpacity style={[styles.SocialBtn, {backgroundColor}]}>
            <View style={{paddingRight:10}}>
                <Icon name={btnType} size={22} color={color}></Icon>
            </View>
            <Text>{title}</Text>
        </TouchableOpacity>
    );
}
 
export {SocialButtonShared};