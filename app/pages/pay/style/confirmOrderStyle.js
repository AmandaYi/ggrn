import { StyleSheet } from "react-native"
import globalStyle, {
    width,
    rx
} from "./../../../common/variable"
export const confirmOrderStyle = StyleSheet.create({
    orderNotes: {

        width,
        height: rx(90),
        backgroundColor: "#ffffff",
        flexDirection: "row",
        paddingHorizontal: globalStyle.appHorizontal
    },
    coloured:{
        width,
        height:rx(11),
        backgroundColor:"#f60", },
    colouredBg:{
        width,
        height:rx(11)
    },
    orderNotesTitle: {
        flex:1,
        lineHeight: rx(90)
    }, 
    orderNotesInput: {
        flex:3
    }
})