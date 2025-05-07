import axios from '../axios';
// import * as queryString from 'query-string';

const categoryService = {

    createNewCategory(data){
        return axios.post('/v1/api/create-catagory', data)
    },
    getAllCategory(){
        return axios.get('/v1/api/get-all-catagory')
    },

};

export default categoryService;