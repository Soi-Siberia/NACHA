import actionTypes from '../actions/actionTypes';

const initialState = {
    listProducts: [],
    listSize: [],
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case actionTypes.CREATE_NEW_PRODUCT_SUCCESS:
            return {
                ...state,
            }
        case actionTypes.CREATE_NEW_PRODUCT_FAILD:
            return {
                ...state,
            }
        case actionTypes.GET_ALL_PRODUCT_SUCCESS:
            return {
                ...state,
                listProducts: action.data,
            }
        case actionTypes.GET_ALL_PRODUCT_FAILD:
            return {
                ...state,
            }
        case actionTypes.DELETE_PRODUCT_SUCCESS:
            return{
                ...state
            }
        case actionTypes.DELETE_PRODUCT_FAILD:
            return{
                ...state
            }
        case actionTypes.GET_ALL_CODE_SIZE_PRODUCT_SUCCESS:
            return{
                ...state,
                listSize: action.data
            }
        case actionTypes.GET_ALL_CODE_SIZE_PRODUCT_FAILD:
            return {
                ...state,
            }
        case actionTypes.UPDATE_PRODICT_SUCCCESS:
            return{
                ...state
            }
        case actionTypes.UPDATE_PRODICT_FAILD:
            return{
                ...state
            }
        default:
            return state;
    }
}

export default productReducer;