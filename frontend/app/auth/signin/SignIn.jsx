import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from "react-native";
import { Icon, Input, Image, SocialIcon } from "react-native-elements";

import {connect} from 'react-redux'
import {LoginAuth} from '../../actions'

import {
    LinkShared, 
    ButtonShared,
    NavWarinigShared,
    SocialButtonShared,
    CardOpacity,
    Spinner,
} from "../../components";

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#072B61',
    },
    lineOu : {
        flex: 1, 
        height: 1, 
        backgroundColor: '#fff',

    }
});

class SignIn extends Component {

    // CONSTRUCTOR 
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            errMessage:'',
        };
    }

    componentWillReceiveProps(nextProps){
        // console.log(nextProps.user);
        if (nextProps.user) {
            this.props.navigation.navigate('HomeScreen');
        }
    }

    // LOGIN 
    _onLoginPressed(){
        const { email, password } = this.state;
        if (email==''&& password=='') {
            this.setState({errMessage:'Les champs sont obligatoires'})
           console.log(this.state.errMessage);
        } else {
            this.setState({errMessage:''})
            this.props.LoginAuth({email, password})
        }
    }

    // RENDER BUTTON 
    _renderButton(){
        return(
            <View style={{marginTop:20}}>
                <ButtonShared text='Connection'
                    onPress={ this._onLoginPressed.bind(this) }
                />
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

    // NAVIGATE TO SIGNUP FORM 
    navigateToSignUp() {
        this.props.navigation.navigate('SignUp')
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
                            backgroundColor="white"
                            color='#072B61'
                            borderTopLeftRadius={10}
                            borderBottomLeftRadius={10}/>
                        <LinkShared 
                            title="S'incrire" 
                            color='white' 
                            borderTopRightRadius={10}
                            borderBottomRightRadius={10}
                            onPress={()=>this.navigateToSignUp()}/>
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
                    { this._errMessage()}                     
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

export default connect(mapStateToProps, {LoginAuth})(SignIn);
