import axios from 'axios'
import config from '../../../config'

const apiGetServiceItem = () => {
    return axios.get(`https://pfr-data.herokuapp.com/api/v1/service?q=true&sort=-1`);
}

const apiCreate = (data) => {
    return axios.post(`https://pfr-data.herokuapp.com/api/v1/service/post`, data);
}

export { apiGetServiceItem, apiCreate }