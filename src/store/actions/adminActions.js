import actionTypes from './actionTypes';
import adminService from '../../services/adminService';
import { toast } from 'react-toastify';



export const adminLoginStart = (loginInfor) => {
    return async (dispatch, getState) => {
        try {
            // console.log("===> Data login: ",loginInfor)
            let LoginResult = await adminService.login(loginInfor)
            // console.log("==> log api trả: ",LoginResult)
            if(LoginResult && LoginResult.errCode === 0)
            {
                dispatch(adminLoginSuccess(LoginResult))
            }else{
                toast.error(LoginResult.message)
                dispatch(adminLoginFail())
            }
        } catch (e) {
            toast.error("Đã có lỗi: ",e)
            // console.log("Đã có lỗi: ", e)
            dispatch(adminLoginFail())
        }
    }
}


export const adminLoginSuccess = (adminInfo) => ({
    type: actionTypes.ADMIN_LOGIN_SUCCESS,
    adminInfo: adminInfo
})


export const adminLoginFail = () => ({
    type: actionTypes.ADMIN_LOGIN_FAIL
})

export const processLogout = () => ({
    type: actionTypes.PROCESS_LOGOUT
})