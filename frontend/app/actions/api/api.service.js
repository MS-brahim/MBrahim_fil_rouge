import axios from 'axios'
import config from '../../../config'

const apiGetServiceItem = () => {
    console.log(config.API_URL);
    return axios.get(`https://pfr-data.herokuapp.com/api/v1/service`);
}

const apiCreate = ({depart, arival, address_arival, address_depart, date_depart, date_arival,weight, description, image, user_id}) => {
       
    return axios.post(`https://pfr-data.herokuapp.com/api/v1/service/post`, {
        depart,
        arival, 
        address_arival, 
        address_depart, 
        date_depart, 
        date_arival,
        weight, 
        description, 
        image, 
        user_id
    });
}

export { apiGetServiceItem, apiCreate }