import React from 'react';
import { Text,View,Button }from  'react-native';
import { createStackNavigator } from 'react-navigation';

import HomePage from '../pages/home/index';
import SupplierPage from '../pages/supplier/index'


class TestScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('HomePage')}
                />
            </View>
        );
    }
}

export default createStackNavigator({
    HomePage:{
        screen: HomePage
    },
    SupplierPage:{
        screen: SupplierPage,
    },
    TestScreen:{
        screen: TestScreen
    }
},{
    initialRouteName:'HomePage',
    headerMode:'none',
})