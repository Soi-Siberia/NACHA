import axios from '../axios';
// import * as queryString from 'query-string';

const categoryService = {

    createNewCategory(data){
        return axios.post('/v1/api/create-catagory', data)
    },
    getAllCategory(){
        return axios.get('/v1/api/get-all-catagory')
    },
    deleteCategory(id){
        return axios.delete(`/v1/api/delete-catagory?id=${id}`)
    },
    editCategory(data){
        return axios.put('/v1/api/update-catagory', data)
    },

};

export default categoryService;