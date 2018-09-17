import {
    StyleSheet
} from "react-native"
import globalStyle, {
    width,
    rx
} from "../../../common/variable"
// 公共的
export const merchantTeamStyle = StyleSheet.create({
    merchantTeam: {
        backgroundColor: "#f5f5f5"
    },
    teamColItem: {
        marginVertical: rx(20),
        borderBottomWidth: 1,
        borderColor: "#eeeeee",
        // height:rx(94)
    },
    colItem: {
        height: rx(94),
        width,
        backgroundColor: "#ffffff",
        flexDirection: 'row',
        paddingHorizontal: globalStyle.appHorizontal,
        borderTopWidth: 1,
        borderColor: "#eeeeee"
    },
    infoColItem: {
        borderBottomWidth: 1,
        borderColor: "#eeeeee"
    },
    tip: {
        flex: 1,
        height: rx(94),
    },
    tipText: {
        height: rx(94),
        lineHeight: rx(94),
        fontSize: rx(32),
        color: "#333333"
    },
    scanf: {
        flex: 3
    },
    pickerScanfInput: {
        fontSize: rx(30),
        color: "#898989",
        textAlign: "right",
        height: rx(94),
        lineHeight: rx(94),
    },
    scanfInput: {
        fontSize: rx(30),
        color: "#333333",
        textAlign: "right"
    },

    map: {
        // width,
        // height:rx(307)
    },
    push: {
        width,
        marginTop: rx(60),
        justifyContent: 'center',
        alignItems: 'center',
    },

    aboutAgree: {
        marginTop: rx(10),
        justifyContent: "center",
        width
    }
})




