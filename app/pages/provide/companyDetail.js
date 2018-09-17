import React from "react";
import {
    Text,
    View,
    Image,
    ScrollView,
    StatusBar
} from 'react-native';
// 公共组件
// import NormaLHeader from "../../components/normalHeader/normalHeader"
// 私有样式
import { commonStyle } from "./style/commonStyle"
import { companyDetailStyle } from "./style/companyDetailStyle"
// 私有组件
import ProvideItem from "./components/provideItem/provideItem"
export default class CompanyDetail extends React.Component {
    constructor(props) {
        super(props)
    }



    render = () => {
        return (
            <View style={
                commonStyle.pageBox
            }>

                {/* 头部 */}
                <ScrollView style={companyDetailStyle.scrollView}>


                    <View style={companyDetailStyle.banner}>

                        <Text style={[companyDetailStyle.bannerIcon, companyDetailStyle.bannerBack]}>&#xe610;</Text>
                        <Image style={companyDetailStyle.bannerImage} source={require("./images/companybanner.png")} />
                        <Text style={companyDetailStyle.bannerIcon}></Text>
                    </View>

                    <View style={companyDetailStyle.info}>
                        <View style={companyDetailStyle.logo}>
                            <Image style={companyDetailStyle.logoImage} source={require("./images/companylogo.png")} />
                        </View>
                        <View style={companyDetailStyle.infoTitle}>
                            <Text style={companyDetailStyle.name}>
                                河南亿诺航空科技有限公司
                    </Text>
                            <Text style={companyDetailStyle.rating}>
                                ★★★★★
                    </Text>

                        </View>
                    </View>
                    <View style={companyDetailStyle.nameBlcok}>
                        <Text style={companyDetailStyle.nameTab}>公司简介</Text>
                        <Text style={companyDetailStyle.nameDesc}>亿诺航空科技有限公司，成立于2010年，是一家集研发、生产、服务、资源整合、项目合作、创业孵化、培训、教学于一体的创新型企业...</Text>
                        {/*<Text style={companyDetailStyle.nameMore}>查看更多&#xe65e;</Text>*/}
                    </View>
                    <View style={companyDetailStyle.nameBlcok}>

                        <Text style={companyDetailStyle.nameAddRessDesc}>地址: 河南省金水区分产路财源大厦B河南省金水区分产路财源大厦B河南省金水区分产路财源大厦B河南省金水区分产路财源大厦B</Text>
                        {/*<Text style={companyDetailStyle.nameMore}>查看更多&#xe65e;</Text>*/}
                    </View>
                    <View style={companyDetailStyle.nameBlcok}>
                        <Text style={companyDetailStyle.nameTab}>风采展示</Text>
                    </View>

                    <View style={companyDetailStyle.companyImages}>

                        <Image style={companyDetailStyle.companyImage} source={require("./images/providethum.png")} />
                        <Image style={companyDetailStyle.companyImage} source={require("./images/providethum.png")} />
                        <Image style={companyDetailStyle.companyImage} source={require("./images/providethum.png")} />
                    </View>
                    <View style={companyDetailStyle.proWrap}>
                        <View style={companyDetailStyle.proTab}>

                            <Text style={companyDetailStyle.proTabName}>
                                产品/服务
                    </Text>
                            <Text style={companyDetailStyle.proTabMore}>
                                共30条&#xe65e;
                    </Text>
                        </View>

                        <View style={companyDetailStyle.proItemList}>
                            <ProvideItem></ProvideItem>
                        </View>
                    </View>
                </ScrollView>

            </View>
        )
    }

































}