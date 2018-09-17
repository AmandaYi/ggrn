import {handleActions } from 'redux-actions'

const initialState = {
    currMenu:'FF'
}


export default auth = handleActions({
    SET_CURR_MENU: (state,action ) => ({
        ...state,currMenu:action.payload
    }),

},initialState )