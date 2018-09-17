import { ADD_TO_CART, UPDATE_TO_CART, DETELE_CART } from "../actions/cart-actions"

// 创建测试数据
const initState = {
    cart: [
        {
            name: "",
            money: " "
        },
        {
            name: " ",
            money: " / "
        }
    ]
}


// 创建购物车
export const cartReducer =   (state = initState, action) =>{ 
    switch (action.type) {
        case ADD_TO_CART: {
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        }
        case UPDATE_TO_CART: {
            return {
                ...state,
                cart:state.cart.map(item=>item.name===action.payload.name?action.payload:item)
            }
        }
        case DETELE_CART:{
            return {
                ...state,
                cart:state.cart.filter(item=>item.name!==action.payload.name)
            }
        }
        default:
            return state;
    }
}
