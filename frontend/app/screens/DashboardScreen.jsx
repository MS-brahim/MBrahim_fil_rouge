import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { ListItem, Icon, Image, Avatar, Card } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import { getUserById } from '../actions'
const list = [
    {
      title: 'Home',
      icon: 'home',
      routeList:'HomeScreen'
    },
    {
      title: 'Paramètres',
      icon: 'settings',
      routeList:'ProfileScreen'
    },
    {
      title: 'Aide',
      icon: 'help',
      routeList:'InboxScreen'
    },
  
  ]

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#072B61',
    }
});


class Dashboard extends Component {

    
    componentDidMount(){
       
       this.props.getUserById('61367de0139793142ce35b28');
       
    }

    _logout(){
        AsyncStorage.removeItem('TOKEN')
        this.props.navigation.navigate('SignIn')
    }
    render(){
        console.log(this.props.userId);
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
                            }}>
                            <Image 
                                source={{
                                    uri:this.props.userId.image ,
                                }}
                                PlaceholderContent={<ActivityIndicator />}
                                style={{width:140, height:140 ,borderRadius:300,
                                marginVertical:8, borderColor:'#072b61d9', borderWidth:2,
                            }}
                            >
                                <Avatar.Accessory activeOpacity={0.2} style={{backgroundColor:'#072b61d9', padding:11, top:15,right:-1}}/>
                            </Image>
                            <Card.Divider/>
                            <Card.Title style={{position:'relative'}}>
                                {this.props.userId.first_name} {this.props.userId.last_name }
                                <Avatar.Accessory activeOpacity={0.2} style={{backgroundColor:'#072b61d9', padding:9}}/>
                            </Card.Title>
                            
                        </View>
                    </View>
                    <View style={{marginVertical:15}}>
                        {
                        list.map((item, i) => (
                            <ListItem key={i} bottomDivider containerStyle={{backgroundColor:'#072B61'}} 
                                onPress={()=> this.props.navigation.navigate(item.routeList)}
                            >
                                <Icon iconStyle={{color:'#cccccc'}} name={item.icon} />
                                <ListItem.Content>
                                <ListItem.Title style={{color:'#cccccc'}}>{item.title}</ListItem.Title>
                                </ListItem.Content>
                                <ListItem.Chevron />
                            </ListItem>
                        ))
                        }
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
        )
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