import {
    StyleSheet
} from "react-native";
import globalStyle, {
    rx,
    width
} from "./../../common/variable";
export const normalHeaderStyle = StyleSheet.create({
    header: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        width,
        height: rx(88),
        backgroundColor: "#ffffff"
    },
    back: {
        alignSelf: 'center',
    },
    backText: {
        marginLeft: globalStyle.appHorizontal,
        // backgroundColor: "#00f"
        fontFamily: 'iconfont',
        fontSize: rx(40),
        
        color:globalStyle.textColor
    },
    title: {
        alignSelf: 'center',
    },
    titleText:{
        color:globalStyle.textColor,
        fontSize:rx(36)
    },
    special: {
        alignSelf: 'center',
        marginRight: globalStyle.appHorizontal,
    },
    spacialText:{
        fontFamily:"iconfont",
        fontSize: rx(40),
        color:globalStyle.textColor
    }
})