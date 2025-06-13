import axios from 'axios'

export default axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    // baseURL: 'https://api.rawg.io/api',
    // timeout: 10000,
    // headers: {
    //     'Content-Type': 'application/json',
    // },
    params: {
        key: import.meta.env.VITE_API_CODE
    }
})