import categoryService from '../../services/categoryService';
import actionTypes from './actionTypes';
import { toast } from 'react-toastify';

// call api tạo mới danh mục
export const createNewCategoryStart = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await categoryService.createNewCategory(data)
            if(res && res.errCode === 0)
            {
                toast.success("Thêm mới danh mục thành công")
                dispatch(createNewCategorySuccess())
                dispatch(getAllCategoryStart())
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

//call api lấy danh sách danh mục
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

//call api xóa danh mục
export const deleteCategoryStart = (id) => {
    return async (dispatch, getState) => {
        try {
            let res = await categoryService.deleteCategory(id)
            if(res && res.errCode === 0)
            {
                toast.success("Xóa danh mục thành công")
                dispatch(deleteCategorySuccess())
                dispatch(getAllCategoryStart())
            }else{
                toast.error(`Lỗi: ${res.message}`)
                dispatch(deleteCategoryFaild())
            }
        } catch (e) {
            toast.error(`Đã có lỗi xảy ra`)
            // console.log("Đã có lỗi: ", e)
            dispatch(deleteCategoryFaild())
        }
    }
}
export const deleteCategorySuccess = () => ({
    type: actionTypes.DELETE_CATEGORY_SUCCESS,
})
export const deleteCategoryFaild = () => ({
    type: actionTypes.DELETE_CATEGORY_FAILD,
})

//call api sửa danh mục
export const editCategoryStart = (data) => {
    console.log("==> data edit category!!!: ", data)
    return async (dispatch, getState) => {
        try {
            let res = await categoryService.editCategory(data)
            if(res && res.errCode === 0)
            {
                toast.success(res.message)
                dispatch(editCategorySuccess())
                dispatch(getAllCategoryStart())
            }else{
                toast.error(`Lỗi: ${res.message}`)
                dispatch(editCategoryFaild())
            }
        } catch (e) {
            toast.error(`Đã có lỗi xảy ra: ${e}`)
            // console.log("Đã có lỗi: ", e)
            dispatch(editCategoryFaild())
        }
    }
}
export const editCategorySuccess = () => ({
    type: actionTypes.EDIT_CATEGORY_SUCCESS,
})
export const editCategoryFaild = () => ({
    type: actionTypes.EDIT_CATEGORY_FAILD,
})




