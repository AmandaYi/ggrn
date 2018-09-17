import {
  Dimensions,
  StyleSheet
} from "react-native"
import globalStyle, {
  width,
  rx
} from "../../../common/variable"
// 公共的
export const loginStyle = StyleSheet.create({
  forgetOrNew: {
    marginTop: rx(40),
    width: width-globalStyle.appHorizontal*2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  newUser: {
    fontSize: rx(28),
    textAlign: 'center',
    color: '#2cbc55',
  },
  otherLoginTop: {
    position: 'absolute',
    bottom: rx(214),
    width: width-globalStyle.appHorizontal*2,
    height: rx(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  line: {
    marginTop: rx(10),
    height: rx(1),
    width: (width - rx(188))/2,
    backgroundColor: '#ccc'
  },
  middleText: {
    width: rx(80),
    marginLeft: rx(14),
    marginRight: rx(14),
    fontSize: rx(20),
    color: '#999'
  },
  loginBtnWrapper: {
    position: 'absolute',
    bottom: rx(102),
    width: rx(188),
    height:rx(72),
    marginLeft: (width/2)-rx(94),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loginBtn: {
    width: rx(72),
    height: rx(72),
    borderRadius: rx(36),
  },
})