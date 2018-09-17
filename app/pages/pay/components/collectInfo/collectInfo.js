import React from 'react';
import { View, Text } from "react-native";

import { collectInfoStyle } from "./collectInfoStyle"
export default class CollectInfo extends React.Component {
    // 地址选中组件
    render = () => {
        return (
            <View style={collectInfoStyle.collectInfo}>
                <View style={collectInfoStyle.collectInfoPerson}>
                    <View style={collectInfoStyle.personInfo}>
                        <Text style={collectInfoStyle.textIcon}></Text>
                        <Text style={[collectInfoStyle.personInfoText, collectInfoStyle.personInfoTextName]}>王女士&nbsp;&nbsp;&nbsp;156****2561</Text></View>
                    <View style={collectInfoStyle.personInfo}>
                        <Text style={[collectInfoStyle.textIcon,collectInfoStyle.textIconAddress]}>&#xe612;</Text>
                        <Text style={collectInfoStyle.personInfoText}>北京市天安门</Text>
                    </View>
                    <View style={collectInfoStyle.personInfo}>
                        <Text style={collectInfoStyle.textIcon}>&#xe66c;</Text>
                        <Text style={collectInfoStyle.personInfoText}>作业时间2018-8-8</Text>
                    </View>
                </View>
                <View style={collectInfoStyle.collectInfoTarget}>
                    <Text style={collectInfoStyle.collectInfoText}>&#xe65e;</Text>
                </View>
            </View>


        )
    }
}







