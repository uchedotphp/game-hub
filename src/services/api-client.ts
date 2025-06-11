import axios from 'axios'

export default axios.create({
    // baseURL: import.meta.env.VITE_API_URL,
    baseURL: 'https://api.rawg.io/api/games',
    // timeout: 10000,
    // headers: {
    //     'Content-Type': 'application/json',
    // },
    params: {
        key: 'd0f017ac8e8545ec82ac242ac2d7f91e'
    }
})