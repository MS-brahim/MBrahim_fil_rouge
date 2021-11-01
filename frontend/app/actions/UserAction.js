import {
    USER_FETCH, USER_FETCH_SUCCESS, USER_FETCH_FAILED,
    REGISTER_ATTEMPT, REGISTER_SUCCESS, REGISTER_FAILED
} from './types'
import axios from 'axios';
import config from '../../config'
import { apiGetUserById } from './api/api.user.js'

export const getUserById = (uid) => {
    return async (dispatch) => {
        try {
            dispatch({type: USER_FETCH});
            const { data } = await apiGetUserById(uid);
            // console.log(data);
            dispatch({type: USER_FETCH_SUCCESS, userId:data})
        } catch (error) {
            dispatch({type: USER_FETCH_FAILED, error: data})
        }
    }
}

export const Register = ({email, phone, password}) => {
    return (dispatch)=>{
        dispatch({type: REGISTER_ATTEMPT})

        axios.post(`https://pfr-data.herokuapp.com/api/v1/user/create`,{
            email:email, phone:phone, password:password
        }).then((result) => {
            console.log(result.data);
            // handleResponse(dispatch, result.data)
        }).catch((err) => {
            console.error(err);
        });
    };
};