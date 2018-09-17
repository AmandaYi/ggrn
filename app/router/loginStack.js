import React from 'react';
import {createStackNavigator,createSwitchNavigator, createTabNavigator,createMaterialTopTabNavigator} from 'react-navigation';
import {Text,StyleSheet, View, Dimensions} from 'react-native';
import {rx,width} from "../common/variable";
import {Icomoon} from '../pages/login/style/icomoon'


// 登录
import PasswordLogin from '../pages/login/passwordLogin'
import phoneLogin from './../pages/login/phoneLogin'
// 忘记密码
import ForgetPassword from '../pages/login/forgetPassword'
import ForgetPassNext from '../pages/login/forgetPassNext'
import ForgetPassLast from '../pages/login/forgetPassLast'
// 注册
import Register from '../pages/login/register'
import RegisterNext from '../pages/login/registerNext'
import RegisterLast from '../pages/login/registerLast'

// 登录方式切换设置
const LoginStack = createMaterialTopTabNavigator({
    PasswordLogin: {
        screen: PasswordLogin,
        navigationOptions: {
            title: '账号密码登录'
        }
    },
    PhoneLogin: {
        screen: phoneLogin,
        navigationOptions: {
            title: '手机号快捷登录'
        }
    }
}, {
    tabBarOptions: {
        initialRouteName: 'PasswordLogin',
        lazy: true,
        inactiveTintColor: '#000',
        activeTintColor: '#2cbc55',
        style: {
            elevation: 0,
            shadowOpacity: 0 ,
            backgroundColor: "#fff",
            paddingBottom: rx(30)
        },
        indicatorStyle: {
            backgroundColor: '#fff',
        },
        labelStyle: {
            fontSize: rx(40)
        }
    },

})

const ForgetPasswordStack = createStackNavigator({
    ForgetPassword: {
        screen: ForgetPassword,
    },
    ForgetPassNext: {
        screen: ForgetPassNext,
    },
    ForgetPassLast: {
        screen: ForgetPassLast,
    }
}, {
    navigationOptions:{
        headerStyle: { elevation: 0,shadowOpacity: 0},
        header: null
    }
})

const RegisterStack = createStackNavigator({
    Register: {
        screen: Register,
        navigationOptions:{
            headerStyle: { elevation: 0,shadowOpacity: 0},
            header: null
        }
    },
    RegisterNext: {
        screen: RegisterNext,
    },
    RegisterLast: {
        screen: RegisterLast,
    }
}, {
    initialRouteName: 'Register',

})


const MineStack = createSwitchNavigator({
    LoginStack: {
        screen: LoginStack,
        navigationOptions:{
            headerStyle: { elevation: 0,shadowOpacity: 0},
            header: null
        }
    },
    RegisterStack: {
        screen: RegisterStack,
    },
    ForgetPasswordStack: {
        screen: ForgetPasswordStack,
    }

}, {
    initialRouteName: 'LoginStack',
    navigationOptions: ({ navigation }) =>{
        return {
            headerLeft: (
                <Text style={[{paddingTop: rx(60), paddingRight: rx(20), lineHeight: rx(100)}, Icomoon.return]} onPress={() => navigation.goBack()}>&#xe610;</Text>
            ),
            headerStyle: {elevation: 0, shadowOpacity: 0,backgroundColor:'#ccc'},
        }
    }
})


styles = StyleSheet.create({

})

export default MineStack;