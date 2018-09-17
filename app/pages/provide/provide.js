import React from 'react';
import {
  Text,
  View,
  ScrollView,
  FlatList,
//   this is click event
TouchableHighlight
} from 'react-native';
// 公共功能 
// 公共组件
import NormaLHeader from "../../components/normalHeader"
// 私有样式
import {commonStyle} from "./style/commonStyle"
import {provideStyle} from "./style/provideStyle"
// 私有组件
import ProvideItem from "./components/provideItem/provideItem"

// 得到公司信息
import ApiService from "./../../services/apiService/apiService"
export default class ProvidePage extends React.Component {
    constructor(props){
      

        super(props);
         this.apiService = new ApiService()
        this.state={

            companyDetail:{
                companyName:"companyNameTitle"
            },
            provideListArr:[{
                titlt:"玉米播种",
                desc:"1米作物一下,添加道路方便,6米作物一下,我们提供专业的播种工具进行播种",
                price:"10.00-50.00",
                num:15
            },{
                titlt:"玉米播种",
                desc:"1米作物一下,添加道路方便,6米作物一下,我们提供专业的播种工具进行播种",
                price:"10.00-50.00",
                num:15
            },{
                titlt:"玉米播种",
                desc:"1米作物一下,添加道路方便,6米作物一下,我们提供专业的播种工具进行播种",
                price:"10.00-50.00",
                num:15
            },{
                titlt:"玉米播种",
                desc:"1米作物一下,添加道路方便,6米作物一下,我们提供专业的播种工具进行播种",
                price:"10.00-50.00",
                num:15
            },{
                titlt:"玉米播种",
                desc:"1米作物一下,添加道路方便,6米作物一下,我们提供专业的播种工具进行播种",
                price:"10.00-50.00",
                num:15
            }]
        }
   
    }
    componentDidMount=()=>{
        console.log(2)
        let that = this;
        this.apiService.getCompanyById()
        .then(res=>{
            if(res.status==200){
                that.setState({
                    companyDetail: res.data.data.componyDetail
                })
                 
            }
            console.log(res)
        })
    }
    pushPage(page){
        console.log( this.props.navigation);
        // return
       this.props.navigation.navigate(page)
     

    }
    // 示例公司logo图片
    // companySource =  {
    //     uri: require("./images/app.ico"),
    //     cache: 'force-cache'}
    provideList=({item})=>{
        return (
            <TouchableHighlight onPress={this.pushPage.bind(this,"ProvideDetail")}
            underlayColor="#ffffff" >
                <View>            
                     <ProvideItem name={item}></ProvideItem>
                </View>
            </TouchableHighlight>
         
        )
    }
 
    render=()=>{
        return (<View style={
                        commonStyle.pageBox
                    }>
                     {/* 头部 */}
                    <View>
                        <NormaLHeader navigation={ this.props.navigation}></NormaLHeader>
                    </View>
            
                    {/* 公司名字统称 */}
                    <View style={provideStyle.companyBox}>
                        <View style={provideStyle.companyTitle}>
                            <View style={provideStyle.companyAvatar}>
                                {/* <Text>12</Text> */}
                                {/* <Images source={this.companySource} /> */}
                            </View>
                            <View style={provideStyle.companyName}>
                                <Text  style={provideStyle.companyText}>
                                     {this.state.companyDetail.name}
                                </Text>
                                <Text  style={provideStyle.companyRating}>★★★★★</Text>
                            </View>
                        </View>
                        <View style={provideStyle.companyDesc}>
                            <Text style={provideStyle.companyDescText}> {this.state.companyDetail.desc}</Text>
                        </View>
                    </View>

              
                    {/* 服务列表 */}
                    <View style={provideStyle.provideList}>
                  
                        <View style={provideStyle.listHeader}>
                            <Text style={provideStyle.listHeaderText}>
                                服务项目
                            </Text>
                        </View>
                   
                        <View style={provideStyle.listContent}>
                            <FlatList
                            horizontal={false}
                            renderItem={this.provideList} data={this.state.provideListArr} 
                            keyExtractor={(item,index)=>item+index}></FlatList>
                        </View>
                 
                    </View>
                 
                </View>)
    }
}