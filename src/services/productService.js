
import axios from '../axios';
// import * as queryString from 'query-string';

const productService = {
    createNewProduct(data) {
        return axios.post('/v1/api/create-product', data)
    }
};

export default productService;