import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
const Drawer = createDrawerNavigator();
import {ButtonShared} from './'

const styles = StyleSheet.create({
    bgLogo:{
        width:120,
        backgroundColor: '#E4A718',
        borderBottomLeftRadius:100,
        position:'absolute',
        top:-10,
        right:-10,
        padding:7,
        justifyContent:'center',
        alignItems:'flex-end'
    }
});
 
const RightComponentLogo = () =>{
    return (
        <View style={styles.bgLogo}>
            <Image source={require('../../assets/logo2.png')} style={{width:70, height:35, justifyContent:'center', alignSelf:'center'}}/>
        </View>
    )
}

class HeaderComponent extends Component {

    componentDidMount(){
        // this.props.navigation.setParams({ handleSave: this._logout });
    }
  
    render() { 
        return (
            <Header 
                // leftComponent={this.LogoutComponent()}
                // leftComponent={{ icon: 'menu', color: '#E4A718' }}
                leftComponent={{ text: this.props.text, style: { color: '#fff', fontSize:18 } }}
                rightComponent={ <RightComponentLogo/> }
                backgroundColor='none'
                containerStyle={{
                    borderBottomWidth:0,
                    
                }}
            />
        );
    }
}
 
export {HeaderComponent};