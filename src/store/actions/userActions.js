import actionTypes from './actionTypes';
import userService from '../../services/userService';
import { toast } from 'react-toastify';

export const getAllUserStart = () => {
    return async (dispatch, getState) => {
        try {
            // console.log("===> Data login: ",loginInfor)
            let users = await userService.getAllUser()
            // console.log("==> log api trả: ",users)
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

// Create new user

export const createNewUserStart = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await userService.createNewUser(data)
            if(res && res.errCode === 0)
            {
                toast.success("Thêm mới người dùng thành công")
                dispatch(createNewUserSuccess())
                dispatch(getAllUserStart())
            }else{
                toast.error(`Lỗi: ${res.message}`)
                dispatch(createNewUserFaild())
            }
        } catch (e) {
            toast.error(`Đã có lỗi xảy ra: ${e}`)
            
            // console.log("Đã có lỗi: ", e)
            dispatch(createNewUserFaild())
        }
    }
}
export const createNewUserSuccess = () => ({
    type: actionTypes.CREATE_NEW_USER_SUCCESS,
})
export const createNewUserFaild = () => ({
    type: actionTypes.CREATE_NEW_USER_FAILD,
})

//delete user

export const deleteUserStart = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await userService.deleteUser(userId)
            if(res && res.errCode === 0)
            {
                toast.success("Xóa người dùng thành công")
                dispatch(deleteUserSuccess())
                dispatch(getAllUserStart())
            }else{
                toast.error(`Lỗi: ${res.message}`)
                dispatch(deleteUserFaild())
            }
        } catch (e) {
            toast.error(`Đã có lỗi xảy ra: ${e}`)
            dispatch(deleteUserFaild())
        }
    }
}

export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS,
})
export const deleteUserFaild = () => ({
    type: actionTypes.DELETE_USER_FAILD,
})

//edit user
export const editUserStart = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await userService.editUser(data)
            if(res && res.errCode === 0)
            {
                toast.success("Cập nhật người dùng thành công")
                dispatch(editUserSuccess())
                dispatch(getAllUserStart())
            }else{
                toast.error(`Lỗi: ${res.message}`)
                dispatch(editUserFaild())
            }
        } catch (e) {
            toast.error(`Đã có lỗi xảy ra: ${e}`)
            dispatch(editUserFaild())
        }
    }
}

export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS,
})
export const editUserFaild = () => ({
    type: actionTypes.EDIT_USER_FAILD,
})




