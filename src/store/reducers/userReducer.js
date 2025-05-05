import actionTypes from '../actions/actionTypes';

const initialState = {
    users: "",
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_USER_SUCCESS:
            return {
                ...state,
                users: action.users
            }
        case actionTypes.GET_ALL_USER_FAILD:
            return {
            }
        case actionTypes.CREATE_NEW_USER_SUCCESS:
            return {
                ...state,
            }
        case actionTypes.CREATE_NEW_USER_FAILD:
            return {
                ...state,
            }
        case actionTypes.DELETE_USER_SUCCESS:
            return {
                ...state,
            }
        case actionTypes.DELETE_USER_FAILD:
            return {
                ...state,
            }
        case actionTypes.EDIT_USER_SUCCESS:
            return {
                ...state,
            }
        case actionTypes.EDIT_USER_FAILD:
            return {
                ...state,
            }  
        default:
            return state;
    }
}

export default userReducer;