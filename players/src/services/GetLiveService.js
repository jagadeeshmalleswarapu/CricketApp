import axios from "axios";


const BASE_URL = `http://localhost:8999/score/`;

class GetLiveService{
    getService(name){
        return axios.get(BASE_URL+name)
    }
}

export default new GetLiveService()