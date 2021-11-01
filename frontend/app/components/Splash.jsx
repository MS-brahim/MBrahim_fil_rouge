import React,{Component} from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#072B61'
        
    },
    loadText:{
        color:'#fff',
        fontSize:20
    }
});
 
class Splash extends Component {
    
    componentDidMount(){
        AsyncStorage.getItem('TOKEN').then((token ) => {
            if (token) {
                this.props.navigation.navigate('HomeScreen')
            } else {
                this.props.navigation.navigate('SignIn')
            }
        })
    }

    render(){
        return (
            <View style={styles.container}>
                <ActivityIndicator size={22} color={'white'}/>
                <Text style={styles.loadText} >Loading...</Text>
            </View>
        )
    }
    ;
}

 
export default Splash;