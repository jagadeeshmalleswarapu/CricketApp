import axios from "axios";

const BASE_URL = "http://localhost:8111/cards/";
class GetServiceByName{
     findByName(name){
    return axios.get(BASE_URL + name);
}}

export default new GetServiceByName();