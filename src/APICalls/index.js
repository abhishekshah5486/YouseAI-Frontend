import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'youseai-backend-production.up.railway.app',
    headers: {
        'Content-Type' : 'application/json',
        'authorization': `Bearer ${localStorage.getItem('token')}`
    },
})
