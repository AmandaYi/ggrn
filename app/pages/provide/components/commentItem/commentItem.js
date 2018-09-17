import React from "react"
import {
    View,
    Text,
    Image
} from "react-native" 
import {commentItemStyle} from "./commentItemStyle"
export default class CommentItem extends React.Component{
    constructor(props){
        super(props)
    }
    render=()=>{
        return (
            <View style={commentItemStyle.commentItem}>
               <View style={commentItemStyle.avatar}>
                   <Image style={commentItemStyle.avatarImg} />
               </View>
               <View style={commentItemStyle.commentDesc}>
                    <Text style={commentItemStyle.username}>截取成功nameID我是名字nameID我是名字nameID我是名字nameID我是名字nameID我是名字nameID我是名字nameID我是名字nameID我是名字nameID我是名字nameID我是名字nameID我是名字nameID我是名字nameID我是名字nameID我是名字nameID我是名字nameID我是名字nameID我是名字nameID我是名字</Text>
                    <Text style={commentItemStyle.userWords}>截取成功nameDesc我是描述nameDesc我是描述nameDesc我是描述nameDesc我是描述nameDesc我是描述nameDesc我是描述nameDesc我是描述nameDesc我是描述nameDesc我是描述nameDesc我是描述nameDesc我是描述nameDesc我是描述nameDesc我是描述nameDesc我是描述nameDesc我是描述nameDesc我是描述nameDesc我是描述</Text>
               </View>
            </View>
        )
    }
}