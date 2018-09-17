import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import globalStyle, {
    width,
    rx
} from "../../../common/variable"; 
export default class Agreement extends React.Component {
    constructor(props) {
        super(props)
    }
    render = () => {
        return (
            <View style={agreementStyle.aboutAgree}>
                <Text style={agreementStyle.aboutItem}>{this.props.title}</Text>
                <Text style={[agreementStyle.aboutItem, agreementStyle.currentAboutItem]}>{this.props.desc}</Text>
            </View>
        )
    }
}
export const agreementStyle = StyleSheet.create({
  
    aboutAgree: { 
        justifyContent: "center", 
        width
    },
    aboutItem: { 
        fontSize:rx(24),
        color:"#2d2d2d",
        alignSelf: "center",
        textAlign: "center" 
    },
    currentAboutItem:{
        color:"#2dbb55"
    }

})