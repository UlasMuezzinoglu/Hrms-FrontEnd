import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button, Card, Container, Grid, Header, Icon, Image, List } from 'semantic-ui-react'
import Others from '../layouts/Others'
import { Suspense, lazy } from 'react';
import JobAdvertisementService from '../services/jobAdvertisementService'



export default function JobAdvertisementDetail() {

    let { id } = useParams()





    const [jobAdvertisement, setJobAdvertisement] = useState({})

    let a = `${jobAdvertisement.employer?.id}`







    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getById(id).then(result => setJobAdvertisement(result.data.data))


    }, [])














    const Others = React.lazy(() => import('../layouts/Others'));


    return (


        <div>

            <Grid>
                <Grid.Row>
               
                    <Grid.Column width={4}>
                        <br></br>

                       
                        <div className="fixleme">
                        <br></br>
                        <Card>

                            <Image src={jobAdvertisement.employer?.photo} wrapped className="testImage" ui={false} />
                            <Card.Content>
                                <Card.Meta style={{ color: "red" }} ><a target="_blank" href={`https://${jobAdvertisement.employer?.webAddress}`}> {jobAdvertisement.employer?.webAddress}</a></Card.Meta> <br></br>
                                <Card.Header>{jobAdvertisement.employer?.companyName}</Card.Header>
                                <Card.Meta></Card.Meta>
                                <Card.Description>
                                    Firma Sektörü : (sektör)

                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Button basic color='violet' content="Firma Profiline Git"></Button>
                                <a target="_blank" href={`https://google.com/search?q=${jobAdvertisement.employer?.companyName}`}>
                                    <Button basic color='violet' content="Google'la"></Button>
                                </a>

                            </Card.Content>

                        </Card>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Others eid={jobAdvertisement.employer?.id}  fixed="bottom"></Others>
                        </Suspense>
                        </div> 
                    </Grid.Column>
                    
                    <Grid.Column width={12}>
                        <Header as='h2'>İş İlanı Detayları</Header>
                        <Card.Group>
                            <Card fluid>
                                <Card.Content>

                                    <Card.Header>Genel İş Tanımı ve Nitelikleri</Card.Header>

                                    <Card.Description className="ilanIsterler">
                                        <p>İstanbul Şişli Bölgesinde  açılacak olan beş yıldızlı otelimiz için  Kat Hizmetleri Departmanında  istihdam edilmek üzere aşağıdaki özellikleri taşıyan  adayların başvurularını bekliyoruz.
                                            Hem kat hem de meydan tecrübesi olan adaylar bu ilana başvuruda bulunabilirler.</p>
                                        <List bulleted>
                                            <List.Item>Gaining Access</List.Item>
                                            <List.Item>Inviting Friends</List.Item>
                                            <List.Item>Benefits
                                                <List.List>
                                                    <List.Item href='#'>Link to somewhere</List.Item>
                                                    <List.Item>Rebates</List.Item>
                                                    <List.Item>Discounts</List.Item>
                                                </List.List>
                                            </List.Item>
                                            <List.Item>Warranty</List.Item>
                                        </List>

                                    </Card.Description>
                                </Card.Content>










                            </Card>

                            <Card fluid>
                                <Card.Content>
                                    <Card.Header><Icon name="user"></Icon> Aday Kriterleri</Card.Header>
                                    <Card.Description className="ilanIsterler">
                                        <p>askerlik bilgisi tecrübe bilgisi Eğitim Seviyesi Yabancı Dil isterleri vs. </p>
                                        <List bulleted>
                                            <List.Item>Gaining Access</List.Item>
                                            <List.Item>Inviting Friends</List.Item>
                                            <List.Item>Benefits
                                                <List.List>
                                                    <List.Item href='#'>Link to somewhere</List.Item>
                                                    <List.Item>Rebates</List.Item>
                                                    <List.Item>Discounts</List.Item>
                                                </List.List>
                                            </List.Item>
                                            <List.Item>Warranty</List.Item>
                                        </List>

                                    </Card.Description>
                                </Card.Content>

                            </Card>



                            <Card fluid>
                                <Card.Content>
                                    <Card.Header><Icon name="info circle"></Icon> Pozisyon Bilgileri</Card.Header>
                                    <Card.Description className="ilanIsterler">
                                        <p>İstanbul Şişli Bölgesinde  açılacak olan beş yıldızlı otelimiz için  Kat Hizmetleri Departmanında  istihdam edilmek üzere aşağıdaki özellikleri taşıyan  adayların başvurularını bekliyoruz.
                                            Hem kat hem de meydan tecrübesi olan adaylar bu ilana başvuruda bulunabilirler.</p>
                                        <List bulleted>
                                            <List.Item>Gaining Access</List.Item>
                                            <List.Item>Inviting Friends</List.Item>
                                            <List.Item>Benefits
                                                <List.List>
                                                    <List.Item href='#'>Link to somewhere</List.Item>
                                                    <List.Item>Rebates</List.Item>
                                                    <List.Item>Discounts</List.Item>
                                                </List.List>
                                            </List.Item>
                                            <List.Item>Warranty</List.Item>
                                        </List>

                                    </Card.Description>
                                    
                                </Card.Content>

                                <Card.Content extra>
                                    <div className="ui two buttons">
                                        <Button basic color="green">
                                            Approve
                                        </Button>
                                        <Button basic color="red">
                                            Decline
                                        </Button>
                                    </div>
                                </Card.Content>

                            </Card>



                        </Card.Group>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    )
}
