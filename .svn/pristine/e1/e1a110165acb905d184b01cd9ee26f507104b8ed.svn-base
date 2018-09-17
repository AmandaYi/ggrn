import React, {Component} from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View,
} from 'react-native';

import {commonStyle} from './style/commonStyle'
import {loginStyle} from './style/loginStyle'
import {toast,loading} from '../../common/util'
import {rx,width,height} from "../../common/variable"
import {connect} from "react-redux"
import {loginPW} from './../../actions/loginAction'



// 登陆界面
class PasswordLogin extends Component {
    constructor(props) {
        super(props);
        // 设置默认账号、密码，用于测试
        this.state = {
            username: 'admin',
            password: '123456'
        }
    }

    render = () => {
        const {navigation, loginInDoing} = this.props



        return (
        <View style={commonStyle.pageBox}>

            {loading(this.props.loginInDoing)}

            {/* 输入手机号 */}
            <View style={[commonStyle.inputBox]}>

                <Text style={commonStyle.leftTitle}>
                    账 号：
                </Text>
                <TextInput
                    style={commonStyle.input}
                    secureTextEntry={false}
                    placeholder={'请输入您的手机号'}
                    placeholderTextColor={'#999'}
                    underlineColorAndroid={'transparent'}
                    value={this.state.username}
                    onChangeText={text => {
                        this.setState({
                            username: text
                        })
                    }}
                />
            </View>
            {/* 输入密码 */}
            <View style={commonStyle.inputBox}>
                <Text style={[commonStyle.leftTitle]}>
                    密 码：
                </Text>
                <TextInput
                    style={commonStyle.input}
                    placeholder={'6-25位数字、字母或下划线'}
                    placeholderTextColor={'#999'}
                    underlineColorAndroid={'transparent'}
                    value={this.state.password}
                    onChangeText={text => {
                        this.setState({
                            password: text
                        })
                        alert(this.state.username)
                    }}
                />
            </View>
            {/* 登录按钮 */}
            <TouchableHighlight
                style={commonStyle.button}
                underlayColor='gray'
                onPress={() => this.props.login(this.state.username, this.state.password)}>
                <Text style={commonStyle.btText}>登录</Text>
            </TouchableHighlight>
            {/* 忘记密码 */}
            <View style={loginStyle.forgetOrNew}>
                <Text
                    style={loginStyle.newUser}
                    onPress={() => {
                        navigation.navigate('RegisterStack')
                    }}
                >新用户注册</Text>
                <Text
                    style={[loginStyle.newUser, {color: '#666'}]}
                    onPress={() => {
                        navigation.navigate('ForgetPasswordStack')
                    }}
                >忘记密码？</Text>
            </View>

        </View>
    )
    }

}

const styles = StyleSheet.create({
    passMode: {
        position: 'absolute',
        right: rx(20),
        bottom: rx(20),
    }
});

mapStateToProps = (state) => {
    return {
        loginInDoing: state.auth.loginInDoing,
    }
}

mapDispatchToProps = (dispatch) => {
    return {
        login: (username, password) => dispatch(loginPW(username, password))
    }
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(PasswordLogin)