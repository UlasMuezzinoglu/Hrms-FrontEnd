import axios from "axios"
var nesne = {
    firstName: 'Fred6',
    email: 'Flintstone6@gmail.com',
    password: '123456',
    passwordAgain: '123456',
    identityNumber: "12345600006"
};

export default class JobAdvertisementService{
    getJobAdvertisements(){
        return axios.get("http://localhost:8080/api/JobAdvertisement/getJobs")
    }
    getById(id){
        return axios.get("http://localhost:8080/api/JobAdvertisement/getByJobAdvertisementId?id="+ id)
    }

    getByEmpId(eid=1){
        return axios.get("http://localhost:8080/api/JobAdvertisement/getByEmpId?employer_id="+eid)
    }
    
    postToCandi(bodyy){
        return axios({
        method: 'post',
        url: 'http://localhost:8080/api/Candicates/add',
        data: bodyy}).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            alert("Hata !");
        });
    }
    
}