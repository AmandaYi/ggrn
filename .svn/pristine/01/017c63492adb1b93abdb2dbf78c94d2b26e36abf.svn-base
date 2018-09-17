import React from 'react';
import { Provider } from 'react-redux';
import { AppNavigator } from './app/router/AppNavigator';
import configureStore from './app/store/configureStore'

const store = configureStore();
import ComfirmPay from "./pages/pay/confirmPay"
export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ComfirmPay />
            </Provider>
        );
    }
}

