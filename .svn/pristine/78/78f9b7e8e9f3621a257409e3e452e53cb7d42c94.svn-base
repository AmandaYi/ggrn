
/**
 *@name 购物车处理函数 
 * 
 */

// 增加购物车,更新购物车,删除购物车
export const ADD_TO_CART = "ADD_TO_CART"
export const UPDATE_TO_CART = "UPDATE_TO_CART"
export const DETELE_CART = "DETELE_CART"
export const GET_CART = "Get_CART";
// 接下来，我们将定义一个action，作为store.dispatch()的一个参数。action是一个Javascript对象，有一个必须的type和可选的payload。我们在cartReducer函数后定义一个：
export function addToCart(name, money) {
    return {
        type: ADD_TO_CART,
        payload: {
            name,
            money
        }
    }
}
export function updateToCart(name, money) {
    return {
        type: UPDATE_TO_CART,
        payload: {
            name,
            money
        }
    }
}
export function deleteFromCart(name){
    return {
        type:DETELE_CART,
        payload:{
           name
        }
    }
}