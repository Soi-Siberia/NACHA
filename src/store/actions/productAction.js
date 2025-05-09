import actionTypes from "./actionTypes";
import { toast } from "react-toastify";
import productService  from "../../services/productService";

export const createNewProductStart = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await productService.createNewProduct(data);
            if (res && res.errCode === 0) {
                toast.success(res.message);
                dispatch(createNewProductSuccess());
            } else {
                toast.error(`Lỗi: ${res.message}`);
                dispatch(createNewProductFaild());
            }
        } catch (e) {
            toast.error(`Đã có lỗi xảy ra: ${e}`);
            dispatch(createNewProductFaild());
        }
    };
}
export const createNewProductSuccess = () => ({
    type: actionTypes.CREATE_NEW_PRODUCT_SUCCESS,
});
export const createNewProductFaild = () => ({
    type: actionTypes.CREATE_NEW_PRODUCT_FAILD,
})