import { combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import auth  from './authReducer'
import nav from './navReducer'
// import app from './appReducer'
// 合并子reducer
// 服务商详情的状态
import {provideReducer} from "./provideReducer"
const rootReducer = combineReducers({
    nav,
    formReducer,
    // app,
    auth ,
    provideReducer
})

export default rootReducer