import axios from "axios"

export default class JobAdvertisementService{
    getJobAdvertisements(){
        return axios.get("http://localhost:8080/api/JobAdvertisement/getJobs")
    }
    getById(id){
        return axios.get("http://localhost:8080/api/JobAdvertisement/getByJobAdvertisementId?id="+ id)
    }
}