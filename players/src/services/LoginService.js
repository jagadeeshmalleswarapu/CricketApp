import axios from "axios";

const BASE_URL = 
    'http://localhost:8080/api/auth/signin'

class LoginService{
    loginForm(uDeatils){
        return axios.post(BASE_URL,uDeatils)
    }
}

export default new LoginService()