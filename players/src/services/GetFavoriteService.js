import axios from 'axios'

const BASE_URL = `http://localhost:8222/fav/`;

class GetFavoriteService{
    getService(name){
        return axios.get(BASE_URL+name)
    }
    getDeleteService(num){
        return axios.delete(BASE_URL+num)
    }
}
export default new GetFavoriteService()