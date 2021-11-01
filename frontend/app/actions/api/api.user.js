import axios from 'axios'
import config from '../../../config'

const apiGetUserById = (uid) => {
    return axios.get(`https://pfr-data.herokuapp.com/api/v1/user/${uid}`);
}

export { apiGetUserById }