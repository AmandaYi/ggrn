import React from 'react'
import {
    Text,
    View,
    TouchableHighlight
} from 'react-native'
import { normalHeaderStyle } from "./style/componentsStyle.js";
import  navigation from "react-navigation";
export default class NormaLHeader extends React.Component {
    constructor(props) {
        super(props);
        //    this.navigation = this.props.navigation
    }
    popPage() { 
        // console.log(this.props.navigation)
        // return 
    //  navigation.pop() 
    console.log(navigation)
    }
    backIcon = "\ue610";
    render = () => {
        return (<View style={normalHeaderStyle.header}>

            <View style={normalHeaderStyle.back}>
                <TouchableHighlight underlayColor="#ffffff" onPress={this.popPage.bind(this)}>
                    <Text style={normalHeaderStyle.backText}>{this.backIcon}</Text>
                </TouchableHighlight>
            </View>

            {/*  <TouchableHighlight onPress={() => this.popPage.bind(this)}> </TouchableHighlight>*/}
            <View style={normalHeaderStyle.title}><Text style={normalHeaderStyle.titleText}>标题</Text></View>
            <View style={normalHeaderStyle.special}><Text style={normalHeaderStyle.spacialText}>&#xe61b;</Text></View>
        </View>)
    }
}