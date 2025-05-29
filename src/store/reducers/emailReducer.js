import actionTypes from '../actions/actionTypes';

const initialState = {
}

const emailReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.SEND_MAIL_CONTACT_SUSCESS:
            return {
                ...state,
            }
        case actionTypes.SEND_MAIL_CONTACT_FAILD:
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default emailReducer;