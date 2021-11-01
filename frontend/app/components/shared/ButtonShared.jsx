import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
const ButtonShared = (props) => {
    return (
      <View>            
          <TouchableOpacity
          style={styles.button}
          onPress={props.onPress}
          disabled={props.disabled}
          >
          <Text style={{color:'white',fontSize:16}}>{props.text}</Text>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: "#E4A718",
      padding: 10,
      borderRadius: 10,
      alignItems: 'center',
      fontSize:18,
    }
});

export {ButtonShared}