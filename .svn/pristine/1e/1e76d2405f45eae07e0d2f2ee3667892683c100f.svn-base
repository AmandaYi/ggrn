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
import { commonStyle } from "./style/commonStyle"
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
export default class ForgetPassword extends Component{
  constructor(props) {
    super(props);
    // 设置默认账号、密码，用于测试
    this.state = {
      telPhone: '',
    }
  }

  //placeholder 类似于android edite hint
  //secureTextEntry 安全模式 也就是密码模式
  //onChangeText 文本框内容改变后回调
  render() {
    const {navigation} = this.props
    return (
      <View
        style={commonStyle.pageBox}
      >
        <Text style={styles.title}>输入手机号</Text>
        {/* 输入手机号 */}
        <View
          style={[commonStyle.inputBox, {marginBottom: rx(36),}]}>
          <Text style={commonStyle.leftTitle}>
            手机号:
            <Text style={Icomoon.jiantou_dowm}>&#xe65e;</Text>
          </Text>
          <TextInput
            style={commonStyle.input}
            secureTextEntry = {false}
            placeholder={'请输入您的手机号'}
            placeholderTextColor={ '#999' }
            maxLength={11}
            underlineColorAndroid={'transparent'}
            value={this.state.telPhone}
            onChangeText = {text => {
              this.setState({
                telPhone: text
              })
            }}
          />
        </View>
        {/* 登陆按钮 */}
        <TouchableHighlight
          style={ commonStyle.button }
          underlayColor='gray'
          onPress = {() => {
            // 此处需要做验证，还要判断数据库里是否有输入的账号，有则下一步页面跳转，发送验证码，否则提示注册
            //   ToastAndroid.show('返回首页', ToastAndroid.SHORT)
              navigation.navigate('ForgetPassNext', {'telPhone': this.state.telPhone})
          }} >
          <Text style={commonStyle.btText}>下一步</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  loginText: {
    textAlign: 'left',
    fontWeight: '700',
    // fontSize: scaleFont(37),
    fontSize: rx(36),
    color: '#343434',
    // lineHeight: scaleSize(155)
    lineHeight: rx(154),
  },
  title: {
    fontSize: rx(44),
    color: '#323232',
    marginTop: rx(34),
    marginBottom: rx(100),
    width: width-globalStyle.appHorizontal*2,
    textAlign: 'left'
  },
});
