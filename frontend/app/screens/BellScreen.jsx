import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import { MenuBar, CardOpacity } from '../components';
import { ListItem, Avatar, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

const DATA = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
]

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#072B61'
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

class BellScreen extends Component {
    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <ListItem containerStyle={{backgroundColor:'#072B61', fontSize:13}} bottomDivider onPress={()=> this.props.navigation.navigate('DiscordScreen')}>
          <Avatar source={{uri: item.avatar_url}} />
          <ListItem.Content>
              <ListItem.Title style={{color:'white'}}>{item.name}</ListItem.Title>
              <ListItem.Subtitle style={{color:'grey'}}>{item.subtitle}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
    )
    render(){

        return (
            <View style={styles.container}>
              <ScrollView>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={DATA}
                    renderItem={this.renderItem}
                    
                />
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
 
export { BellScreen };