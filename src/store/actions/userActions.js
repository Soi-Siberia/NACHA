import actionTypes from './actionTypes';
import userService from '../../services/userService';
import { toast } from 'react-toastify';

export const getAllUserStart = () => {
    return async (dispatch, getState) => {
        try {
            // console.log("===> Data login: ",loginInfor)
            let users = await userService.getAllUser()
            console.log("==> log api trả: ",users)
            if(users && users.errCode === 0)
            {
                dispatch(getAllUserSuccess(users))
            }else{
                dispatch(getAllUserFaild())
            }
        } catch (e) {
            toast.error(`Đã có lỗi xảy ra: ${e}`)
            
            // console.log("Đã có lỗi: ", e)
            dispatch(getAllUserFaild())
        }
    }
}

export const getAllUserSuccess = (data) => ({
    type: actionTypes.GET_ALL_USER_SUCCESS,
    users: data
})
export const getAllUserFaild = (data) => ({
    type: actionTypes.GET_ALL_USER_FAILD,
    users: data
})
