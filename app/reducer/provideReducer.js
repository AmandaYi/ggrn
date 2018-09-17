







import { SHOW_MODAL_CROP_SPEC, HIDE_MODAL_CROP_SPEC } from "./../actions/provideAction";
// 创建初始数据
const initState = {
    // 作物选择的种类的modal
    initStateCropSpecModal: false
}
export const provideReducer = (state = initState, action) => {
    switch (action.type) {
        case SHOW_MODAL_CROP_SPEC: {
            return {
                ...state,
                initStateCropSpecModal: true
            }
        };
        case HIDE_MODAL_CROP_SPEC: {
            return {
                ...state,
                initStateCropSpecModal: false
            }
        };
        default:
        return state
    }
}
