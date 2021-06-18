import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Icon } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobAdvertisementService'



export default function Others({eid}) {

    const [abc, setAbc] = useState([])





    useEffect(() => {
        let abc = new JobAdvertisementService()
        abc.getByEmpId(eid).then(result => setAbc(result.data.data))
    }, [])








    return (
        <div>
            <Card>
                <Card.Content>
                    <Card.Meta></Card.Meta>
                    <Card.Header>Firmanın Diğer İlanları</Card.Header>
                    {
                        abc.map(candi => (
                            <Card key={candi.id}>
                                <Card.Header style={{ fontWeight: 'bold' }}> <Link target="_blank" to={`/JobAdvertisements/${candi.id}`}> {candi.jobDescription}</Link></Card.Header>
                                <Card.Meta><Icon name="location arrow"></Icon> {candi.city?.cityName} </Card.Meta>
                                <Card.Description><Button color="red">Başvur </Button> </Card.Description>
                            </Card>
                        ))

                    }





                </Card.Content>

            </Card>
        </div>
    )
}
