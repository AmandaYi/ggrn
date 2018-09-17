import React from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
    TouchableHighlight
} from 'react-native';
// 公共组件
import NormaLHeader from "../../components/normalHeader"
// 私有样式
import { commonStyle } from "./style/commonStyle"
import {
    admissionStyle
} from "./style/admissionStyle"
export default class AdmissionPage extends React.Component {

    constructor() {
        super()
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
            <ScrollView style={admissionStyle.admission}>
                <View style={admissionStyle.banner}>
                    <Image style={admissionStyle.bannerImg} source={require("./images/admission.png")}></Image>
                </View>
                <View style={admissionStyle.tab}>
                    <Text style={admissionStyle.tabText}>类型</Text>
                </View>
                <View style={admissionStyle.tabBox}>
                    <View style={admissionStyle.boxItem}>
                        <Image roundAsCircle={true} style={admissionStyle.boxItemImg} source={require("./images/merchant.png")}></Image>
                        <Text style={admissionStyle.boxItemTitle} >服务商</Text>
                        <Text style={admissionStyle.boxItemDesc} >依法经营生产销售企业或厂家授权经销代理，有经营许可。</Text>
                        <Text style={admissionStyle.boxItemBtn}>立即入住</Text>
                    </View>
                    <View style={admissionStyle.boxItem}>
                        <Image roundAsCircle={true} style={admissionStyle.boxItemImg} source={require("./images/team.png")}></Image>
                        <Text style={admissionStyle.boxItemTitle}>服务队</Text>
                        <Text style={admissionStyle.boxItemDesc}>需要选择一家服务商作担保，即可成为呱呱平台服务队。</Text>
                        <Text style={admissionStyle.boxItemBtn}>立即入住</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
        )
    }


















































































































}