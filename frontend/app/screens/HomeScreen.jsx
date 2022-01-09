import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  View, StyleSheet, ScrollView, Alert, Modal, FlatList,
  Text, SafeAreaView
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import {
  ButtonShared,
  HeaderComponent,
  MenuBar, Item, Spinner
} from "../components";
import { getServicesItems, searchFromTo } from '../actions'
import { Input, Button, Icon } from 'react-native-elements';


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

    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 10,
      width:330,
      backgroundColor: "#fff",
      borderRadius: 20,
      padding: 20,
      alignItems: "center",
      shadowColor: "#000",
      shadowOpacity: 0.25,
      position:'relative'
    }

});

 
class Home extends Component {
  state = {
    modalVisible: false,
    fromS:'',
    toS:'',
  };

  componentDidMount(){
    this.props.getServicesItems();
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  search(){
    const { fromS, toS } = this.state
    this.props.searchFromTo({fromS, toS}) 
    console.log(this.props.error);
    this.setState({ modalVisible: false });
  }

  _renderItem = ({ item }) => (
          
    
    <Item 
      showDetail={()=>{
        this.props.navigation.navigate('ServiceDetail', { itemID: item})
        
      }}
      userProfile={()=> 
        {
          // console.log(item._id)
        this.props.navigation.navigate('ProfileScreen', { itemID: item})
        
        }}
      title={item.user_id.first_name  +' '+ item.user_id.last_name.toUpperCase() }
      from={item.departure} 
      to={item.destination}
      dateDepart={item.date_depart}
      dateDest={item.date_dest}
      image={item.user_id.image}
    /> 
  );

  spinnerLoad(){
    const { fetching, services  } = this.props;
    if (fetching) {
      return <Spinner/>
    }
    else{
      return (
        <SafeAreaView>
          <FlatList
            keyExtractor={item => item._id}
            data={services}
            renderItem={this._renderItem}
          />
        </SafeAreaView>
    )
    }
  }

  render() { 
    const { modalVisible } = this.state;    
    // const { fetching, services, user  } = this.props;

    return (
      <View style={styles.container}>
        <HeaderComponent text="Accueil"/>
        <StatusBar style="light" />
            <View style={{margin:10, marginTop:20, width:130}}>
              <Button
                onPress={()=> {this.setModalVisible()}} 
                title="Rechercher"
                buttonStyle={{borderRadius: 10,backgroundColor:'#E4A718'}}
                iconRight
                iconPosition="right"
                icon={
                  <Icon
                    name="search"
                    size={20}
                    color="white"
                    style={{marginLeft:5}}
                  />
                }
              />
            </View>
        <ScrollView>
          <View style={{marginBottom:50}}>
          

            <View style={styles.centeredView}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  this.setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Input
                        placeholder='Ville depart'
                        onChangeText={(fromS)=> this.setState({fromS})}
                    />
                    <Input
                        placeholder='Ville destination'
                        onChangeText={(toS)=> this.setState({toS})}
                    />
                    <View style={{flexDirection:'row'}}>
                      <ButtonShared 
                        text='Recherche'
                        onPress={() => this.search()}
                      />
                      <Button
                        title='x'
                        buttonStyle={{width:50, backgroundColor:'black', borderRadius:10, marginLeft:5}}
                        onPress={() => this.setState({ modalVisible: false })}
                        style={{marginHorizontal:3}}
                      />
                      
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
            {this.spinnerLoad()}
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
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.serviceList.error,  
    fetching: state.serviceList.fetching,  
    services: state.serviceList.services,  
  };
};
 
const HomeScreen = connect(mapStateToProps, {getServicesItems, searchFromTo}) (Home);
export { HomeScreen }
