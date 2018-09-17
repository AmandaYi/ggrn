import React from 'react'
import {Provider} from 'react-redux'
import App from './App'

import configureStore from './store/configureStore'

const store = configureStore();
// import ComfirmPay from "./pages/pay/confirmPay"

export default class Root extends React.Component{
    render(){
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}