import axios from 'axios'

const BASE_URL = `http://localhost:8777/news/`;

class GetNewsService{
    getService(name) {
        return axios.get(BASE_URL+name)
    }
}
export default new GetNewsService()