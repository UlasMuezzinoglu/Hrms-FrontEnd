import axios from "axios"

export default class CityService{
   getall(){
       return axios.get("http://localhost:8080/api/Cities/getall")
   }
}
