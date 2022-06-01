import axios from 'axios'

axios.defaults.baseURL = 'https://api.sweetpad.io/api'
axios.interceptors.request.use(config => {
    // @ts-ignore
    config.headers['Content-Type'] = 'application/json';
    // @ts-ignore
    config.headers['Access-Control-Allow-Origin'] = '*';

    return config
})
export default axios