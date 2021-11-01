import {USER_FETCH, USER_FETCH_SUCCESS, USER_FETCH_FAILED} from '../actions/types'

const INITIAL_STATE = {
    fetching: false,
    error:'',
    userId: {},
}
 
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_FETCH:
            return {...state, fetching: true};
        case USER_FETCH_SUCCESS:
            return {...state, fetching: false, userId:action.userId};
        case USER_FETCH_FAILED:
            return {...state, fetching: false, error: action.error};
        default:
            return state
    }
}