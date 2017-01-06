import { combineReducers } from 'redux'
//combineReducers 用于合并reducer
import { routerReducer } from 'react-router-redux'
//将routerReducer一起合并管理
import update from './count'

export default combineReducers({
    update,
    routing: routerReducer
})