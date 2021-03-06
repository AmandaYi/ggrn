import React, { Component} from 'react'
import {
  Text,
  TextInput,
  TouchableHighlight,
  ToastAndroid,
  View,
  StyleSheet
} from 'react-native'
import {Icomoon} from "./style/icomoon";
import {commonStyle} from './style/commonStyle'
import  globalStyle,{
  width,
  rx
} from "../../common/variable"

export default class ForgetPassLast extends  Component{
  constructor(props) {
    super(props)
    this.state = {
      verCode: ''
    }
  }

  render() {
    const {navigation} = this.props
    return (
      <View style={commonStyle.pageBox}>
        <Text style={styles.title}>重置密码</Text>
        <Text style={styles.subTitle}>设置账户登录密码</Text>
        {/* 验证码 */}
        <View
          style={[commonStyle.inputBox, {marginBottom: 0, marginTop:rx(50),}]}>
          <Text style={[commonStyle.leftTitle]}> 密 码：</Text>
          <TextInput
            ref='code'
            style={commonStyle.input}
            placeholder={'请输入新密码' }
            placeholderTextColor={ '#999' }
            underlineColorAndroid={'transparent'}
            value={this.state.verCode}
            onChangeText = {text => {
              this.setState({
                verCode: text
              })
            }}
          />
          <Text style={[styles.clearInput, Icomoon.clearText]}
            onPress={ ()=> {
              this.setState({
                verCode: ''
              })
            } }
          >&#xe61c;</Text>
        </View>
        <Text style={styles.passTip}>需要6-15位字符</Text>
        {/* 按钮 */}
        <TouchableHighlight
          style={ commonStyle.button }
          underlayColor='gray'
          onPress = {() => {
            // 首先验证，输入密码格式正确，发送修改密码的请求，不正确，给出提示，请求正常返回，点击下一步，跳转密码登录页面，请求不正常返回，给出提示
              ToastAndroid.show('返回首页', ToastAndroid.SHORT)
              navigation.navigate('Home')
          }} >
          <Text style={commonStyle.btText}>下一步</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: rx(44),
    color: '#323232',
    marginTop: rx(34),
    width: width-globalStyle.appHorizontal*2,
    textAlign: 'left'
  },
  subTitle:{
    fontSize:  rx(36),
    color: '#666',
    width: width-globalStyle.appHorizontal*2,
    textAlign: 'left',
    marginBottom:  rx(100),
    marginTop:  rx(15),
  },
  passTip: {
    width: width - rx(100),
    textAlign: 'left',
    color: '#2dbb55',
    fontSize: rx(28),
    marginTop: rx(10)
  },
  clearInput: {
    position: 'absolute',
    bottom: rx(20),
    right: rx(10),
    width: rx(32),
    height: rx(32),
    borderRadius: rx(16),
  }
})