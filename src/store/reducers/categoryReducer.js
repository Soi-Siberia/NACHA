import actionTypes from '../actions/actionTypes';

const initialState = {
    listCategory: "",
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_CATEGORY_SUCCESS:
            return {
                ...state,
            }
        case actionTypes.CREATE_CATEGORY_FAILD:
            return {
                ...state,
            }
        case actionTypes.GET_ALL_CATEGORY_SUCCESS:
            return {
                ...state,
                listCategory: action.data
            }
        case actionTypes.GET_ALL_CATEGORY_FAILD:
            return {
                ...state,
            }
        case actionTypes.DELETE_CATEGORY_SUCCESS:
            return {
                ...state,
            }
        case actionTypes.DELETE_CATEGORY_FAILD:
            return {
                ...state,
            }
        case actionTypes.EDIT_CATEGORY_SUCCESS:
            return {
                ...state,
            }
        case actionTypes.EDIT_CATEGORY_FAILD:
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default categoryReducer;