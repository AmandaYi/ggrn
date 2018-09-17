import { createStore,applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from '../reducer/index'

import { reduxMiddleware } from '../router/appNavigator'


const createStoreWithMiddleware = applyMiddleware(reduxMiddleware,thunkMiddleware)(createStore);

export default function configureStore(initialState){
    const store = createStoreWithMiddleware(rootReducer,initialState)
    return store;
}