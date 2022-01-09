import {
    SERVICES_FETCHING, SERVICES_FETCHING_SUCCESS, SERVICES_FETCHING_FAILED,
    SERVICES_ADDING, SERVICES_ADDING_FAILED, SERVICES_ADDING_SUCCESS, SEARCHING,
} from './types'
import { apiCreate, apiGetServiceItem, apiSearching } from './api/api.service.js'

export const searchFromTo = (city) => {
    return async (dispatch)=>{
        try {   
            dispatch({type: SEARCHING})
            const { data } =  await apiSearching(city)
            console.log(data);
            
            dispatch({type: SERVICES_FETCHING_SUCCESS, services:data.results})
        } catch (error) {
            console.log(error);
            dispatch({type: SERVICES_FETCHING_FAILED, error})
        }
    }
};

export const getServicesItems = () => {
    return async (dispatch) => {
        try {
            dispatch({type: SERVICES_FETCHING});
            const { data } = await apiGetServiceItem();
            dispatch({type: SERVICES_FETCHING_SUCCESS, services:data.services})
        } catch (error) {
            dispatch({type: SERVICES_FETCHING_FAILED, error})
        }
    }
}

export const createServiceItem = (newService) => {
   return async (dispatch)=>{
        dispatch({type: SERVICES_ADDING})
        // console.log(newService);
        const service = {
            departure: newService.departure,
            destination: newService.destination, 
            address_dest: newService.address_dest, 
            address_depart: newService.address_depart, 
            date_depart: newService.date_depart, 
            date_dest: newService.date_dest,
            weight: newService.weight, 
            image: newService.image, 
            user_id: newService.user_id
        }
        await apiCreate(service).then((result) => {
            console.log(result);
            this.props.navigation.navigate('HomeScreen')
        }).catch((err) => {
            console.error(err);
        });
    };
};
