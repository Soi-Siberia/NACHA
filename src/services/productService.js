
import axios from '../axios';
// import * as queryString from 'query-string';

const productService = {
    createNewProduct(data) {
        return axios.post('/v1/api/create-product', data)
    },

    getAllProduct() {
        return axios.get('/v1/api/get-all-product')
    },
};

// get all product

export default productService;