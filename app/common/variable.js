/**
 * @name 常量,写了几个函数
 * @author 赵哲云 
 */
import {
    Dimensions
} from "react-native" ;
import {
    navigation,
} from 'react-navigation';
// 设计稿是750
const UIWIDTH = 750;
export const {width,height} = Dimensions.get("window"); 
export function rx(UIPX){
    return   Math.round(UIPX*width/750);
} 

// 待可能以后会完善吧,数学学的不好,二次方程
export function ry(UIPX){
    return UIPX*12/height;
}
export default globalStyle = {
    // 左右的边距的宽度
	appHorizontal : rx(28),
	textColor:"#333333"
}
//  RGB转换成RGBA
export function RGB2RGBA(rgb_color,alp){
	//注：rgb_color的格式为#FFFFFFF，alp为透明度
	var r = parseInt("0x" + rgb_color.substr(1,2));
	var g = parseInt("0x" + rgb_color.substr(3,2));
	var b = parseInt("0x" + rgb_color.substr(5,2));
	var a = alp;
	return "rgba(" + r + "," + g + "," + b + "," + a + ")";
}
//  RGBA转换成RGB
export function RGBA2RGB(rgba_color){
	//注：rgba_color的格式为rgba(0,0,0,0.1)
	var BGcolur = 1;
	var arr = rgba_color.split("(")[1].split(")")[0].split(",");
	var a = arr[3];
	var r = BGcolur * (1 - a) + arr[0] * a;
	var g = BGcolur * (1 - a) + arr[1] * a;
	var b = BGcolur * (1 - a) + arr[2] * a;
	return "rgb(" + r + "," + g + "," + b +")";
}

// 跳转页面的函数
export function pushPage (page,param){
    if(page=="test"){
        alert("测试中");
        return false;
    }else{
        // 跳转页面,进行携带参数
        navigation.navigate(page, {
			// 同名参数
			param
		})
    } 
}















































