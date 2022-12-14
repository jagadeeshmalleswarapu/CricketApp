import axios from 'axios'

const BASE_URL = `http://localhost:8333/rec/`;

class GetRecommendService{
    getService(name){
        return axios.get(BASE_URL+name)
    }
    getDelete(num){
        return axios.delete(BASE_URL+num)
    }
}
export default new GetRecommendService()