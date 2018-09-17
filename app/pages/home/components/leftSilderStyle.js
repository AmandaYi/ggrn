 
 
 
 
 
 import {StyleSheet} from 'react-native';
 
 
 
 import globalStyle, {
    width,
    rx
} from "../../../common/variable"
 
 
 
 
 
 
 
 
 
 
 
 export const leftSilderStyle = StyleSheet.create({
 
    leftSilder:{
        flex:1,
        paddingTop:rx(40),
        width:rx(438),
        backgroundColor:"#ffffff",  
        justifyContent: 'flex-start',
        position: "relative",
     
    },
    avatar:{
        backgroundColor:"#ffffff",
        height:rx(220),
        alignItems: 'center',
    },
    photo:{
        marginTop: rx(40),
        width:rx(110),
        height:rx(110),
        backgroundColor:"#cccccc"
    },
    nick:{
        marginTop: rx(20),

        fontSize: rx(30),
        color:"#333333"
    },
    nav:{
        marginTop:rx(100),
        backgroundColor:"#ffffff",
    },
    navItem:{
        flexDirection: 'row',
    },
    navItemText:{
        fontFamily: 'iconfont',
 

        fontSize: rx(30),
        color:"#333333",
        height:rx(90),
        lineHeight:rx(90)
    },
    icon:{
        fontSize: rx(30),

        fontFamily: 'iconfont',
        color:"#333333",
        height:rx(90),
        lineHeight:rx(90), 
        paddingLeft: rx(50),
        marginRight: rx(20),
    },
    iconCart:{
        fontSize:rx(36),
        paddingLeft: rx(48),

    },
    replay:{
        position: "absolute",
        bottom:rx(120),
        flexDirection: 'row',

    },
    replayText:{ 
      height:rx(90),
      lineHeight:rx(90),
        fontSize: rx(30),
        color:"#333333"
    }
}) 