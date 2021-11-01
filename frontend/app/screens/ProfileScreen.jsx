import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { ListItem, Card, Rating, SocialIcon  } from 'react-native-elements'
import { MenuBar } from '../components';
import { connect } from 'react-redux';
import { getUserById } from '../actions'

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
    },
    textInfo: {
        color: '#E4A718'
    }
});


class Profile extends Component {
    componentDidMount(){
        this.props.getUserById('61367de0139793142ce35b28');
    }
    render(){
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{backgroundColor:'#E4A718', width:'100%', borderBottomEndRadius:30, borderBottomLeftRadius:30}}>
                        <View
                            style={{
                                alignSelf:'center',
                            }}>
                            <Card.Image 
                                source={{
                                    uri:this.props.userId.image ,
                                }}
                                style={{width:140, height:140 ,borderRadius:300,
                                marginVertical:8, borderColor:'#072B61', borderWidth:1,
                            }}
                            />
                        </View>
                        <Card.Divider/>
                        <Card.Title style={{ marginBottom: 0}}>
                            <Rating
                                ratingColor='orange'
                                ratingCount={5}
                                imageSize={17}
                                ratingBackgroundColor='#072B61'
                                startingValue={4}
                            />
                        </Card.Title>
                        <Card.Title>
                            <Text>
                                {this.props.userId.first_name} {this.props.userId.first_name}
                            </Text>
                        </Card.Title>
                    </View>
                    <View style={{marginVertical:15}}>

                        <ListItem bottomDivider containerStyle={{backgroundColor:'#072B61', paddingBottom:10}}>
                            <ListItem.Content style={{color:'#E4A718', flexDirection:'row'}}>
                                <SocialIcon
                                    type='inbox'
                                    light
                                />
                                <SocialIcon
                                    type='phone'
                                    light
                                />
                                <SocialIcon
                                    type='whatsapp'
                                    light
                                />
                                <SocialIcon
                                    type='google'
                                    light
                                />
                            </ListItem.Content>
                        </ListItem>

                        <ListItem bottomDivider containerStyle={{backgroundColor:'#072B61', paddingBottom:10}}>
                            <ListItem.Content style={{color:'#E4A718' }}>
                                <Text style={styles.textInfo}>E-mail :</Text>
                                <ListItem.Title style={{color:'#cccccc', marginLeft:10}}><Text>{this.props.userId.email}</Text></ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                        <ListItem bottomDivider containerStyle={{backgroundColor:'#072B61', paddingBottom:10}}>
                            <ListItem.Content>
                            <Text style={styles.textInfo}>Phone :</Text>
                            <ListItem.Title style={{color:'#cccccc', marginLeft:10}}><Text>{this.props.userId.phone}</Text></ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                        <ListItem bottomDivider containerStyle={{backgroundColor:'#072B61', paddingBottom:10}}>
                            <ListItem.Content>
                            <Text style={styles.textInfo}>Adresse :</Text>
                            <ListItem.Title style={{color:'#cccccc', marginLeft:10}}><Text>{this.props.userId.address}</Text></ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                        <ListItem bottomDivider containerStyle={{backgroundColor:'#072B61', paddingBottom:10}}>
                            <ListItem.Content>
                            <Text style={styles.textInfo}>Date Né :</Text>
                            <ListItem.Title style={{color:'#cccccc', marginLeft:10}}><Text>{ new Date(Date.parse(this.props.userId.date_birth)).toDateString()}</Text></ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                        <ListItem bottomDivider containerStyle={{backgroundColor:'#072B61', paddingBottom:10}}>
                            <ListItem.Content>
                            <Text style={styles.textInfo}>Permis :</Text>
                            <ListItem.Title style={{color:'#cccccc', marginLeft:10}}>B, C</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
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


const mapStateToProps = state => {
  return {
    error: state.userId.error,  
    fetching: state.userId.fetching,  
    userId: state.userId.userId,  
    user:state.auth.user,
  };
};

const ProfileScreen = connect(mapStateToProps, {getUserById}) (Profile);

export {ProfileScreen};