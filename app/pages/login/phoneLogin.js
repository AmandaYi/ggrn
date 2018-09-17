import React, { Component } from 'react'
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  TextInput,
  View, ToastAndroid,
} from 'react-native'
import {Icomoon} from "./style/icomoon";
import {commonStyle} from './style/commonStyle'
import {loginStyle} from './style/loginStyle'
import  globalStyle,{
  width,
  rx
} from "../../common/variable"

export default class PhoneLogin extends Component{
  constructor(props) {
    super(props)
    this.state = {
      telPhone: '',
      idCode: ''
    }
  }



  render() {
    const {navigation} = this.props
    // 手机号、验证码输入
    return (
      <View style={commonStyle.pageBox}>
        {/* 输入手机号 */}
        <View
          style={[commonStyle.inputBox]}>
          <Text style={commonStyle.leftTitle}>手机号：
            <Text style={Icomoon.jiantou_dowm}>&#xe65e;</Text>
          </Text>
          <Text style={styles.idCode}
            onPress = {() => {
              // 首先对输入的手机号做验证，格式不对给出提示，对，判断手机是否注册，没有给出提示，注册了，获取手机号发送验证码
              alert('获取验证码')
            }}
          >获取验证码</Text>
          <TextInput
            style={commonStyle.input}
            secureTextEntry = {false}
            placeholder={'请输入您的手机号'}
            placeholderTextColor={ '#999' }
            underlineColorAndroid={'transparent'}
            value={this.state.telPhone}
            onChangeText = {text => {
              this.setState({
                telPhone: text
              })
            }}
          />
        </View>
        {/* 输入验证码*/}
        <View
          style={[commonStyle.inputBox]}>
          <Text style={[commonStyle.leftTitle]}>验证码：
          </Text>
          <TextInput
            ref='code'
            style={commonStyle.input}
            placeholder={'请输入验证码' }
            placeholderTextColor={ '#999' }
            underlineColorAndroid={'transparent'}
            value={this.state.idCode}
            onChangeText = {text => {
              this.setState({
                idCode: text
              })
            }}
          />
        </View>
        {/* 登录按钮 */}
        <TouchableHighlight
          style={ commonStyle.button }
          underlayColor='gray'
          onPress = {() => {
            // 手机号输入正确的前提下，判断验证码是否正确，不对给出提示，对发送请求，请求正常返回，登录成功，否则提示登录失败
            if(this.state.username == 'admin' && this.state.password == '123456') {
              ToastAndroid.show('返回首页', ToastAndroid.SHORT)
              navigation.navigate('Personal')
            } else {
              ToastAndroid.show('登录失败', ToastAndroid.SHORT)
            }
          }} >
          <Text style={commonStyle.btText}>登录</Text>
        </TouchableHighlight>
        {/* 忘记密码 */}
        <View style={styles.anotherLogin}>
          <Text
            style={loginStyle.newUser}
            onPress={()=>{
              navigation.navigate('Register')
              // alert('aaasasas')
            }}
          >新用户注册</Text>
          <Text
            style={[loginStyle.newUser, {color: '#666'}]}
            onPress={()=>{
              navigation.navigate('ForgetPassword')
              // alert('aaasasas')
            }}
          >忘记密码？</Text>
        </View>
        {/* 其他登陆方式 */}
        {/*<View style={loginStyle.otherLoginTop}>*/}
          {/*<Text style={loginStyle.line}></Text>*/}
          {/*<Text style={loginStyle.middleText}>*/}
            {/*快速登录*/}
          {/*</Text>*/}
          {/*<Text style={loginStyle.line}></Text>*/}
        {/*</View>*/}
        {/*<View style={loginStyle.loginBtnWrapper}>*/}
          {/*<Text style={loginStyle.loginBtn}*/}
                {/*onPress={() => {*/}
                  {/*alert('功能暂未开放！')*/}
                {/*}}*/}
          {/*>*/}
            {/*<Text style={Icomoon.wechat}>&#xe68d;</Text>*/}
          {/*</Text>*/}
          {/*<Text style={loginStyle.loginBtn}*/}
                {/*onPress={() => {*/}
                  {/*alert('功能暂未开放！')*/}
                {/*}}*/}
          {/*>*/}
            {/*<Text style={Icomoon.qq}>&#xe625;</Text>*/}
          {/*</Text>*/}
        {/*</View>*/}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  idCode: {
    position: 'absolute',
    right: 0,
    width: rx(156),
    height: rx(50),
    fontSize: rx(24),
    backgroundColor: '#e0e0e0',
    color: '#343434',
    lineHeight:rx(50),
    textAlign: 'center',
    top: rx(20),
    borderRadius: rx(24),
  },
  anotherLogin: {
    marginTop: rx(40),
    width: width-globalStyle.appHorizontal*2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})