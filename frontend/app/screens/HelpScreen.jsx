import React, { Component } from 'react';
import { View, Text, StyleSheet,
    ScrollView, Image, 
} from 'react-native';
import { CheckBox, Input } from 'react-native-elements';
import { MenuBar, ButtonShared } from '../components';
// import { TabView, SceneMap } from 'react-native-tab-view';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#072B61',

    },
});

class HelpScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weight:'',
            description:'',
            image:'',
            address:'',
        };
    }

    // PUBLISH 
    _onPublicPressed(){
        console.log(this.state);
    }

    // RENDER BUTTON 
    _renderButton(){
        return(
            <View style={{marginTop:20}}>
                <ButtonShared text='Confirmer'
                    onPress={ this._onPublicPressed.bind(this) }
                />
            </View>
        )
    }
    render(){
        // const detailServiceItem = this.props.route.params.itemID
        // console.log(detailServiceItem);
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{padding:20, margin:10}}>
                        <Text style={{color:'#cccccc', marginVertical:10, alignSelf:'center', fontSize:18, fontWeight:'bold'}}>Confirmer</Text>
                        <View style={{ margin:2}}>
                        </View>
                        <Input
                            placeholder='Poids en Kg'
                            disabled={false}
                            inputStyle={{color:'#cccccc', paddingLeft:5}}
                            onChangeText={(weight)=> this.setState({weight})}
                        />
                        <Input
                            placeholder='Description'
                            disabled={false}
                            inputStyle={{color:'#cccccc', paddingLeft:5}}
                            onChangeText={(description)=> this.setState({description})}
                        />
                        <Input
                            placeholder='Image'
                            disabled={false}
                            inputStyle={{color:'#cccccc', paddingLeft:5}}
                            onChangeText={(image)=> this.setState({image})}
                        />
                        <Input
                            placeholder='Adresse'
                            inputStyle={{color:'#cccccc', paddingLeft:5}}
                            onChangeText={(address)=> this.setState({address})}
                        />
                        
                        {this._renderButton()}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

 
export {HelpScreen};