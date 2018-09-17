import {handleActions } from 'redux-actions'

const initialState = {
    loginInDoing:false,
    isLogin:false
}


export default auth = handleActions({
    LOGIN_IN_START: (state,action ) => {
        return {
        ...state,loginInDoing: true,isLogin:false,
    }},
    LOGIN_IN_SUCCESS: (state ,action ) => {
        return {
            ...state,
            loginInDoing:false,
            isLogin:true,
            accessToken:action.payload.accessToken,
            refreshToken:action.payload.refreshToken,
            username:action.payload.username,
        }},
    LOGIN_IN_ERROR: (state,action ) => ({
        ...state,
        loginInDoing:false,
    })
},initialState )