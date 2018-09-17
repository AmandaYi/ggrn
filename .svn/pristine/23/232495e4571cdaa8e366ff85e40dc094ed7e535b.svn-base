export default class RegExpService {

  // 通用验证手机号码
  checkPhone(phoneNum) {
    let reg = /^1\d{10}$/;
    if (reg.test(phoneNum) == true) {
      return true;
    } else {
      return false;
    }
  }

  // 通用验证密码
  checkPassword(password){
    let reg = /^\d{6,20}$|^\w{6,20}$/;
    if (reg.test(password) == true) {
      return true;
    } else {
      return false;
    }
  }

  // 通用验证码处理器
  checkVCode(vcode){
    let reg = /^\d{4}$/;
    if (reg.test(vcode) == true) {
      return true;
    } else {
      return false;
    }
  }


  // 公共服务注入器
  // 验证公司名称
  checkCompanyName(companyName) {

    let reg = /^.{1,100}$/;
    if (reg.test(companyName) == true) {
      return true;
    } else {
      return false;
    }
  }

  // 验证昵称
  checkNick(nick){
    let reg = /^.{1,10}$/;
    if (reg.test(nick) == true) {
      return true;
    } else {
      return false;
    }
  }

  // 验证姓名
  checkName(name) {

    let reg = /^.{1,10}$/;
    if (reg.test(name) == true) {
      return true;
    } else {
      return false;
    }
  }


  // 验证详细地址
  checkAddressDetail(addressDetail) {

    let reg = /^.{1,50}$/;
    if (reg.test(addressDetail) == true) {
      return true;
    } else {
      return false;
    }
  }
}
