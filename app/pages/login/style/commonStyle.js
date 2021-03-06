import {
  Dimensions,
  StyleSheet
} from "react-native"
import globalStyle, {
  width,
  rx
} from "../../../common/variable"
// 公共的
export const commonStyle = StyleSheet.create({
  pageBox: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  // 按钮
  button: {
    // height: scaleSize(90),
    height: rx(90),
    width: width-globalStyle.appHorizontal*2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: rx(56),
    backgroundColor: '#2cbc55',
    marginTop: rx(60),
  },
  btText: {
    color: '#fff',
    fontSize: rx(34),
  },
  leftTitle: {
    width: rx(140),
    height: rx(90),
    fontSize: rx(32),
    lineHeight: rx(90),
    paddingLeft: 0,
  },
// 输入框
  input: {
    padding:0,
    width: rx(540),
    fontSize: rx(32),
  },
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: width-rx(100),
    height: rx(90),
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: rx(30),
    marginTop: rx(30)
  },
})