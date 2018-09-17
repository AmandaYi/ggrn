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
import { commonStyle } from "./style/commonStyle"
import { resultStyle } from "./style/resultStyle"
import PushButton from "./components/pushButton"
export default class ResultPage extends React.Component {
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
            <ScrollView style={resultStyle.result}>
                {/*Ok,this teme belong service*/}
                <View style={resultStyle.content}>
                    <Text style={resultStyle.icon}>&#xe624;</Text>
                    <Text style={resultStyle.status}>审核中</Text>
                    <Text style={resultStyle.desc}>申请成功，正在审核中，请耐心等待...</Text>
                </View>
                <View style={resultStyle.push}>
                <PushButton title="回到首页"></PushButton>
            </View>
            </ScrollView>
        </View>
        )

    }
}