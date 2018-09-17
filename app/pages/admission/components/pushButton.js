import React from 'react';
import {
    Text,
    View
} from 'react-native';
import {pushButtonStyle} from "./pushButtonStyle"
export default class PushButton extends React.Component {
    constructor(props) {
        super(props)
    }
    render = () => {
        return (
            <View style={pushButtonStyle.btnBox}>
                <Text style={pushButtonStyle.btnText}>
                    {this.props.title}
                </Text>
            </View>
        )
    }
}