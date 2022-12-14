import axios from "axios";

const BASE_URL = 'http://localhost:8080/api/auth/name/'


class ProfileService {
    getProfile(name){
        return axios.get(BASE_URL+name)
    }
}

export default new ProfileService()