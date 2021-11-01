import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  ButtonShared, CardOpacity,
} from "../components";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#072B61'
    },
    bgTop:{
        backgroundColor:'#fff',
        height: 220,
    },
    bgBottom:{
        backgroundColor:'#072B61',
        width: '100%',
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        position:'absolute',
        top: 170,
        flex: 1,
    },
    text: {
        color:'red',
        backgroundColor:'black',
    },
    userInfo: {
        marginTop:20,
        marginHorizontal:30,
        flexDirection: 'row',
    },
    
    cityCss: {
        color: '#fff',
        fontSize:15
    },
    fromTo: {
        fontSize:16,
        fontWeight:'600',
        color: '#072B61'
    }
});
 
class ServiceDetail extends Component {
    
    
    render(){
        const detailServiceItem = this.props.route.params.itemID
        // console.log(detailServiceItem);
        return (
            <View style={styles.container}>
                <View style={styles.bgTop}>
                     <Image 
                        source={{
                            uri:detailServiceItem.user_id.image ,
                        }}
                        PlaceholderContent={<ActivityIndicator />}
                        style={{width:'100%', height:'100%' ,
                            borderColor:'orange', borderWidth:1,
                        }}
                        >
                    </Image>
                </View>
                <View style={styles.bgBottom}>
                    <View style={styles.userInfo}>
                        <View style={{flex:2}}>
                            <Text style={{color:'#fff'}}>{detailServiceItem.user_id.first_name} {detailServiceItem.user_id.last_name}</Text>
                            <Text style={{fontSize:10, color:'#fff'}}>
                                {
                                new Date(Date.parse(detailServiceItem.createdAt)).toDateString()
                                } 
                            </Text>
                        </View>
                        <View style={{width:60, justifyContent:'space-between', flexDirection:'row'}}>
                            <Icon name='inbox' size={16} color='#E4A718'/>
                            <Icon name='phone' size={16} color='#E4A718'/>
                            <Icon name='share' size={16} color='#E4A718'/>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', marginHorizontal:10, justifyContent:'flex-end'}}>
                        <Icon name='star' size={16} color='#E4A718'/>
                        <Icon name='star' size={16} color='#E4A718'/>
                        <Icon name='star' size={16} color='#E4A718'/>
                        <Icon name='star' size={16} color='#E4A718'/>
                        <Icon name='star' size={16} color='#E4A718'/>
                    </View>
                    <CardOpacity>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <Text style={styles.fromTo}>De</Text>
                            <Text style={styles.cityCss}>{detailServiceItem.departure}</Text>
                            <Text style={styles.fromTo}>à</Text>
                            <Text style={styles.cityCss}>{detailServiceItem.destination}</Text>
                        </View>
                        <View style={{ flexDirection:'row', color:'black', marginVertical:2}}>
                            <Icon name='calendar' size={14} color='#fff' style={{marginTop:2}} />
                            <Text style={{ color:'#fff', marginHorizontal:8}}>
                                {
                                    new Date(Date.parse(detailServiceItem.date_depart)).toDateString()
                                }
                            </Text>
                            <Icon name='arrow-right' size={14} color='#fff' style={{marginTop:2}} />
                            <Text style={{ color:'#fff', marginHorizontal:8}}>
                                {
                                    new Date(Date.parse(detailServiceItem.date_dest)).toDateString()
                                }
                            </Text>
                        </View>
                        <View style={{ flexDirection:'row', color:'#fff', marginVertical:2}}>
                            <Icon name='map-marker' size={14} color='#fff' style={{marginTop:2}} />
                            <Text style={{ color:'#fff', marginHorizontal:8}}>{detailServiceItem.address_dest}</Text>
                        </View>
                    </CardOpacity>
                    <View style={{marginHorizontal:20}}>
                        <View style={{ flexDirection:'row', color:'#fff', marginVertical:5}}>
                            <Icon name='phone' size={14} color='#fff' style={{marginTop:2}} />
                            <Text style={{ color:'#fff', marginHorizontal:8}}>{detailServiceItem.user_id.phone}</Text>
                        </View>
                        <View style={{ flexDirection:'row', color:'#fff', marginVertical:5}}>
                            <Icon name='envelope' size={14} color='#fff' style={{marginTop:2}} />
                            <Text style={{ color:'#fff', marginHorizontal:8}}>{detailServiceItem.user_id.email}</Text>
                        </View>
                    </View>
                    <View style={{margin:20}}>
                        {/* <ButtonShared text='Essayer maintenant'
                            onPress={ 
                                this.props.navigation.navigate('ReservationScreen', { itemID: detailServiceItem})
                            }
                        /> */}
                    </View>
                </View>
            </View>
        );
    }
}

 
export { ServiceDetail }
