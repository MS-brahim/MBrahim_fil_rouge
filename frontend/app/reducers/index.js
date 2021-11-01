import {combineReducers} from 'redux'

import AuthReducer from './AuthReducer'
import UserReducer from './UserReducer'
import ServiceListReducer from './ServiceListReducer'
import ServiceAddReducer from './ServiceAddReducer'

export default combineReducers({
    auth:AuthReducer,
    serviceList: ServiceListReducer,
    serviceAdd: ServiceAddReducer,
    userId: UserReducer
})