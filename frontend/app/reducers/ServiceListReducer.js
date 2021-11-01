import {SERVICES_FETCHING, SERVICES_FETCHING_SUCCESS, SERVICES_FETCHING_FAILED} from '../actions/types'

const INITIAL_STATE = {
    fetching: false,
    error:'',
    services: [],
}
 
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SERVICES_FETCHING:
            return {...state, fetching: true};
        case SERVICES_FETCHING_SUCCESS:
            return {...state, fetching: false, services:action.services};
        case SERVICES_FETCHING_FAILED:
            return {...state, fetching: false, error: action.error};
        default:
            return state
    }
}