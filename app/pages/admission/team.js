import React from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
    TouchableHighlight,
    TouchableOpacity 
} from 'react-native';

// 公共组件
import NormaLHeader from "../../components/normalHeader"
import PushButton from "./components/pushButton"
import Agreement from "./components/agreement";
// 私有样式
import { commonStyle } from "./style/commonStyle"
import {
    merchantTeamStyle
} from "./style/merchantTeamStyle"
import { List, Button, Picker } from 'antd-mobile-rn';
const AntdItem = List.Item;
// 服务商
const RenderCompany = (props) => {
    return (
        <TouchableHighlight  
        underlayColor="#f5f5f5"
        onPress={props.onClick}>
            <View style={[merchantTeamStyle.colItem, merchantTeamStyle.teamColItem]}
            >
                <View style={merchantTeamStyle.tip}>
                    <Text style={merchantTeamStyle.tipText}>所属服务商</Text>
                </View>
                <View style={merchantTeamStyle.scanf}>
                    <Text style={merchantTeamStyle.pickerScanfInput}>{props.extra}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}
export default class TeamPage extends React.Component {

    constructor() {
        super()
        this.state = {
            // 服务商
            companyArr: [{
                value: "1",
                label: "浙江省飞防"
            },
            {
                value: "2",
                label: "云南省飞防"
            }],
            // 选择的value服务商
            selectComanyValue: []
        }
    }

    // 选中的服务商,value是一个id
    onChangeCompany = (value) => {
        let that = this
        // that.setState({
        //     selectComanyValue: value
        // })
        async function setValue() {
            await new Promise(resolve => {
                that.setState({
                    selectComanyValue: value
                })
                resolve()
            })
            return that.state

        }
        setValue()
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

            <ScrollView style={merchantTeamStyle.merchantTeam}>
                {/*Ok,this team belong service*/}


                <View  >
                    <Picker data={this.state.companyArr}
                        cols={1}
                        value={this.state.selectComanyValue}
                        onChange={this.onChangeCompany}
                        okText="挂靠"
                        extra="请选择挂靠的服务商"
                    >

                        <RenderCompany></RenderCompany>
                        {/*    
                                  <View>
                            <AntdItem style={merchantTeamStyle.teamColItem} arrow="horizontal" extra="请选择挂靠的服务商">所属服务商</AntdItem>

                        </View>
                            <View style={[merchantTeamStyle.colItem, merchantTeamStyle.teamColItem]}
                            onClick={this.onClick()}
                            extra="请选择挂靠的服务商"
                        >
                            <View style={merchantTeamStyle.tip}>


                                <Text style={merchantTeamStyle.tipText}>所属服务商</Text>

                            </View>
                            <View style={merchantTeamStyle.scanf}>
                                <Text style={merchantTeamStyle.pickerScanfInput}>请选择挂靠的服务商</Text>
                            </View>
                        </View>
                     */}
                    </Picker>
                </View>
                {/*
            
                      <View style={[merchantTeamStyle.colItem, merchantTeamStyle.teamColItem]}>
                     <AntdItem arrow="horizontal" extra="请选择挂靠的服务商">所属服务商</AntdItem>
                    <View style={merchantTeamStyle.tip}>


                        <Text style={merchantTeamStyle.tipText}>所属服务商</Text>

                    </View>
                    <View style={merchantTeamStyle.scanf}>
                        <TextInput style={merchantTeamStyle.scanfInput}

                            placeholder="请选择挂靠的服务商"
                            placeholderTextColor="#999999"
                            spellCheck={false}
                            clearButtonMode="always"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                </View>    */}

                <View style={merchantTeamStyle.colItem}>
                    <View style={merchantTeamStyle.tip}>
                        <Text style={merchantTeamStyle.tipText}>公司名称</Text>
                    </View>
                    <View style={merchantTeamStyle.scanf}>
                        <TextInput style={merchantTeamStyle.scanfInput}

                            placeholder="请输入公司名称"
                            placeholderTextColor="#999999"
                            spellCheck={false}
                            clearButtonMode="always"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                </View>



                <View style={merchantTeamStyle.colItem}>
                    <View style={merchantTeamStyle.tip}>
                        <Text style={merchantTeamStyle.tipText}>联系电话</Text>
                    </View>
                    <View style={merchantTeamStyle.scanf}>
                        <TextInput style={merchantTeamStyle.scanfInput}

                            placeholder="请输入联系电话"
                            placeholderTextColor="#999999"
                            spellCheck={false}
                            clearButtonMode="always"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                </View>



                <View style={merchantTeamStyle.colItem}>
                    <View style={merchantTeamStyle.tip}>
                        <Text style={merchantTeamStyle.tipText}>法人姓名</Text>
                    </View>
                    <View style={merchantTeamStyle.scanf}>
                        <TextInput style={merchantTeamStyle.scanfInput}

                            placeholder="请选择法人姓名"
                            placeholderTextColor="#999999"
                            spellCheck={false}
                            clearButtonMode="always"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                </View>


                <View style={merchantTeamStyle.colItem}>
                    <View style={merchantTeamStyle.tip}>
                        <Text style={merchantTeamStyle.tipText}>法人电话</Text>
                    </View>
                    <View style={merchantTeamStyle.scanf}>
                        <TextInput style={merchantTeamStyle.scanfInput}

                            placeholder="请选择法人电话"
                            placeholderTextColor="#999999"
                            spellCheck={false}
                            clearButtonMode="always"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                </View>

                <View>
                    <Picker data={this.state.companyArr}
                        cols={1}
                        value={this.state.selectComanyValue}
                        onChange={this.onChangeCompany}
                        okText="挂靠"
                    >

                        <AntdItem arrow="horizontal">所在区域</AntdItem>

                    </Picker>
                </View>
                <View style={merchantTeamStyle.colItem}>
                    <View style={merchantTeamStyle.tip}>
                        <Text style={merchantTeamStyle.tipText}>所在区域</Text>
                    </View>
                    <View style={merchantTeamStyle.scanf}>
                        <TextInput style={merchantTeamStyle.scanfInput}

                            placeholder="请选择所在区域"
                            placeholderTextColor="#999999"
                            spellCheck={false}
                            clearButtonMode="always"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                </View>

                <View style={[merchantTeamStyle.colItem, merchantTeamStyle.infoColItem]}>
                    <View style={merchantTeamStyle.tip}>
                        <Text style={merchantTeamStyle.tipText}>详细地址</Text>
                    </View>
                    <View style={merchantTeamStyle.scanf}>
                        <TextInput style={merchantTeamStyle.scanfInput}

                            placeholder="请选择详细地址"
                            placeholderTextColor="#999999"
                            spellCheck={false}
                            clearButtonMode="always"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                </View>
                {/*map div*/}
                <View style={merchantTeamStyle.map}>
                </View>
                <View style={merchantTeamStyle.push}>
                    <PushButton title="下一步"></PushButton>
                </View>

                <View style={merchantTeamStyle.aboutAgree}>
                    <Agreement title="点击“下一步”即表示您同意协议：" desc="呱呱农服平台协议"></Agreement>
                </View>
            </ScrollView>
        </View>
        )
    }



















































































































}