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
                dispatch(getAllProductStart())
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

//delete product

export const delteteProductStart = (id) => {
    return async (dispatch, getState) => {
        try {
            let resul = await productService.deleteProductById(id)
            if(resul && resul.errCode === 0)
            {
                toast.success(resul.message)
                dispatch(delteteProductSuccess())
                dispatch(getAllProductStart())
            }
            
        } catch (e) {
            toast.error(`Đã có lỗi xảy ra: ${e}`)
            dispatch(delteteProductFaild())
        }
    }
}
export const delteteProductSuccess = ()=>({
    type: actionTypes.DELETE_PRODUCT_SUCCESS
})
export const delteteProductFaild = ()=>({
    type: actionTypes.DELETE_PRODUCT_FAILD
})

//get size allcode product

export const getallcodeSizeProductStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await productService.getAllCodeType('productSize');
            if (res && res.errCode === 0) {
                dispatch(getallcodeSizeProductSuccess(res.data));
            } else {
                // console.log(`Lỗi: ${res.message}`)
                dispatch(getallcodeSizeProductFaild());
            }
        } catch (e) {
            // console.log(`Đã có lỗi xảy ra: ${e}`);
            dispatch(getallcodeSizeProductFaild());
        }
    };
}
export const getallcodeSizeProductSuccess = (data)=> ({
    type: actionTypes.GET_ALL_CODE_SIZE_PRODUCT_SUCCESS,
    data: data
})
export const getallcodeSizeProductFaild = ()=> ({
    type: actionTypes.GET_ALL_CODE_SIZE_PRODUCT_FAILD,
})

// update product
export const updateProductStart = (data) => {
    return async (dispatch, getState) => {
        // console.log("Data edit : ", data)
        try {
            let res = await productService.updateProduct(data)
            if(res && res.errCode === 0)
            {
                toast.success(res.message)
                dispatch(updateProductSuccess())
                dispatch(getAllProductStart())
            }else {
                toast.error(`Lỗi: ${res.message}`)
            }
        } catch (e) {
            toast.error(`Lỗi: ${e}`)
            dispatch(updateProductFaild())
        }
    }
}
export const updateProductSuccess = () => ({
    type: actionTypes.UPDATE_PRODICT_SUCCCESS,
})

export const updateProductFaild=()=> ({
    type: actionTypes.UPDATE_PRODICT_FAILD,
})