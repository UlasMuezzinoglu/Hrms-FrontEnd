import axios from "axios"

export default class CitiesService{
    getCities(){
        return axios.get("http://localhost:8080/api/Cities/getall")
    }
}