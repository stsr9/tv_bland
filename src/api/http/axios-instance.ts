import axios from 'axios'

const instance = axios.create()
instance.defaults.baseURL = process.env.REACT_APP_API
instance.defaults.headers.common['Content-Type'] = 'application/json'

export default instance
