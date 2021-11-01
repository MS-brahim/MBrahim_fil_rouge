import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
 
const MenuBar = (props) => {
    
    return (
        <Icon name={props.name} size={24} color='#E4A718' onPress={props.onPress}/>
    );

}
 
export {MenuBar};