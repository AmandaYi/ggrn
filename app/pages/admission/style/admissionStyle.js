import {
    StyleSheet
} from "react-native"
import globalStyle, {
    width,
    rx
} from "../../../common/variable"
// 公共的
export const admissionStyle = StyleSheet.create({
    admission: {
        backgroundColor: "#ffffff"
    },
    banner: {
        width,
        height: rx(275),
        justifyContent: 'center',
        alignItems: 'center',
    },
    bannerImg: {
        width,
        height: rx(275),
        alignSelf: 'center',
    },
    tab: {
        backgroundColor: "#ffffff",
        height: rx(90),
        paddingHorizontal: globalStyle.appHorizontal,
    },
    tabText: {
        height: rx(90),
        lineHeight: rx(90),
        fontSize: rx(32),
        color: "#333333"
    },
    tabBox: {
        paddingHorizontal: globalStyle.appHorizontal,
        height: rx(450),
        backgroundColor: "#ffffff",
        flexDirection: 'row',
        justifyContent: "space-between",


    },
    boxItem: {
        width: rx(330),
        height: rx(450),
        backgroundColor: "#ffffff",
        borderColor: "#999999",
        borderWidth: 1,
        borderRadius: rx(10),
    },
    boxItemImg: {
        width: rx(330),
        height: rx(200),
        borderWidth: 1,
        borderRadius: rx(8),
    },
    boxItemTitle: {
        color: "#333333",
        fontSize: rx(30),
        alignSelf: "center",
        marginTop: rx(14),
    },
    boxItemDesc: {
        marginTop: rx(14),
        paddingHorizontal: rx(20),
        color: "#666666",
        fontSize: rx(24),
    },
    boxItemBtn: {
        marginTop: rx(10),
        width: rx(280),
        height: rx(64),
        backgroundColor: "#2dbb55",
        lineHeight: rx(64),
        alignSelf: "center",
        textAlign: "center",
        fontSize: rx(30),
        color: "#ffffff"
    }
})




