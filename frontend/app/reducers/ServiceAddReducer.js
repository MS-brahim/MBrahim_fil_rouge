import {SERVICES_ADDING, SERVICES_ADDING_SUCCESS, SERVICES_ADDING_FAILED} from '../actions/types'

const INITIAL_STATE = {
    adding: false,
    error:'',
    added: false,
}
 
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SERVICES_ADDING:
            return {...state, ADDING: true};
        case SERVICES_ADDING_SUCCESS:
            return {...state, ADDING: false, added:true};
        case SERVICES_ADDING_FAILED:
            return {...state, ADDING: false, error: action.error};
        default:
            return state
    }
}