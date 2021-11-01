import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from "react-native";
import {connect} from 'react-redux'
import { Register } from '../../actions'

import {
    LinkShared, 
    ButtonShared,
    NavWarinigShared,
    CardOpacity,
    Spinner
} from "../../components";
import { Input, Image, SocialIcon, Icon } from 'react-native-elements'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#072B61',
    },
    lineOu : {
        flex: 1, 
        height: 1, 
        backgroundColor: '#fff',

    }
});

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            phone:'',
            password:'',
            errMessage:'',
        };
    }

    // Register 
    _onRegisterPressed(){
        const { phone, password, email } = this.state;
        if (email==''&& password=='' && phone==='') {
            this.setState({errMessage:'Les champs sont obligatoires'})
        } else {
            this.setState({errMessage:''})
            this.props.Register({ email, phone, password })
            this.props.navigation.navigate('SignIn');
        }
    }

    // RENDER BUTTON 
    _renderButton(){
        // if (this.props.loading) {
        //     return(
        //     <ButtonShared text=<Text>Connection <Spinner/></Text>/>
        //     )
        // }
        return(
            <View style={{marginTop:20}}>
                <ButtonShared text='Connection'
                onPress={ this._onRegisterPressed.bind(this) }/>
            </View>
        )
    }
    _errMessage() {
        return(
            <View style={{paddingLeft:10}}>
                <Text style={{color:'red'}}>
                    {this.state.errMessage}
                    {this.props.error}
                </Text>
            </View>
        )
    }

    navigateToSignIn() {
        this.props.navigation.navigate('SignIn')
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <NavWarinigShared/>
                <CardOpacity>
                <View style={{alignSelf:'center', marginBottom:20}}>

                    <Image 
                        source={require('../../../assets/logo2.png')}
                        style={{
                            width:200, height:100 ,
                            marginVertical:8,
                            marginTop:39
                        }}
                    >
                    </Image>
                </View>
                    <View style={{flex:2,flexDirection:"row", marginBottom:20}}>
                        <LinkShared 
                            title='Se Connect' 
                            color='white'
                            borderTopLeftRadius={10}
                            borderBottomLeftRadius={10} 
                            onPress={()=>this.navigateToSignIn()}/>
                        <LinkShared 
                            title="S'incrire" 
                            backgroundColor="white" 
                            borderTopRightRadius={10}
                            borderBottomRightRadius={10}
                            color='#072B61'/>
                    </View>
                    <Input
                        placeholder='Adresse e-mail'
                        secureTextEntry={false}
                        inputStyle={{color:'#f2f2f2', paddingLeft:5}}
                        placeholderTextColor='#e6e6e6'
                        onChangeText={(email)=> this.setState({email})}
                        leftIcon={
                            <Icon
                                name='mail'
                                size={22}
                                color='#e6e6e6'
                            />
                        }
                    />
                    <Input
                        placeholder='Numéro de tél'
                        secureTextEntry={false}
                        inputStyle={{color:'#f2f2f2', paddingLeft:5}}
                        placeholderTextColor='#e6e6e6'
                        onChangeText={(phone)=> this.setState({phone})}
                        leftIcon={
                            <Icon
                                name='phone'
                                size={22}
                                color='#e6e6e6'
                            />
                        }
                    />
                    <Input
                        placeholder='Mot de passe'
                        secureTextEntry={true}
                        inputStyle={{color:'#f2f2f2', paddingLeft:5}}
                        placeholderTextColor='#e6e6e6'
                        onChangeText={(password)=> this.setState({password})}
                        leftIcon={
                            <Icon
                                name='lock'
                                size={22}
                                color='#e6e6e6'
                            />
                        }
                    />
                    {this._errMessage()}
                    {this._renderButton()}
                </CardOpacity>
                
                <View style={{flexDirection: 'row', alignItems: 'center', width:'86%', alignSelf:'center'}}>
                    <View style={styles.lineOu} />
                        <View>
                            <Text style={{width: 50, textAlign: 'center', color:'#fff'}}>OU</Text>
                        </View>
                    <View style={styles.lineOu} />
                </View>
                <CardOpacity>
                    <SocialIcon
                        title='Se Connecter avec Gmail'
                        button
                        light
                        type='google'
                        style={{borderRadius:10, height:40}}
                    />
                    <SocialIcon
                        title='Se Connecter avec Facebook'
                        button
                        light
                        type='facebook'
                        style={{borderRadius:10, height:40}}
                    />
                </CardOpacity>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
     return {
        error:state.auth.error,
        loading:state.auth.loading,
        user:state.auth.user,
    };
};

export default connect(mapStateToProps, {Register})(SignUp);
