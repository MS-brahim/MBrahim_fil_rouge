import React, { Component } from 'react';
import { View, Text, StyleSheet,
    ScrollView, Image, 
} from 'react-native';
import { CheckBox, Input } from 'react-native-elements';
import { MenuBar, ButtonShared } from '../components';
import { createServiceItem } from '../actions'
import {connect} from 'react-redux'


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
        this.state = {
            depart:'',
            arival:'',
            address_depart:'',
            address_arival:'',
            date_depart:'',
            date_arival:'',
            checked:false,
            weight: 0,
            description: '',
            image: '',
            userId: '61367de0139793142ce35b28'
        };
    }

    _onPublicPressed(){
        // console.log(this.state);
        this.props.createServiceItem({
            depart: this.state.depart, 
            arival: this.state.arival, 
            address_arival: this.state.address_arival, 
            address_depart: this.state.address_depart, 
            date_depart: this.state.date_depart, 
            date_arival: this.state.date_arival,
            weight: this.state.weight, 
            description: this.state.description, 
            image: this.state.image, 
            user_id: this.state.user_id
        })
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
                            onChangeText={(depart)=> this.setState({depart})}
                        />
                        <Input
                            placeholder='Destination'
                            inputStyle={{color:'#cccccc', paddingLeft:5}}
                            onChangeText={(arival)=> this.setState({arival})}
                        />
                        <Input
                            placeholder='Adresse departure'
                            inputStyle={{color:'#cccccc', paddingLeft:5}}
                            onChangeText={(address_depart)=> this.setState({address_depart})}
                        />
                        <Input
                            placeholder='Adresse destination'
                            inputStyle={{color:'#cccccc', paddingLeft:5}}
                            onChangeText={(address_arival)=> this.setState({address_arival})}
                        />
                        <Input
                            placeholder='Date departure'
                            inputStyle={{color:'#cccccc', paddingLeft:5}}
                            onChangeText={(date_depart)=> this.setState({date_depart})}
                        />
                        <Input
                            placeholder='Date destination'
                            inputStyle={{color:'#cccccc', paddingLeft:5}}
                            onChangeText={(date_arival)=> this.setState({date_arival})}
                        />
                        <Input
                            placeholder='Poids en Kg'
                            disabled={this.state.checked}
                            inputStyle={{color:'#cccccc', paddingLeft:5}}
                            onChangeText={(weight)=> this.setState({weight})}
                        />
                        <Input
                            placeholder='Description'
                            disabled={this.state.checked}
                            inputStyle={{color:'#cccccc', paddingLeft:5}}
                            onChangeText={(description)=> this.setState({description})}
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