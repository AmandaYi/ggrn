import React, { Component} from 'react'
import {
  Text,
  TextInput,
  TouchableHighlight,
  ToastAndroid,
  Dimensions,
  View,
  StyleSheet
} from 'react-native'
import {commonStyle} from './style/commonStyle'
import  globalStyle,{
  width,
  rx
} from "../../common/variable"

export default class RegisterNext extends  Component{
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
        <Text style={styles.title}>输入手机验证码</Text>
        <Text style={styles.subTitle}>验证码已发送到手机：<Text style={{color: '#2dbb55'}}>{navigation.state.params.telPhone}</Text></Text>
        {/* 验证码 */}
        <View
          style={[commonStyle.inputBox, { marginTop:rx(50)}]}>
          <Text style={[commonStyle.leftTitle]}>验证码：
          </Text>
          <TextInput
            ref='code'
            style={commonStyle.input}
            placeholder={'请输入验证码' }
            placeholderTextColor={ '#999' }
            underlineColorAndroid={'transparent'}
            value={this.state.verCode}
            onChangeText = {text => {
              this.setState({
                verCode: text
              })
            }}
          />
        </View>
        {/* 按钮 */}
        <TouchableHighlight
          style={ commonStyle.button }
          underlayColor='gray'
          onPress = {() => {
            // 如果未按时输入，点击按钮重新获取，如果输入错误，提示重输，如果正确，发送注册请求，获取请求正常返回状态，跳转下一页并传递给下一页，若未返回正常，给出出错提示；超时按钮显示‘重新发送’
            //   ToastAndroid.show('返回首页', ToastAndroid.SHORT)
            navigation.navigate('RegisterLast')
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
})