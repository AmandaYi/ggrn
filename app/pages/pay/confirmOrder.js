import React from "react";
import { View, Text, SectionList, ScrollView, TextInput ,ImageBackground,TouchableHighlight} from "react-native";
// 公共组件
import NormaLHeader from "../../components/normalHeader";
// 私有组件
import CollectInfo from "./components/collectInfo/collectInfo"
import {commonStyle} from "./../provide/style/commonStyle"
import { cartStyle  } from "./../provide/style/cartStyle";
import {
    confirmOrderStyle
} from "./style/confirmOrderStyle"
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
            }, {
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

    pushConfirmPay=(page)=>{
        this.props.navigation.navigate(page)

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
            <ScrollView style={{backgroundColor:"#00f"}}>
                  <CollectInfo></CollectInfo>  
 


                   <View style={confirmOrderStyle.coloured}>
                       <ImageBackground style={confirmOrderStyle.colouredBg} source={require("./images/confirmOrderBg.png")} >
                
                     </ImageBackground>
                </View>
 

                {/* 购物车 */}
                <View style={[cartStyle.itemWrap]}>
                    <SectionList
                        sections={this.state.orderList}
                        renderSectionHeader={this.renderOrderCompany}
                        renderItem={this.renderOrderThisList}
                        renderSectionFooter={this.renderOrderNotes}
                        keyExtractor={(item, index) => index}
                    ></SectionList>
                </View>
                {/* <SectionList renderItem={this.renderOrderItem} 
                sections={this.state.orderList}
                keyExtractor={()=>""}
                ></SectionList> */}
            </ScrollView>
            <View style={cartStyle.detailBottom}>
                {/*
                 <Text style={[cartStyle.checkedIcon, cartStyle.checkedIconCurrent]}>
                    &#xe61e;全选
                 </Text> 
                */}
                <Text style={cartStyle.computeBlock}>
                    合计：<Text style={cartStyle.computeBlockNumber}>&yen;10500.00</Text>
                </Text>
               
                
                <View style={cartStyle.btnGroup}>
                <TouchableHighlight onPress={this.pushConfirmPay.bind(this,"confirmPay")}
                underlayColor="#ffffff" >
                    <Text style={cartStyle.sumFmt}>提交订单</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
        )
    }










    // 渲染公司的名字的组件位置
    renderOrderCompany = () => {
        return (
            <View style={cartStyle.company}>
                {/*
            
            
          <Text style={[cartStyle.checkedIcon, cartStyle.checkedIconCurrent]}>
                    &#xe61e;
                    </Text>   */}
                <Text style={cartStyle.companyIcon}>
                    &#xe604;
                    </Text>
                <Text style={cartStyle.companyName}>
                    自动截取成功公司名字公司名字公司名字公司名字公司名字公司名字公司名字公司名字公司名字公司名字公司名字公司名字公司名字公司名字
                    </Text>
                <Text style={cartStyle.companyPushIcon}>
                    &#xe65e;
               </Text>
            </View>
        )
    }
    // 渲染该公司的订单的组件的位置
    renderOrderThisList = () => {
        return (
            <View style={cartStyle.iteminnerList}>
                <View style={cartStyle.iteminner}>
                    {/*    <View style={cartStyle.innerItemIcon}>
                  <Text style={[cartStyle.checkedIcon, cartStyle.checkedIconCurrent]}>
                        &#xe61e;
                        </Text> 
                </View> */}
                    <View style={cartStyle.provideList}>
                        <View style={cartStyle.provideItem}>
                            <View style={cartStyle.provideLeft}>
                                <Text style={cartStyle.thumbnail}></Text>
                            </View>
                            <View style={cartStyle.provideRight}>
                                <View style={cartStyle.itemTitle}>
                                    <Text style={cartStyle.itemTitleText}>低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田</Text>
                                </View>
                                <View style={cartStyle.itemDesc}>
                                    <Text style={cartStyle.itemDescText}>1.6米以下作物，田间道路方便，6米以下作物，田间道路方便，6米以下作物，田间道路方便，6米以下作物，田间道路方便，6米以下作物，田间道路方便，6米以下作物，田间道路方便，6米以下作物，田间道路方便，6米以下作物，田间道路方便，6米以下作物，田间道路方便，6米以下作物，田间道路方便，6米以下作物，田间道路方便，6米以下作物，田间道路方便，6米以下作物，田间道路方便， 供电水源资源，施药量每亩800ml左右，日作业可超...</Text>
                                </View>
                                <View style={cartStyle.category}>
                                    <Text style={cartStyle.categoryText}>水田,水田水田水田水田水田水田水田水田水田水田水田水田水田水田水田,水田,玉米地</Text>
                                </View>
                                <View style={cartStyle.itemPriceCount}>
                                    {/* <Text style={cartStyle.itemPrice}>￥100000.00 ~ ¥300000.00/次</Text> */}
                                    <Text style={cartStyle.itemPrice}>￥1.00</Text>

                                    <View style={cartStyle.itemCount}>
                                        <Text>10001亩</Text>
                                    </View>
                                    {/*  <View style={cartStyle.itemCount}>

                                       <Text>X</Text>

                                   
                                    <TextInput style={cartStyle.projectNavInput}
                                            underlineColorAndroid="transparent"
                                            autoCapitalize="none"
                                            autoCorrect={false}
                                            maxLength={5}
                                            placeholder="0"
                                            placeholderTextColor="#999999"
                                        />  
                                        <Text>亩</Text>
                                    </View>*/}
                                </View>
                            </View>
                        </View>

                        {/* <ProvideItem></ProvideItem> */}
                        {/* <Image source={require("./images/providebanner.png")} /> */}
                    </View>
                </View>

            </View>
        )
    }



    renderOrderNotes = () => {
        return (
            <View style={confirmOrderStyle.orderNotes}>
                <Text style={confirmOrderStyle.orderNotesTitle}>
                    信息备注
                </Text>

                <TextInput style={confirmOrderStyle.orderNotesInput}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    autoCorrect={false}
                    maxLength={30}
                    placeholder="0"
                    placeholderTextColor="#999999"
                />
            </View>
        )
    }




































    renderOrderItemHeader = () => {
        return (
            <View style={cartStyle.itemWrap}>
                {/* 公司名字 */}
                <View style={cartStyle.company}>
                    <Text style={[cartStyle.checkedIcon, cartStyle.checkedIconCurrent]}>
                        &#xe61e;
                    </Text>
                    <Text style={cartStyle.companyIcon}>
                        &#xe604;
                    </Text>
                    <Text style={cartStyle.companyName}>
                        自动截取成功公司名字公司名字公司名字公司名字公司名字公司名字公司名字公司名字公司名字公司名字公司名字公司名字公司名字公司名字
                    </Text>
                    <Text style={cartStyle.companyPushIcon}>
                        &#xe65e;
                    </Text>
                </View>
                {/* 列表 */}
                <View style={cartStyle.iteminnerList}>
                    <View style={cartStyle.iteminner}>
                        <View style={cartStyle.innerItemIcon}>
                            <Text style={[cartStyle.checkedIcon, cartStyle.checkedIconCurrent]}>
                                &#xe61e;
                            </Text>
                        </View>

                        <View style={cartStyle.provideList}>
                            <View style={cartStyle.provideItem}>
                                <View style={cartStyle.provideLeft}>
                                    <Text style={cartStyle.thumbnail}></Text>
                                </View>
                                <View style={cartStyle.provideRight}>
                                    <View style={cartStyle.itemTitle}>
                                        <Text style={cartStyle.itemTitleText}>低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田</Text>
                                    </View>
                                    <View style={cartStyle.itemDesc}>
                                        <Text style={cartStyle.itemDescText}>1.6米以下作物，田间道路方便，6米以下作物，田间道路方便，6米以下作物，田间道路方便，6米以下作物，田间道路方便，6米以下作物，田间道路方便，6米以下作物，田间道路方便，6米以下作物，田间道路方便，6米以下作物，田间道路方便，6米以下作物，田间道路方便，6米以下作物，田间道路方便，6米以下作物，田间道路方便，6米以下作物，田间道路方便，6米以下作物，田间道路方便， 供电水源资源，施药量每亩800ml左右，日作业可超...</Text>
                                    </View>
                                    <View style={cartStyle.itemPriceCount}>
                                        {/* <Text style={cartStyle.itemPrice}>￥100000.00 ~ ¥300000.00/次</Text> */}
                                        <Text style={cartStyle.itemPrice}>￥1.00/次</Text>
                                        <Text style={cartStyle.itemCount}>已售123456789</Text>
                                    </View>
                                </View>
                            </View>

                            {/* <ProvideItem></ProvideItem> */}
                            {/* <Image source={require("./images/providebanner.png")} /> */}
                        </View>
                    </View>

                </View>
            </View>)
    }
}