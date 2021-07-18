import { replace } from 'formik'
import React, { useEffect, useState } from 'react'
import { Link, NavLink, Redirect, Route } from 'react-router-dom'
import { Button, Card, Icon } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobAdvertisementService'
import JobAdvertisements from '../pages/JobAdvertisements'

export default function Others({ eid }) {

    const [advert, setAdvert] = useState([])


    useEffect(() => {

        const jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getByEmpId(eid).then(result => setAdvert(result.data.data))



    }, [])


  

    return (
        <div>
            <Card>
                <Card.Content>
                    <Card.Meta></Card.Meta>
                    <Card.Header>Firmanın Diğer İlanları</Card.Header>
                    {
                        advert.map(adver => (
                            <Card key={adver.id}>
                                <Card.Header style={{ fontWeight: 'bold' }}> <Link  to={`${adver.id}`} > {adver.jobDescription}</Link></Card.Header>
                                <Card.Meta><Icon name="location arrow"></Icon> {adver.city?.cityName} </Card.Meta>
                                <Card.Description><Button color="red">Başvur </Button> </Card.Description>
                            </Card>
                        ))

                    }


                </Card.Content>

            </Card>
        </div>
    )
}
