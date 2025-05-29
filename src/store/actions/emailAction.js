import emailService from "../../services/emailService";
import actionTypes from "./actionTypes";
import { toast } from 'react-toastify';

export const SendMailContactStart = (data) => {
    return async (dispatch, getState) => {
        try {
            // console.log("==>check redux:")
            let result = await emailService.sendmail(data)
            if (result && result.errCode === 0) {
                toast.success('Thành Công')
                dispatch(SendMailContactSuccess())
            } else {

                toast.error(`Lỗi: ${result.message}`)
                dispatch(SendMailContactFaild())
            }
        } catch (e) {
            toast.error(`Lỗi: ${e}`)
        }
    }
}
export const SendMailContactSuccess = () => ({
    type: actionTypes.SEND_MAIL_CONTACT_SUSCESS
})

export const SendMailContactFaild = () => ({
    type: actionTypes.SEND_MAIL_CONTACT_FAILD
})