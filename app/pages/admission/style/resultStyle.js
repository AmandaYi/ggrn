import {
    StyleSheet
} from "react-native"
import globalStyle, {
    width,
    rx
} from "../../../common/variable"
// 公共的
export const resultStyle = StyleSheet.create({
    result: {
        backgroundColor: "#f1f2f6",
        flex: 1,
    },
    content: {
        height: rx(718),

        width,
        backgroundColor: "#f1f2f6",
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontFamily: 'iconfont',
        color: "#2dbb55",
        fontSize: rx(90),
    },
    status: {
        marginTop: rx(30),
        color: "#2dbb55",
        fontSize: rx(40),
    },
    desc: {
        marginTop: rx(10),
        color: "#666666",
        fontSize: rx(26),
    },
    push: {
        width, 
        justifyContent: 'center',
        alignItems: 'center',
    },
})




