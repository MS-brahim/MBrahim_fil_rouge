import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
    }
});
 
const LinkShared = ({onPress, title, color, backgroundColor,  borderBottomLeftRadius, borderTopLeftRadius,
    borderBottomRightRadius, borderTopRightRadius}) => {
    return (
        <View style={styles.container}>            
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
                >
                <Text style={[{
                    fontSize:16, 
                    borderWidth:1, 
                    borderColor:'white',
                    padding:5, 
                   
                    textAlign:'center'},
                    {backgroundColor,color, borderBottomLeftRadius, borderTopLeftRadius, borderBottomRightRadius, borderTopRightRadius}]}
                    >{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

 
export {LinkShared};