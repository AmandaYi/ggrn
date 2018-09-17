/**
 * @name 处理函数
 * 
 * 
 * 
 */
export default class UntiService {
    /**
     * @name 将日期格式化为指定的格式
     * @param {日期时间戳} date 
     */
    dateFormat(date) {
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    };
    /**
     * @name 对一个对象或者数组进行深拷贝
     * @param {即将深拷贝的对象} source 
     */
    deepClone(source) {
        const targetObj = source.constructor === Array ? [] : {}; // 判断复制的目标是数组还是对象
        for (let keys in source) { // 遍历目标
            if (source.hasOwnProperty(keys)) {
                if (source[keys] && typeof source[keys] === 'object') { // 如果值是对象，就递归一下
                    targetObj[keys] = source[keys].constructor === Array ? [] : {};
                    targetObj[keys] = deepClone(source[keys]);
                } else { // 如果不是，就直接赋值
                    targetObj[keys] = source[keys];
                }
            }
        }
        return targetObj;
    }
    /**
     *@name 检测是否是数组 
     * @returns {状态值} 
     */
    judgeArr = (arr) => {
        if (Array.isArray(arr)) {
            return true;
        }
    }
}
