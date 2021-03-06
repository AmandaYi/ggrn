import React from 'react';
import {Text } from 'react-native'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';


import HomeStack from './homeStack'
// import LoginStack from './loginStack'

import ProvideStack from "./provideStack";
import PayStack from "./payStack";
import AdmissionStack from "./admissionStack";
import {rx} from "../common/variable";
import {Icomoon} from "../pages/login/style/icomoon";

const reduxMiddleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
);

const RootNavigator = createStackNavigator({
    Home: {
        screen: HomeStack ,
        navigationOptions: {
            header: null,
        }
    },
    // Login: { screen: LoginStack },
    Provide: {
        screen: ProvideStack,
        navigationOptions: {
            header: null,
        }
    },
    Pay: {
        screen: PayStack,
        navigationOptions: {
            header: null,
        }
    },
    Admission:{screen:AdmissionStack,
    navigationOptions:{
        header:null
    }}
}, 
{
    navigationOptions: ({ navigation }) =>{
        return {
            headerLeft: (
                <Text style={[{paddingTop: rx(60), paddingRight: rx(20), lineHeight: rx(100)}, Icomoon.return]} onPress={() => navigation.goBack()}>&#xe610;</Text>
            ),
            headerStyle: {elevation: 0, shadowOpacity: 0},
        }

    }
    }
    );

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
    state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, reduxMiddleware };
