import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Grid, GridColumn, Header, Icon, Image, Label, Menu, Table } from 'semantic-ui-react'
import Sidebar from '../layouts/Sidebar'
import JobAdvertisementService from '../services/jobAdvertisementService'


export default function JobAdvertisements() {

    const [abc, setAbc] = useState([])

    



    useEffect(() => {
        let abc = new JobAdvertisementService()
        abc.getJobAdvertisements().then(result => setAbc(result.data.data))
        
    }, [])

    
    return (
        
        <div>


        <Grid>
            <Grid.Row>
                <Grid.Column width={4}>
                    <Sidebar />
                </Grid.Column>
                
                <Grid.Column width={12}>
                <Header as='h2'>İş İlanları</Header>
            {
                abc.map(advertisementt => (
                    <Container id="test" key={advertisementt.id}>
                        <Grid>
                            <Grid.Row>
                                <GridColumn width={2}>
                                    <Image className="cardSirketPp" src={advertisementt.employer?.photo} size='small' />
                                </GridColumn>
                                <GridColumn width={12}>
                                    <Header as='h3' className="cardSirketAdiSitesi">
                                        <Link to={`/JobAdvertisements/${advertisementt.id}`}>
                                            {advertisementt.employer.companyName} <span>-</span> <span>{advertisementt.employer.webAddress}</span>
                                        </Link>
                                    </Header>
                                    <Header as='h3' className="cardIsTanımı"> {advertisementt.jobTitle.jobTitle}</Header>
                                    <Header as='h3' className="cardIsAciklamasi">{advertisementt.jobDescription}</Header>
                                </GridColumn>
                                <GridColumn width={2}>
                                    <p><Icon name="map pin" />{advertisementt.city.cityName}</p>
                                    <p><Icon name="user" />{advertisementt.workShift.shiftName}</p>

                                </GridColumn>
                            </Grid.Row>
                        </Grid>
                    </Container>
                ))
            }
            <Button color='youtube'>
                {abc.length} İlanın Tümünü Görüntüle
            </Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>

















            






        </div>
        
    )
    
}

