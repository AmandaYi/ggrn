
import { StyleSheet } from "react-native";
import globalStyle, {
    rx
} from "../../../../common/variable"
export const collectInfoStyle = StyleSheet.create({
    collectInfo: {

        flexDirection: "row",
        paddingHorizontal: globalStyle.appHorizontal,
        paddingVertical: rx(25),
        backgroundColor: "#fff",
    },
    collectInfoPerson: {
        flex: 4,
    },
    personInfo: {
        flex: 1,
        flexDirection:"row" ,
        alignItems:"flex-end"
    },
    textIcon: {
        fontSize: rx(28),
        lineHeight: rx(42),
        fontFamily: "iconfont",
        width:rx(40)
    },
    textIconAddress:{
        fontSize: rx(34),

    },
    personInfoText: {
        color: "#666666",
        fontSize: rx(28),
        lineHeight: rx(42)
    },
    personInfoTextName: {
        color: "#333333",

    },
    collectInfoTarget: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end"
    },
    collectInfoText: {

        fontFamily: "iconfont",
        fontSize: rx(30)
    }
})






