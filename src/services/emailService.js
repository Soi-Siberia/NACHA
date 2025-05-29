import axios from '../axios';
// import * as queryString from 'query-string';

const emailService = {

    sendmail(data) {
        return axios.post('/v1/api/send-mail', data)
    },

};

export default emailService;