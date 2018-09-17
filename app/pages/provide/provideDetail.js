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
import {commonStyle} from "./style/commonStyle"
import { provideDetailStyle } from "./style/provideDetailStyle"
// 私有组件
import CommentItem from "./components/commentItem/commentItem"
import ModalCropSpecies from "./components/modalCropSpecies/modalCropSpecies"



// 申请服务商modal状态管理器

 
import {showModalCropSpec} from "../../actions/provideAction";

export default class ProvideDetailPage extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            modalCropSpeciesValue: false
        }
    }
    provideBannerSource = {
        src: "./images/providebanner.png",
        cache: 'force-cache'
    }
    // 组件

    // 函数
    // 加入购物车

    addCart() { 



        alert("Ohoooooooo,加入了购物车")



    }
    // 函数,
    // 进入立刻下单页面
    pushConfirmOrderPage=(page)=>{ 
        this.props.navigation.navigate(page)
    }

    // 展示modal,选中作物种类
    showModal(){
        // this.props.dispatch()
        // alert();
        // console.log(this.state.modalCropSpeciesValue=true);
        // this.setState({

        //     modalCropSpeciesValue:true
        // })
        // store.dispatch(showModalCropSpec(true))
        // console.log(this.context)
        
        // this.props.store.dispatch(showModalCropSpec(true))
    }

    render = () => {
        return (<View style={
            commonStyle.pageBox
        }>
            {/* 头部 */}
            <View>
                <NormaLHeader></NormaLHeader>
            </View>
            <ScrollView style={provideDetailStyle.scrollView}>
                <View style={provideDetailStyle.banner}>
                    <Image style={provideDetailStyle.bannerImage} source={require("./images/providebanner.png")} />
                </View>
                <View style={provideDetailStyle.detailTitle}>
                    <View style={provideDetailStyle.detailName}>
                        <Text style={provideDetailStyle.detailNameText}>
                            detailTitle
                         </Text>
                    </View>
                    <View style={provideDetailStyle.detailUnit}>
                        <Text style={provideDetailStyle.unitPrice}>
                            30<Text style={provideDetailStyle.unit}>/次</Text>
                        </Text>
                        <Text style={provideDetailStyle.doneCount}>
                            已售10
                        </Text>
                    </View>
                </View>
                {/*作物种类*/} 
                <TouchableHighlight onPress={this.showModal.bind(this)}>
                <View style={provideDetailStyle.listTitle}>
               
                        <View style={provideDetailStyle.projectName}>
                            <Text style={provideDetailStyle.projectNameText}>作物种类</Text>
                        </View>
       
                    <View style={provideDetailStyle.projectNavIcon}>
                        <Text style={provideDetailStyle.projectNavIconText}>
                            作物种类&#xe616;
                             </Text>
                        {/*  <TextInput style={provideDetailStyle.projectNavInput}
                                underlineColorAndroid="transparent" 
                                autoCapitalize="none"
                                autoCorrect={false} 
                                maxLength={5}
                                placeholder="请填写"
                                placeholderTextColor="#999999"
                                />
                   
                   
                     <Text style={provideDetailStyle.projectNavIconText}>
                        &#xe65e;
                     </Text>
                    */}
                    </View>
                  
                </View>
                </TouchableHighlight>
                <View style={provideDetailStyle.listTitle}>
                    <View style={provideDetailStyle.projectName}>
                        <Text style={provideDetailStyle.projectNameText}>服务面积(亩)</Text>
                    </View>
                    <View style={provideDetailStyle.projectNavIcon}>

                        <TextInput style={provideDetailStyle.projectNavInput}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                            autoCorrect={false}
                            maxLength={5}
                            placeholder="请填写"
                            placeholderTextColor="#999999"
                        />

                        {/*    <Text style={provideDetailStyle.projectNavIconText}>
                                &#xe65e;
                            </Text>
                            */}
                    </View>
                </View>

                <View style={[provideDetailStyle.listContent, provideDetailStyle.listContentHTML]}>
                    <Text style={provideDetailStyle.listContentTextHTML}>详细</Text>
                </View>
                <View style={provideDetailStyle.listTitle}>
                    <View style={provideDetailStyle.projectName}>
                        <Text style={provideDetailStyle.projectNameText}>此服务由<Text style={provideDetailStyle.companyName}>河南亿诺科技有限公司</Text>提供</Text>
                    </View>
                    <View style={provideDetailStyle.projectNavIcon}>
                        <Text style={provideDetailStyle.projectNavIconText}>
                            &#xe65e;
                            </Text>
                    </View>
                </View>
                <View style={provideDetailStyle.listTitle}>
                    <View style={provideDetailStyle.projectName}>
                        <Text style={provideDetailStyle.projectNameText}>用户点评</Text>
                    </View>
                    <View style={provideDetailStyle.projectNavIcon}>
                        <Text style={provideDetailStyle.projectNavIconText}>12条评论</Text>
                        <Text style={provideDetailStyle.projectNavIconText}>
                            &#xe65e;
                            </Text>
                    </View>
                </View>
                <View>
                    <CommentItem />
                </View>
                <View style={provideDetailStyle.listTitle}>
                    <View style={provideDetailStyle.projectName}>
                        <Text style={provideDetailStyle.projectNameText}>订购须知</Text>
                    </View>
                    <View style={provideDetailStyle.projectNavIcon}>
                        <Text style={provideDetailStyle.projectNavIconText}>查看</Text>
                        <Text style={provideDetailStyle.projectNavIconText}>
                            &#xe65e;
                            </Text>
                    </View>
                </View>
                <View style={provideDetailStyle.listContent}>
                    <Text style={provideDetailStyle.listContentText}>1.商家将在您下单后30分钟内确认是否接单；</Text>
                    <Text style={provideDetailStyle.listContentText}>2.订单确认后，修改订单或退款需提前2小时通知；</Text>
                    <Text style={provideDetailStyle.listContentText}>3.如商家接单后爽约将全额退款并向您全额退款；</Text>
                    <Text style={provideDetailStyle.listContentText}>4.为保障您的权益，所有费用请通过呱呱农服平台支付</Text>
                </View>
            </ScrollView>
            {/* 底部栏 */}
            <View style={provideDetailStyle.detailBottom}>
                <View style={provideDetailStyle.detailCompute}>
                    <Text style={provideDetailStyle.showComputeText}>小计: &yen;10500.00000000000000000000000000000000000000000000000000000000000</Text>
                </View>
                <View style={provideDetailStyle.btnsGroup}>
                    <TouchableHighlight onPress={this.addCart.bind(this)}
                        underlayColor="#ffffff" >
                        <Text style={provideDetailStyle.btnCreateOrder}>加入购物车</Text>

                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.pushConfirmOrderPage.bind(this,"confirmOrder")}
                    underlayColor="#ffffff" >
                          <Text style={provideDetailStyle.btnNowPay}>立即下单</Text>
                    </TouchableHighlight>
                </View>
            </View>
            <View class={provideDetailStyle.cropSpecies}>
                <ModalCropSpecies
                    modalCropSpeciesValue={this.state.modalCropSpeciesValue}
                ></ModalCropSpecies>
            </View>
        </View>)
    }
}


