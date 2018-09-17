import React from "react";
import { View, Text, SectionList, ScrollView, TextInput, ImageBackground } from "react-native";
// 公共组件
import NormaLHeader from "../../components/normalHeader";

import { commonStyle } from "./../provide/style/commonStyle"
import { confirmPayStyle } from "./style/confirmPayStyle";
export default class ConfirmOrderPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            orderList: [{
                companyName: "nameCompany",
                data: [{
                    orderName: "nameOrder"
                }, {
                    orderName: "nameOrder"
                }, {
                    orderName: "nameOrder"
                }]
            },
            {
                companyName: "nameCompany",
                data: [{
                    orderName: "nameOrder"
                }]
            }]
        }
    }










    // 插槽
    renderHeaderSlot() {
        return (
            <View>
                <Text>编辑</Text>
            </View>
        )
    }





    render = () => {
        return (<View style={
            commonStyle.pageBox
        }>
            {/* 头部 */}
            <View>
                <NormaLHeader render={this.renderHeaderSlot}>

                </NormaLHeader>
            </View>
            <ScrollView style={confirmPayStyle.confirmPayPage}>
                <View style={confirmPayStyle.orderCodeAndMoney}>
                    <Text style={confirmPayStyle.orderCode}><Text style={confirmPayStyle.orderTab}>订单号:</Text>6660</Text>
                    <Text style={confirmPayStyle.orderMoney}><Text style={confirmPayStyle.orderTab}>订单金额:</Text><Text style={confirmPayStyle.orderMoneyCurrent}>6666元</Text></Text>
                </View>
                <View style={confirmPayStyle.payWays}>
                    <View style={confirmPayStyle.payTab}>
                        <Text>选择支付方式</Text>
                    </View>
                    <View style={confirmPayStyle.payWays}>
                        <Text>微信支付</Text>
                        <Text>支付宝支付</Text>
                        <Text>农业银行</Text>
                        <Text>其他银行支付</Text>
                        <Text>余额支付</Text> 
                    </View>
                </View>
            </ScrollView>
        </View>
        )
    }



































}