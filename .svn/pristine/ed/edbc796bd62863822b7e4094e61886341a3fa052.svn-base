import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  ToastAndroid,
  View, Dimensions
} from 'react-native';
import {Icomoon} from "./style/icomoon";
import {commonStyle} from './style/commonStyle'
import  globalStyle,{
  width,
  rx
} from "../../common/variable"
/**
 * 登录
 * @param {*} username
 * @param {*} password md5加密
 * @returns {*}
 */
// 登陆界面
export default class RegisterLast extends Component{
  constructor(props) {
    super(props);
    // 设置默认账号、密码，用于测试
    this.state = {
      nickName: '',
      password: ''
    }
  }
  //  接收上一页的注册返回状态，
  render() {
    const {navigation} = this.props
    return (
      <View
        style={commonStyle.pageBox}
      >
        <View style={styles.successTip}>
          <Text style={Icomoon.success}>&#xe69e;</Text>
          <Text style={styles.successText}>注册成功</Text>
        </View>
        <Text style={styles.addInfo}>完善账户信息</Text>
        {/* 输入昵称 */}
        <View
          style={[commonStyle.inputBox]}>
          <Text style={commonStyle.leftTitle}>
            昵 称 :
          </Text>
          <TextInput
            style={commonStyle.input}
            secureTextEntry = {false}
            placeholder={'设置账户昵称'}
            placeholderTextColor={ '#999' }
            underlineColorAndroid={'transparent'}
            value={this.state.nickName}
            onChangeText = {text => {
              this.setState({
                nickName: text
              })
            }}
          />
        </View>
        {/* 输入密码 */}
        <View
          style={commonStyle.inputBox}
        >
          <Text style={[styles.title, commonStyle.leftTitle]}>密 码：
          </Text>
          <TextInput
            ref='passwordBox'
            style={commonStyle.input}
            placeholder={ '设置登陆密码（长度至少6位）' }
            placeholderTextColor={ '#999' }
            underlineColorAndroid={'transparent'}
            value={this.state.password}
            onChangeText = {text => {
              this.setState({
                password: text
              })
            }}
          />
        </View>
        {/* 登陆按钮 */}
        <TouchableHighlight
          style={ commonStyle.button }
          underlayColor='gray'
          onPress = {() => {
            // 保存昵称、密码，按确定发送请求，成功跳转页面到首页
             ToastAndroid.show('返回首页', ToastAndroid.SHORT)
              navigation.navigate('Home')
          }} >
          <Text style={commonStyle.btText}>确定</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  successTip: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: rx(50),
    height: rx(150),
    alignItems: 'center'
  },
  successText: {
    color: '#323232',
    fontSize: rx(48),
    marginLeft: rx(20),
  },
  addInfo: {
    color: '#333',
    fontSize: rx(36),
    marginTop: rx(70),
    marginBottom: rx(50),
    width: width - globalStyle.appHorizontal*2,
    textAlign: 'left'
  },
});
