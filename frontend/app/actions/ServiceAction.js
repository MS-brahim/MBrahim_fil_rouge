import {
    SERVICES_FETCHING, SERVICES_FETCHING_SUCCESS, SERVICES_FETCHING_FAILED,
    SERVICES_ADDING, SERVICES_ADDING_FAILED, SERVICES_ADDING_SUCCESS,
} from './types'
import { apiCreate, apiGetServiceItem } from './api/api.service.js'


export const getServicesItems = () => {
    return async (dispatch) => {
        try {
            dispatch({type: SERVICES_FETCHING});
            const { data } = await apiGetServiceItem();
            console.log(data);
            dispatch({type: SERVICES_FETCHING_SUCCESS, services:data.services})
        } catch (error) {
            dispatch({type: SERVICES_FETCHING_FAILED, error: data.message})
        }
    }
}

export const createServiceItem = ({newService}) => {
   return async (dispatch)=>{
        dispatch({type: SERVICES_ADDING})
        const  data  = await apiCreate({newService}).then((result) => {
            handleResponse(dispatch, result.data)
        }).catch((err) => {
            console.error(err);
        });
        console.log(data);
    };
};

const handleResponse = (dispatch, data) =>{
    console.log(data);
    // if (!data.success) {
    //     // console.log(data.message);
    //     onLoginFailed(dispatch, data.message);
    // }else{
    //     onLoadSuccess(dispatch, data.auth, data.token)
    //     console.log('user logged', data.auth.id);
    //     AsyncStorage.setItem('UID', data.auth.id)
    // }
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