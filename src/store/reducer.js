import {combineReducers} from 'redux'
import InitialNavReducer from '@navigation/Initial/reducer'
import MainNavReducer from '@navigation/Main/reducer'
import MainReducer from '@scenes/Main/reducer'
import InitialReducer from '@scenes/Initial/reducer'
import AddReducer from '@scenes/Add/reducer'

export default combineReducers({
    nav_main: MainNavReducer,
    nav_init: InitialNavReducer,
    main: MainReducer,
    init: InitialReducer,
    add: AddReducer,
})