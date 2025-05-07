import categoryService from '../../services/categoryService';
import actionTypes from './actionTypes';
import { toast } from 'react-toastify';

export const createNewCategoryStart = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await categoryService.createNewCategory(data)
            if(res && res.errCode === 0)
            {
                toast.success("Thêm mới danh mục thành công")
                dispatch(createNewCategorySuccess())
            }else{
                toast.error(`Lỗi: ${res.message}`)
                dispatch(createNewCategoryFaild())
            }
        } catch (e) {
            toast.error(`Đã có lỗi xảy ra`)
             
            // console.log("Đã có lỗi: ", e)
            dispatch(createNewCategoryFaild())
        }
    }
}

export const createNewCategorySuccess = () => ({
    type: actionTypes.CREATE_CATEGORY_SUCCESS,
})
export const createNewCategoryFaild = () => ({
    type: actionTypes.CREATE_CATEGORY_FAILD,
})

export const getAllCategoryStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await categoryService.getAllCategory()
            if(res && res.errCode === 0)
            {
                dispatch(getAllCategorySuccess(res.data))
            }else{
                dispatch(getAllCategoryFaild())
            }
        } catch (e) {
            // console.log("Đã có lỗi: ", e)
            dispatch(getAllCategoryFaild())
        }
    }
}
export const getAllCategorySuccess = (data) => ({
    type: actionTypes.GET_ALL_CATEGORY_SUCCESS,
    data: data
})
export const getAllCategoryFaild = () => ({
    type: actionTypes.GET_ALL_CATEGORY_FAILD,
})