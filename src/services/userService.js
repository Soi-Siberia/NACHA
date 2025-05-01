import axios from '../axios';
// import * as queryString from 'query-string';

const userService = {

    getAllUser(){
        return axios.get('/v1/api/get-all-user')
    }


};

export default userService;