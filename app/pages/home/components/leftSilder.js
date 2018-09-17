import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native'

import { leftSilderStyle } from "./leftSilderStyle";

export default class Menu extends React.Component {





    render() {
        return (
            <View style={leftSilderStyle.leftSilder}>
                <View style={leftSilderStyle.avatar}>
                    <Image style={leftSilderStyle.photo} source={require("./../images/avatar.png")} />
                    <Text style={leftSilderStyle.nick}>158 8888 8888</Text>
                </View>
                <View style={leftSilderStyle.nav}>
                    <View style={leftSilderStyle.navItem}>
                        <Text style={[leftSilderStyle.icon,leftSilderStyle.iconCart]}>&#xe63d;</Text>
                        <Text style={leftSilderStyle.navItemText}>购物车</Text>
                    </View>
                    <View style={leftSilderStyle.navItem}>
                        <Text style={leftSilderStyle.icon}>&#xe624;</Text>
                        <Text style={leftSilderStyle.navItemText}>我的订单</Text>
                    </View>
                    <View style={leftSilderStyle.navItem}>
                        <Text style={leftSilderStyle.icon}>&#xe626;</Text>
                        <Text style={leftSilderStyle.navItemText}>我的钱包</Text>
                    </View>
                    <View style={leftSilderStyle.navItem}>
                        <Text style={leftSilderStyle.icon}>&#xe62a;</Text>
                        <Text style={leftSilderStyle.navItemText}>设置</Text>
                    </View>
                </View>
                <View style={leftSilderStyle.replay}>
                    <Text style={leftSilderStyle.icon}>&#xe63e;</Text>
                    <Text style={leftSilderStyle.replayText}>申请服务商入驻</Text>
                </View>
            </View>
        );
    }
}
