import {createAction,handleActions } from 'redux-actions'
import {toast} from "../common/util";

import ApiService from "./../services/apiService/apiService"
let apiService =new ApiService()

const loginStart = createAction("LOGIN_IN_START")
const loginSuccess = createAction("LOGIN_IN_SUCCESS")
const loginFailure =  createAction("LOGIN_IN_ERROR")

export const loginPW = (username,password) => (dispatch, getState) =>{

    dispatch(loginStart())

    apiService.postLogin(username,password)
        .then(res=>{
            let accessToken = res.data.access_token
            let  refreshToken = res.data.refresh_token
            if(accessToken && refreshToken ){
                dispatch(loginSuccess({accessToken,refreshToken,username}))
                toast('登录成功','center')
                dispatch({type:'/APP/HOME'})
            }
            else
                dispatch(loginFailure())

        }).catch(err=>{
            dispatch(loginFailure())
        })
}



