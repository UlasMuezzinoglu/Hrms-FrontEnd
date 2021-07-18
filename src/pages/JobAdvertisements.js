import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Grid, GridColumn, Header, Icon, Image} from 'semantic-ui-react'
import Sidebar from '../layouts/Sidebar'
import TopSearch from '../layouts/TopSearch'
import JobAdvertisementService from '../services/jobAdvertisementService'


export default function JobAdvertisements() {

    const [abc, setAbc] = useState([])


    const [isNull, setNull] = useState(true)

    const [isFull, setFull] = useState(false)


    




    useEffect(() => {
        let abc = new JobAdvertisementService()
        abc.getJobAdvertisements().then(result => setAbc(result.data.data))

    }, [])

    function Fulle() {
        if (isFull) {
            setFull(false)
        } else {
            setFull(true)
        }


    }



    useEffect(() => {
        let isMounted = true;
        if (abc.length <= 0) {
            if (isMounted) setNull(true);

        } else {
            if (isMounted) setNull(false);

        }
        return () => {
            isMounted = false
        }
    }, [])

    return (

        <div>


<TopSearch></TopSearch>

            <Grid stackable>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Sidebar />
                    </Grid.Column>

                    <Grid.Column width={12}>
                        {isNull ? <Header as='h2'>İş İlanları</Header> : <Header as='h2'> İş İlanı Yok</Header>}

                        {
                            isFull ?
                                abc.map(advertisementt => (
                                    <Container id="test" key={advertisementt.id}>
                                        <Grid stackable>
                                            <Grid.Row>
                                                <GridColumn width={2}>
                                                    <Image className="cardSirketPp" src={advertisementt.employer?.photo} size='small' />
                                                </GridColumn>
                                                <GridColumn width={12}>
                                                    <Header as='h3' className="cardSirketAdiSitesi">
                                                        <Link to={`/JobAdvertisement/${advertisementt.id}`}>
                                                            {advertisementt.employer.companyName} <span>-</span> <span>{advertisementt.employer.webAddress}</span>
                                                        </Link>
                                                    </Header>
                                                    <Header as='h3' className="cardIsTanımı"> {advertisementt.jobTitle.jobTitle}</Header>
                                                    <Header as='h3' className="cardIsAciklamasi">{advertisementt.jobDescription}</Header>
                                                </GridColumn>
                                                <GridColumn width={2}>
                                                <p><Icon name="map pin"/>{advertisementt.city.cityName}</p>
                                                    
                                                    


                                                    <p><Icon name="user" />{advertisementt.workShift.shiftName}</p>

                                                </GridColumn>
                                            </Grid.Row>
                                        </Grid>
                                    </Container>

                                ))

                                : abc.slice(0, 3).map(advertisementt => (
                                    <Container id="test" key={advertisementt.id}>
                                        <Grid stackable>
                                            <Grid.Row>
                                                <Grid.Column width={2}>
                                                    <Image className="cardSirketPp" src={advertisementt.employer?.photo} size='small' />
                                                </Grid.Column>
                                                <Grid.Column width={12}>
                                                    <Header as='h3' className="cardSirketAdiSitesi">
                                                        <Link to={`/JobAdvertisements/${advertisementt.id}`}>
                                                            {advertisementt.employer.companyName} <span>-</span> <span>{advertisementt.employer.webAddress}</span>
                                                        </Link>
                                                    </Header>
                                                    <Header as='h3' className="cardIsTanımı"> {advertisementt.jobTitle.jobTitle}</Header>
                                                    <Header as='h3' className="cardIsAciklamasi">{advertisementt.jobDescription}</Header>
                                                </Grid.Column>
                                                <GridColumn width={2}>
                                                    <p><Icon name="map pin" />{advertisementt.city.cityName}</p>
                                                    <p><Icon name="user" />{advertisementt.workShift.shiftName}</p>

                                                </GridColumn>
                                            </Grid.Row>
                                        </Grid>
                                    </Container>
                                ))
                        }


                        {
                            isFull ? <Button onClick={() => Fulle()} color='youtube'>
                                <p>İlanları Daralt</p>


                            </Button> : <Button onClick={() => Fulle()} color='youtube'>

                                <p>{abc.length} İlanın Tümünü Görüntüle</p>

                            </Button>
                        }




                    </Grid.Column>
                </Grid.Row>
            </Grid>
























        </div>

    )

}

