import actionTypes from "./actionTypes";
import { toast } from "react-toastify";
import productService  from "../../services/productService";


//cteate new product
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

//get all product
export const getAllProductStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await productService.getAllProduct();
            if (res && res.errCode === 0) {
                dispatch(getAllProductSuccess(res.data));
            } else {
                dispatch(getAllProductFaild());
            }
        } catch (e) {
            dispatch(getAllProductFaild());
        }
    };
}
export const getAllProductSuccess = (data) => ({
    type: actionTypes.GET_ALL_PRODUCT_SUCCESS,
    data: data
});
export const getAllProductFaild = () => ({
    type: actionTypes.GET_ALL_PRODUCT_FAILD,
})