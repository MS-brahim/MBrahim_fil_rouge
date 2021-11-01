import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  View, StyleSheet, ScrollView, Alert, Modal,
  Text, Pressable, SafeAreaView, FlatList
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import {
  ButtonShared, CardOpacity,
  HeaderComponent,
  MenuBar, Item, Spinner
} from "../components";
import { getServicesItems, getUserById } from '../actions'
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
    modalVisible: false
  };

  componentDidMount(){
    this.props.getServicesItems();
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  search(){
    // Alert.alert("Search")
    console.log('search');
  }

  _renderItem = ({ item }) => (
          
    
    <Item 
      OnReservation={()=>{
        this.props.navigation.navigate('ReservationScreen', { itemID: item})
      }}
      showDetail={()=> 
        {
          // console.log(item._id)
        this.props.navigation.navigate('ServiceDetail', { itemID: item})
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
      return <FlatList
      keyExtractor={item => item._id}
      data={services}
      renderItem={this._renderItem}
    />
    }
  }

  render() { 
    const { modalVisible } = this.state;    
    // const { fetching, services, user  } = this.props;

    return (
      <View style={styles.container}>
        <HeaderComponent text="Accuiel"/>
        <StatusBar style="light" />
        <ScrollView>
          <View style={{marginBottom:50}}>
          
            <View style={{margin:20, marginTop:50}}>
              <ButtonShared text="Rechercher" onPress={()=> {this.setModalVisible()}}/>
            </View>

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
                    />
                    <Input
                        placeholder='Ville destination'
                    />
                    <View style={{flexDirection:'row'}}>
                      <ButtonShared 
                        text='Recherche'
                        onPress={() => this.search()}
                      />
                      <Button
                        title='Close'
                        buttonStyle={{backgroundColor:'black', borderRadius:10, marginLeft:5}}
                        onPress={() => this.setModalVisible(!modalVisible)}
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
 
const HomeScreen = connect(mapStateToProps, {getServicesItems}) (Home);
export { HomeScreen }
