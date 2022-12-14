import axios from "axios";

// const BASE_URL=`http://localhost:8080/register`;
const BASE_URL = 
    'http://localhost:8080/api/auth/register'


class SaveLoginService{
    saveLog(login){
        return axios.post(BASE_URL,login)
    }
}

export default new SaveLoginService()