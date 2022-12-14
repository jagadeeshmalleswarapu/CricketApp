import axios from 'axios'

const BASE_URL = `http://localhost:8666/stat/`;

class GetStatService{
    getService(name) {
        return axios.get(BASE_URL+name)
    }
}
export default new GetStatService()