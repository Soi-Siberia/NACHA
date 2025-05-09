import actionTypes from '../actions/actionTypes';

const initialState = {

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
        default:
            return state;
    }
}

export default productReducer;