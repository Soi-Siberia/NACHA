
import axios from '../axios';
// import * as queryString from 'query-string';

const productService = {
    createNewProduct(data) {
        return axios.post('/v1/api/create-product', data)
    },

    getAllProduct() {
        return axios.get('/v1/api/get-all-product')
    },

    deleteProductById(id){
        return axios.delete(`/v1/api/delete-product-by-id?id=${id}`)
    },

    updateProduct(data){
        return axios.put('/v1/api/update-product', data)
    },

    // allcode get size.

    getAllCodeType(type){
        return axios.get(`/v1/api/get-allCode-type?type=${type}`)
    }
};

// get all product

export default productService;