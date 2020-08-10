import axios from 'axios';

const api = axios.create({
    baseURL: 'https://proffy-be.herokuapp.com/'
})

export default api;