import React from 'react'
import { Text,View,Button }from  'react-native'

export default  class Index extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>供应商信息 页面 </Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('HomePage')}
                />
            </View>
        );
    }
}