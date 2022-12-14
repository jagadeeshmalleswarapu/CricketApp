import axios from "axios";

const BASE_URL = `http://localhost:9191/`;

class ApiGateWay{
    getService(name) {
        return axios.get(BASE_URL+name)
    }
    getDeleteService(num){
        return axios.delete(BASE_URL+num)
    }
}
export default new ApiGateWay()