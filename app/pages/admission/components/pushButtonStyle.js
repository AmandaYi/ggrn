import {
    StyleSheet
} from "react-native"
import globalStyle, {
    width,
    rx
} from "../../../common/variable";
export const pushButtonStyle = StyleSheet.create({
    btnBox: {
        width: rx(660),
        height: rx(90),
        backgroundColor: "#2dbb55",
        borderRadius: rx(45),
        borderWidth: 1,
        // borderColor: "#2dbb55",
        borderColor: "#ffffff",
    },
    btnText: {
        alignSelf: 'center',
        height: rx(90),
        lineHeight: rx(90),
        textAlign: "center",
        fontSize: rx(34),
        color: "#ffffff"
    }
}) 