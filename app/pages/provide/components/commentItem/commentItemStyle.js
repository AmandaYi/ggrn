//this is a comment component ,it's a prvice
// import React from "react"
import {
    StyleSheet
} from "react-native"
import globalStyle, {rx} from "../../../../common/variable"
export const commentItemStyle = StyleSheet.create({
    commentItem: {
        flexDirection: 'row',
        // justifyContent: 'center',
        height:rx(160),
        paddingHorizontal: globalStyle.appHorizontal,
        backgroundColor: "#ffffff",
    },
    avatar: {
        width: rx(64),
        height: rx(64),
        backgroundColor: "#ccc",
        borderRadius: rx(32),marginTop: rx(20),
    },
    avatarImg:{
        width: rx(64),
        height: rx(64),
        backgroundColor: "#ccc",
        borderRadius: rx(32),
    },
    commentDesc: {
        width:rx(620),
        overflow:"hidden",
        paddingLeft:  rx(26),
        backgroundColor: "#ffffff",
    },
    username: {
      height:rx(32),
        marginTop: rx(20),
        color: "#666666",
        fontSize: rx(28),
    },
    userWords: {
        height:rx(70),

        marginTop: rx(14),
        color: globalStyle.textColor,
        fontSize: rx(30),
    }
})