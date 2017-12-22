import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducer'



export default (preloadedState) => createStore(reducer, preloadedState, applyMiddleware(thunk, logger))
