import axios from 'axios'

const baseURL = "https://demo-api.it-shatle.by";

const config = {
    baseURL: baseURL,
    timeout: 100000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Pragma: 'no-cache',
    },
};

const api = axios.create(config);

api.interceptors.request.use((config) =>{
    const token = localStorage.getItem('token');

    config.headers.Authorization = `Bearer ${token}`;

    return config;
})

export default api;