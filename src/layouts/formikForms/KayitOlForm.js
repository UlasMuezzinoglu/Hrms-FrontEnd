import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './formCss.css';
import axios from 'axios';
import { Button } from 'semantic-ui-react';
import { useEffect } from 'react';
import JobAdvertisementService from '../../services/jobAdvertisementService';

export default function KayitOlForm() {

    var body = {
        firstName: 'Fred4',
        email: 'Flintstone4@gmail.com',
        password: '123456',
        passwordAgain: '123456',
        identityNumber: "12345600004"
    }

    
        let abc = new JobAdvertisementService()
        
        
    


    
    function gonder() {
        
        /*abc.postTest({
            
            employer:{id:3},
            jobPosition:{id:2},
            description:"Kanka api endpointlerin neden açık",
            city:{id:34},
            minSalary:3000,maxSalary:5000,
            openPositions:3,
            lastDate:"2022-01-01",
            active:true,
            createDate:"2021-06-07",
            workPlace:{id:2},
            workTime:{id:1},
            confirmed:true}
        )*/


         /*axios({
            method: 'post',
            url: 'https://kodlamaio-hrms.herokuapp.com/api/employer/add',
            data: {
            email:"hackedd@hackedd.com",
            mailVerify:false,
            companyName:"ENDpointAcıkKalmıs",
            webSite:"hackedd.com",
            phoneNumber:"2212885757"
            }}).then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                alert(error);
            }); */
            


        
    }
    



    return (
        
    <div>
            <Button onClick={()=>gonder()}></Button>
    </div>
    )
}
