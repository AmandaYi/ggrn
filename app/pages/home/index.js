import React, { Component } from 'react';
import { MapView, MultiPoint } from 'react-native-amap3d'
import { StyleSheet, View, Text, TouchableHighlight, Alert } from "react-native";

import { Geolocation } from "react-native-amap-geolocation"
import { width, rx } from "../../common/variable"
import SideMenu from 'react-native-side-menu';
import LeftSlider from './components/leftSilder'; //导入菜单组件
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coordinate: {
                latitude: 39.91096,
                longitude: 116.67396,
            },
            zoomLevel: 14,
            currMenu: 'NJ',
            // 首页的侧边栏
            homeLeftSliderIsOpen: false,
        }
    }


    _points = Array(1000).fill(0).map(i => ({
        latitude: 39.5 + Math.random(),
        longitude: 116 + Math.random(),
    }))

    _onItemPress = point => Alert.alert(point.latitude.toString())
    // 切换左侧侧边栏
    toggleLeftSlider(isOpen) {
        this.setState({
            homeLeftSliderIsOpen: isOpen
        });
    }
    // 选中了某个标签,拿到子组件广播的事件,item
    selectNav = (item) => {
        alert(item)
        this.setState({
            homeLeftSliderIsOpen: false,

        });
    }

    render() {
        const { navigation } = this.props
        const leftSliderHome = <LeftSlider onItemSelected={this.selectNav} />

        return (
            <SideMenu
                isOpen={this.state.homeLeftSliderIsOpen}
                onChange={(isOpen) => this.toggleLeftSlider(isOpen)}
                menu={leftSliderHome}
                openMenuOffset={rx(438)}
            >


                <View style={styles.container}>
                    <MapView style={StyleSheet.absoluteFill}
                        zoomLevel={this.state.zoomLevel}
                        coordinate={this.state.coordinate}
                    >
                        <MultiPoint
                            points={this._points}
                            onItemPress={this._onItemPress}
                        />


                    </MapView>

                    <View style={styles.mainNav}>
                        <View style={styles.searchBox}>
                            <Text onPress={() => {
                                this.setState({ homeLeftSliderIsOpen: true });
                            }} style={styles.iconFont}>&#xe607;</Text>
                            <Text style={{ fontSize: rx(38) }}>郑州市</Text>
                            <Text style={styles.iconFont}>&#xe615;</Text>
                        </View>
                        <View style={styles.mainMenu}>

                            <TouchableHighlight underlayColor={'#FFF'} onPress={() => this.setState({ currMenu: 'FF' })}>
                                <View style={[styles.menu, this.state.currMenu == 'FF' ? styles.currMenu : '']}>
                                    {this.state.currMenu == 'FF' ?
                                        (<Text style={[styles.iconFont, styles.menuText, styles.currMenuText]}>&#xe636;飞防</Text>)
                                        : (<Text style={[styles.iconFont, styles.menuText,]}>飞防</Text>)
                                    }
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor={'#FFF'} onPress={() => this.setState({ currMenu: 'NJ' })}>
                                <View style={[styles.menu, this.state.currMenu == 'NJ' ? styles.currMenu : '']}>
                                    {this.state.currMenu == 'NJ' ?
                                        (<Text style={[styles.iconFont, styles.menuText, styles.currMenuText]}>&#xe637;农机</Text>)
                                        : (<Text style={[styles.iconFont, styles.menuText]}>农机</Text>)
                                    }
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight underlayColor={'#FFF'} onPress={() => this.setState({ currMenu: 'ZJ' })}>
                                <View style={[styles.menu, this.state.currMenu == 'ZJ' ? styles.currMenu : '']}>
                                    {this.state.currMenu == 'ZJ' ?
                                        (<Text style={[styles.iconFont, styles.menuText, styles.currMenuText]}>&#xe639;专家</Text>)
                                        : (<Text style={[styles.iconFont, styles.menuText]}>专家</Text>)
                                    }
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor={'#FFF'} onPress={() => this.setState({ currMenu: 'NZ' })}>
                                <View style={[styles.menu, this.state.currMenu == 'NZ' ? styles.currMenu : '']}>
                                    {this.state.currMenu == 'NZ' ?
                                        (<Text style={[styles.iconFont, styles.menuText, styles.currMenuText]}>&#xe638;农资</Text>)
                                        : (<Text style={[styles.iconFont, styles.menuText]}>农资</Text>)
                                    }
                                </View>
                            </TouchableHighlight>

                        </View>
                    </View>


                </View>


            </SideMenu>
        );
    }

    componentDidMount() {
        Geolocation.init({
            android: "043b24fe18785f33c491705ffe5b6935",
            ios: "043b24fe18785f33c491705ffe5b6935"
        })

        Geolocation.setOptions({
            interval: 8000,
            distanceFilter: 20
        })
        Geolocation.addLocationListener(location => {
            this.setState({
                coordinate: {
                    latitude: location.latitude,
                    longitude: location.longitude,
                }
            })
            Geolocation.stop()
        })
        Geolocation.start()

    }

    componentWillUnmount() {
        Geolocation.stop()
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainNav: {
        width: width,
        height: rx(198),
        position: 'absolute',
        top: 0,
        backgroundColor: '#FFF',

    },
    searchBox: {
        marginHorizontal: rx(30),
        height: rx(88),
        flexDirection: 'row',
        marginTop: rx(40),
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    mainMenu: {
        flexDirection: 'row',
        height: rx(70),
        alignItems: 'center',
        marginHorizontal: rx(30),
    },

    menu: {
        marginRight: rx(68),
        paddingVertical: rx(11),
        backgroundColor: '#FFF'
    },
    menuText: {
        fontSize: rx(30)
    },
    currMenuText: {
        color: '#fff'
    },
    currMenu: {
        backgroundColor: '#00AF00',
        paddingHorizontal: rx(18),
        borderRadius: rx(35),
    },
    iconFont: {
        fontFamily: 'iconfont',
        fontSize: rx(42),

    }

});


