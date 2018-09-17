import React from 'react';
import {
  Text,
  View
} from 'react-native';
import {provideItemStyle} from "./provideItemStyle"
export default class ProvideItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      provideItem: this.props.item
    }
  }
  render=()=>{
    return (
     <View style={provideItemStyle.provideList}>
       {/*  <View style={provideItemStyle.provideItem}>
           <View style={provideItemStyle.provideLeft}>
              <Text style={provideItemStyle.thumbnail}></Text>
           </View>
           <View style={provideItemStyle.provideRight}>
              <View style={provideItemStyle.itemTitle}>
                <Text  style={provideItemStyle.itemTitleText}>低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田</Text>
              </View>
              <View style={provideItemStyle.itemDesc}>
                <Text style={provideItemStyle.itemDescText}>1.6米以下作物，田间道路方便，6米以下作物，田间道路方便，6米以下作物，田间道路方便，6米以下作物，田间道路方便，6米以下作物，田间道路方便，6米以下作物，田间道路方便，6米以下作物，田间道路方便，6米以下作物，田间道路方便，6米以下作物，田间道路方便，6米以下作物，田间道路方便，6米以下作物，田间道路方便，6米以下作物，田间道路方便，6米以下作物，田间道路方便， 供电水源资源，施药量每亩800ml左右，日作业可超...</Text>
              </View>
              <View style={provideItemStyle.itemPriceCount}>
                <Text style={provideItemStyle.itemPrice}>￥100000.00 ~ ¥300000.00/次</Text>
                <Text style={provideItemStyle.itemCount}>已售123456789</Text>
              </View>
             </View>
        </View> */}
             <View style={provideItemStyle.provideItem}>
           <View style={provideItemStyle.provideLeft}>
              <Text style={provideItemStyle.thumbnail}></Text>
           </View>
           <View style={provideItemStyle.provideRight}>
              <View style={provideItemStyle.itemTitle}>
                <Text  style={provideItemStyle.itemTitleText}>低 田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮大田低矮 大田低矮大田</Text>
              </View>
              <View style={provideItemStyle.itemDesc}>
                <Text style={provideItemStyle.itemDescText}>1.6米以 ，6米 方便.6米以 ，6米 方便.6米以 ，6米 方便.6米以 ，6米 方便.6米以 ，6米 方便.6米以 ，6米 方便.6米以 ，6米 方便.6米以 ，6米 方便.6米以 ，6米 方便.6米以 ，6米 方便.6米以 ，6米 方便.6米以 ，6米 方便.6米以 ，6米 方便.6米以 ，6米 方便.6米以 ，6米 方便，6 ，日作业可超...</Text>
              </View>
              <View style={provideItemStyle.itemPriceCount}>
                <Text style={provideItemStyle.itemPrice}>￥100000.00 </Text>
                <Text style={provideItemStyle.itemCount}>已售12342222222222222222222222225 </Text>
              </View>
             </View>
        </View> 
      </View>
    )
  }
}