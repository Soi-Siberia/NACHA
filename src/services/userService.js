import axios from '../axios';
// import * as queryString from 'query-string';

const userService = {

    getAllUser(){
        return axios.get('/v1/api/get-all-user')
    },

    createNewUser(data) {
        return axios.post('/v1/api/create-user', data)
    },

    deleteUser(id) {
        return axios.delete(`/v1/api/delete-user?id=${id}`)
    },


};

export default userService;