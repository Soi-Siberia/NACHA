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
        default:
            return state;
    }
}

export default userReducer;