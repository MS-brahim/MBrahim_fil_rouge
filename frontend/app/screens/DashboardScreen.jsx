import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { ListItem, Icon, Avatar, Card } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from "jwt-decode";
import { Spinner } from "../components";
import { connect } from 'react-redux';
import { getUserById } from '../actions'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#072B61',
    }
});


class Dashboard extends Component {
    state = {
        myAccount: undefined,
        fetching: false,
        expanded:false
    }
    
    componentDidMount(){
        try {
            AsyncStorage.getItem('TOKEN').then((token)=>{
                if (token) {
                    var jwtToken = jwt_decode(token)
                    this.props.getUserById(`${jwtToken.auth.userId._id}`);
                    this.setState({myAccount :jwtToken.auth, fetching:true})
                }
            })    
        } catch (error) {
            console.log(error);
        }
    }

    _logout(){
        try {
            AsyncStorage.removeItem('TOKEN').then(()=>{
                this.props.navigation.navigate('SignIn')
            })
        } catch (error) {
            console.log(error);
        }
    }

    chooseImg(){
        console.log('ok');

    }
    renderImage(){
        if (this.props.userId.image === undefined) {
            return (
                <Icon
                    name='settings'
                    size={22}
                    color='#e6e6e6'
                    style={{width:140, height:140 ,borderRadius:300,
                        marginVertical:8, borderColor:'#072b61d9', borderWidth:2,
                    }}
               />
            )
        } else {

            return (
                // <Image 
                //     source={{
                //         uri:this.state.myAccount?.image ,
                //     }}
                //     PlaceholderContent={<ActivityIndicator />}
                //     style={{width:140, height:140 ,borderRadius:300,
                //     marginVertical:8, borderColor:'#072b61d9', borderWidth:2,
                // }}
                // >
                //     <Avatar.Accessory activeOpacity={0.2} style={{backgroundColor:'#072b61d9', padding:11, top:15,right:-1}}/>
                // </Image>
                <Text>OKich</Text>
            )
        }
    }

    handlePress = () => {
        this.setState({expanded:!this.state.expanded})
    };

   
    render(){
        const myAccount = this.props.userId
        const fetching = this.props.fetching
        console.log(fetching);
        if (fetching) {
            return <Spinner/>
        } else{
        return (
            <View style={styles.container}>
                    
                <ScrollView>
                    <View 
                        style={{backgroundColor:'#E4A718', width:'100%', borderBottomEndRadius:30, borderBottomLeftRadius:30,
                        justifyContent:'center',
                        alignItems:'center',
                        }}>
                        {/* // Standard Avatar with accessory */}
                        <View
                            style={{
                                alignSelf:'center',
                                marginTop:'30px'
                            }}>
                           {this.renderImage()}
                            <Card.Divider/>
                            <Card.Title style={{position:'relative'}}>
                                {myAccount?.first_name} {myAccount?.last_name }
                                <Avatar.Accessory 
                                onPress={()=> this.chooseImg()}
                                 activeOpacity={0.2} style={{backgroundColor:'#072b61d9', padding:9}}/>
                            </Card.Title>                            
                        </View>
                    </View>
                    <View style={{marginVertical:15}}>
                        
                        <ListItem bottomDivider containerStyle={{backgroundColor:'#072B61'}} 
                                onPress={()=> this.props.navigation.navigate('HomeScreen')}
                            >
                                <Icon iconStyle={{color:'#cccccc'}} name='home'/>
                                <ListItem.Content>
                                <ListItem.Title style={{color:'#cccccc'}}>Accueil</ListItem.Title>
                                </ListItem.Content>
                                <ListItem.Chevron />
                        </ListItem>

                        <ListItem>


                        <ListItem.Title style={{color:'#cccccc'}}>Paramètres</ListItem.Title>
                        </ListItem>
                        <ListItem.Accordion
                            bottomDivider
                            containerStyle={{backgroundColor:'#072B61',color:'#cccccc'}}
                            isExpanded= {this.state.expanded}
                            title={<Text>Accordion title</Text>}
                            animation={{duration: 350,type: 'timing',}}
                            onPress={()=>{this.handlePress()}}>
                        

                            <ListItem bottomDivider containerStyle={{backgroundColor:'#072B61', color:'#cccccc'}} >

                                <Icon iconStyle={{color:'#cccccc'}} name='settings'/>
                                <ListItem.Content>
                                    <ListItem.Title style={{color:'#cccccc'}}>Modifier les coordonnées personnel</ListItem.Title>
                                </ListItem.Content>
                            </ListItem>
                            <ListItem bottomDivider containerStyle={{backgroundColor:'#072B61', color:'#cccccc'}} >

                                <Icon iconStyle={{color:'#cccccc'}} name='lock'/>
                                <ListItem.Content>
                                    <ListItem.Title style={{color:'#cccccc'}}>Modifier le mot de passe</ListItem.Title>
                                </ListItem.Content>
                            </ListItem>
                        </ListItem.Accordion>


                        <ListItem bottomDivider containerStyle={{backgroundColor:'#072B61'}} 
                                onPress={()=> this.props.navigation.navigate('HelpScreen')}
                            >
                                <Icon iconStyle={{color:'#cccccc'}} name='help'/>
                                <ListItem.Content>
                                    <ListItem.Title style={{color:'#cccccc'}}>Aide</ListItem.Title>
                                </ListItem.Content>
                                <ListItem.Chevron />
                        </ListItem>

                        <ListItem bottomDivider containerStyle={{backgroundColor:'#072B61'}} 
                                onPress={()=> this._logout()}
                            >
                                <Icon iconStyle={{color:'#cccccc'}} name='logout'/>
                                <ListItem.Content>
                                <ListItem.Title style={{color:'#cccccc'}}>Déconnexion</ListItem.Title>
                                </ListItem.Content>
                                <ListItem.Chevron />
                        </ListItem>
                    </View>                    
                </ScrollView>
            </View>
        )}
    }
}


const mapStateToProps = state => {
    return {
      error: state.userId.error,  
      fetching: state.userId.fetching,  
      userId: state.userId.userId,  
    };
};
  
const DashboardScreen = connect(mapStateToProps, {getUserById}) (Dashboard);
  
export {DashboardScreen};