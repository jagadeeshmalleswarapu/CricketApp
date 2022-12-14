import axios from "axios";

const BAT_URL = `http://localhost:8001/bat/`;

const BALL_URL = `http://localhost:8002/ball/`;

const ALL_URL = `http://localhost:8003/all/`;

class GetRankService{
    getBat(bat){
        return axios.get(BAT_URL+bat)
    }
    getBall(ball){
        return axios.get(BALL_URL+ball)
    }
    getAllRounder(all){
        return axios.get(ALL_URL+all)
    }
}

export default new GetRankService()