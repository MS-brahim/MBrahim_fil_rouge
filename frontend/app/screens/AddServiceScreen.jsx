import React, { Component } from 'react';
import { View, Text, StyleSheet,
    ScrollView, Image, 
} from 'react-native';
import { CheckBox, Input } from 'react-native-elements';
import { MenuBar, ButtonShared } from '../components';
import { createServiceItem } from '../actions'
import {connect} from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';


// import { TabView, SceneMap } from 'react-native-tab-view';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#072B61',

    },
    menuBar:{
        position:'absolute',
        bottom:0,
        backgroundColor:'#072B61',
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
    }
});

class AddService extends Component {

    constructor(props) {
        super(props);
        console.log(AsyncStorage.getItem('TOKEN'));
        
        this.state = {
            departure:'',
            destination:'',
            address_depart:'',
            address_dest:'',
            date_depart:'',
            date_dest:'',
            checked:false,
            weight: '0',
            image: '',
            user_id: '61367de0139793142ce35b28'
        };
    }

    _onPublicPressed(){
        const data = {
            departure: this.state.departure, 
            destination: this.state.destination, 
            address_dest: this.state.address_dest, 
            address_depart: this.state.address_depart, 
            date_depart: this.state.date_depart, 
            date_dest: this.state.date_dest,
            weight: this.state.weight, 
            image: this.state.image, 
            user_id: this.state.user_id
        }
        this.props.createServiceItem(data)
    }

    // RENDER BUTTON 
    _renderButton(){
        return(
            <View style={{marginTop:20}}>
                <ButtonShared text='Publier'
                    onPress={ this._onPublicPressed.bind(this) }
                />
            </View>
        )
    }
    
    render(){
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{padding:20, margin:10, marginBottom:30}}>
                        <Text style={{color:'#cccccc', marginVertical:10, alignSelf:'center', fontSize:18, fontWeight:'bold'}}>Ajouter une destination</Text>
                        <View style={{ margin:2}}>
                            <CheckBox
                                title={<Text style={{color:'#cccccc', marginLeft:10, fontSize:15}}>je suis conducteur</Text>}
                                checked={this.state.checked}
                                onChangeText={(checked)=> this.setState({checked})}
                                checkedColor="#E4A718"
                                onPress={() => this.setState({checked: !this.state.checked})}
                                containerStyle={{backgroundColor:'#072B61',borderColor:'#072B61'}}
                            />
                        </View>
                        <Input
                            placeholder='Departure'
                            inputStyle={{color:'#cccccc', paddingLeft:5}}
                            onChangeText={(departure)=> this.setState({departure})}
                        />
                        <Input
                            placeholder='Destination'
                            inputStyle={{color:'#cccccc', paddingLeft:5}}
                            onChangeText={(destination)=> this.setState({destination})}
                        />
                        <Input
                            placeholder='Adresse departure'
                            inputStyle={{color:'#cccccc', paddingLeft:5}}
                            onChangeText={(address_depart)=> this.setState({address_depart})}
                        />
                        <Input
                            placeholder='Adresse destination'
                            inputStyle={{color:'#cccccc', paddingLeft:5}}
                            onChangeText={(address_dest)=> this.setState({address_dest})}
                        />
                        <Input
                            placeholder='Date departure'
                            inputStyle={{color:'#cccccc', paddingLeft:5}}
                            onChangeText={(date_depart)=> this.setState({date_depart})}
                        />
                        <Input
                            placeholder='Date destination'
                            inputStyle={{color:'#cccccc', paddingLeft:5}}
                            onChangeText={(date_dest)=> this.setState({date_dest})}
                        />
                        <Input
                            placeholder='Poids en Kg'
                            disabled={this.state.checked}
                            inputStyle={{color:'#cccccc', paddingLeft:5}}
                            onChangeText={(weight)=> this.setState({weight})}
                        />
                        <Input
                            placeholder='Image'
                            disabled={this.state.checked}
                            inputStyle={{color:'#cccccc', paddingLeft:5}}
                            onChangeText={(image)=> this.setState({image})}
                        />
                        {this._renderButton()}
                    </View>
                </ScrollView>
    
                <View style={styles.menuBar}>
                    <MenuBar name="home" onPress={()=> this.props.navigation.navigate('HomeScreen')}/>
                    <MenuBar name="bell" onPress={()=> this.props.navigation.navigate('BellScreen')}/>
                    <MenuBar name="plus" onPress={()=> this.props.navigation.navigate('AddServiceScreen')}/>
                    <MenuBar name="inbox" onPress={()=> this.props.navigation.navigate('InboxScreen')}/>
                    <MenuBar name="user" onPress={()=> this.props.navigation.navigate('DashboardScreen')}/>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
     return {
        error:state.serviceAdd.error,
        adding:state.serviceAdd.adding,
        added:state.serviceAdd.added,
    };
};

const AddServiceScreen = connect(mapStateToProps, {createServiceItem}) (AddService);
export { AddServiceScreen }