import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    adminInfo: null,
    accessToken:null,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADMIN_LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                // adminInfo: action.adminInfo
                accessToken:action.adminInfo.access_token
            }
        case actionTypes.ADMIN_LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                accessToken: null
            }
        case actionTypes.PROCESS_LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                accessToken:null
            }
        default:
            return state;
    }
}

export default appReducer;