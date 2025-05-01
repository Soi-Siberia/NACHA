import axios from 'axios';
import _ from 'lodash';
// import config from './config';



// Hàm lấy accessToken từ localStorage (dạng persist:admin)
let getAccessToken = () => {
    try {
        const persistAdmin = localStorage.getItem('persist:admin');
        if (persistAdmin) {
            const parsed = JSON.parse(persistAdmin);
            return parsed.accessToken?.replace(/^"|"$/g, '');
        }
    } catch (e) {
        console.error('Cannot parse accessToken from persist:admin', e);
    }
    return null;
};

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    withCredentials: true
});

const createError = (httpStatusCode, statusCode, errorMessage, problems, errorCode = '') => {
    const error = new Error();
    error.httpStatusCode = httpStatusCode;
    error.statusCode = statusCode;
    error.errorMessage = errorMessage;
    error.problems = problems;
    error.errorCode = errorCode + "";
    return error;
};

export const isSuccessStatusCode = (s) => {
    // May be string or number
    const statusType = typeof s;
    return (statusType === 'number' && s === 0) || (statusType === 'string' && s.toUpperCase() === 'OK');
};

// 4. Interceptor REQUEST (trước khi gửi request đi)
instance.interceptors.request.use(
    (config) => {
        const token = getAccessToken(); // Lấy accessToken từ localStorage

        if (token) {
            // config.headers['x-access-token'] = token;
            // Nếu server yêu cầu kiểu Authorization: Bearer <token>, đổi thành:
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config; // Trả về config đã gắn token
    },
    (error) => {
        return Promise.reject(error); // Nếu lỗi khi chuẩn bị request
    }
);

instance.interceptors.response.use(
    (response) => {
        // Thrown error for request with OK status code
        const { data } = response;
        if (data.hasOwnProperty('s') && !isSuccessStatusCode(data['s']) && data.hasOwnProperty('errmsg')) {
            return Promise.reject(createError(response.status, data['s'], data['errmsg'], null, data['errcode'] ? data['errcode'] : ""));
        }

        // Return direct data to callback
        if (data.hasOwnProperty('s') && data.hasOwnProperty('d')) {
            return data['d'];
        }
        // Handle special case
        if (data.hasOwnProperty('s') && _.keys(data).length === 1) {
            return null;
        }
        return response.data;
    },
    (error) => {
        const { response } = error;
        if (response == null) {
            return Promise.reject(error);
        }

        const { data } = response;

        if (data.hasOwnProperty('s') && data.hasOwnProperty('errmsg')) {
            return Promise.reject(createError(response.status, data['s'], data['errmsg']));
        }

        if (data.hasOwnProperty('code') && data.hasOwnProperty('message')) {
            return Promise.reject(createError(response.status, data['code'], data['message'], data['problems']));
        }

        return Promise.reject(createError(response.status));
    }
);

export default instance;
