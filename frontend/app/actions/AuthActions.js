import {
    LOGIN_ATTEMPT, LOGIN_SUCCESS, LOGIN_FAILED
} from './types'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import config from '../../config'


export const LoginAuth = ({email, password}) => {
    return (dispatch)=>{
        dispatch({type: LOGIN_ATTEMPT})

        axios.post(`https://pfr-data.herokuapp.com/api/v1/auth/login`,{
            email:email,password:password
        }).then((result) => {
            // console.log(result.data.auth.id);

            handleResponse(dispatch, result.data)
        }).catch((err) => {
            console.error(err);
        });
    };
};

const handleResponse = (dispatch, data) =>{
    if (!data.success) {
        // console.log(data.message);
        onLoginFailed(dispatch, data.message);
    }else{
        onLoadSuccess(dispatch, data.auth, data.token)
        console.log('user logged', data.auth.id);
        AsyncStorage.setItem('UID', data.auth.id)
    }
}

const onLoadSuccess = (dispatch, user, token) =>{
    AsyncStorage.setItem('TOKEN', token)
        .then(()=>{
            dispatch({type:LOGIN_SUCCESS, user})
        })
}

const onLoginFailed = (dispatch, errorMessage) => {
    dispatch({ type: LOGIN_FAILED, error: errorMessage})
};
