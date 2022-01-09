import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, StatusBar, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar } from 'react-native-elements';
import { CardOpacity } from './CardOpacityComponent';
import { Input } from './InputComponent';
import { ButtonShared } from './shared/ButtonShared';
import { Rating, AirbnbRating, Image } from 'react-native-elements';

const ratingCompleted = (rating) => {
  console.log("Rating is: " + rating)
}
const Item = (props) => (


    <View style={styles.item}>
        {/* story service  */}
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Icon name='map' size={14} color='#fff' style={{marginTop:2}} />
            <Text style={styles.fromTo}>De</Text>
            <Text style={styles.cityCss}>{props.from}</Text>
            <Text style={styles.fromTo}>à</Text>
            <Text style={styles.cityCss}>{props.to}</Text>
        </View>
         {/* data  */}
        <View style={{ flexDirection:'row', justifyContent:'space-between', color:'#fff', marginVertical:5}}>
            <Icon name='calendar' size={14} color='#fff' style={{marginTop:2}} />
            <Text style={{ color:'#fff', marginHorizontal:8}}>{
                new Date(Date.parse(props.dateDepart)).toDateString()}
            </Text>
            <Icon name='arrow-right' size={14} color='#fff' style={{marginTop:2}} />
            <Text style={{ color:'#fff', marginHorizontal:8}}>
                {
                new Date(Date.parse(props.dateDest)).toDateString()}
            </Text>       
        </View>
        <View style={{borderWidth:0.5, borderColor:'#fff', margin:2}}></View>
        <View style={{flexDirection:'row', marginTop:4}}>
            {/* col 1 */}
            
            <Image 
                source={{
                    uri:props.image ,
                }}
                PlaceholderContent={<ActivityIndicator />}
                style={{width:80, height:80, borderRadius:10,
                    borderColor:'orange', borderWidth:1,
                }}
                onPress={props.userProfile}
                >
            </Image>
            {/* col 2  */}
            <View style={{marginLeft:5, flexDirection:'column', flex:1}} >
                <View style={{justifyContent:'space-between', flexDirection:'row', marginVertical:4 }}>
                    {/* user name  */}
                    <Text style={styles.title}>{props.title}</Text>  
                    {/* rating  */}
                    <Rating
                        ratingColor='orange'
                        ratingCount={5}
                        imageSize={15}
                        style={{marginTop:2}}
                    />
                </View>
                 <ButtonShared text="Montre plus" onPress={props.showDetail}/>
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        marginVertical: 8,
        borderRadius:10,
        backgroundColor: '#eef0f25c',
        padding:10,
        marginHorizontal:10
    },
    title: {
        color: '#fff',
        fontSize: 16,
        fontWeight:'700',
        marginBottom: 4
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

export {Item};