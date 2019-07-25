import * as axios from 'axios';

/**
 * Creating new axios instance.
 * This will act as network interceptor
 */


const headers = {};
headers['Content-Type'] = 'application/json';
headers['Accept'] = '';
const instance = axios.create({ headers });

// Request interceptor
instance.interceptors.request.use(request => {
    console.log(`Request sent is ${JSON.stringify(request)}`);
    return request;
});

// Response interceptor
instance.interceptors.response.use(
    response => {
        // console.log(`Response received is ${JSON.stringify(response)}`);
        return response;
    },
    err => {
        console.log(`Error response received is ${JSON.stringify(err)}`);
        return Promise.reject(err);
    }
);
export default instance;
