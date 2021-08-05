import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:3333',
    timeout: 5000,
});