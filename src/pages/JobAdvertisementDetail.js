import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button, Card, Container, Grid, Header, Icon, Image, List } from 'semantic-ui-react'
import Others from '../layouts/Others'
import { Suspense, lazy } from 'react';
import JobAdvertisementService from '../services/jobAdvertisementService'
import JobAdvertisements from './JobAdvertisements';



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
            
            <Grid stackable>
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
                                    

                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Button basic color='violet' content="Firma Profiline Git"></Button>
                                <a target="_blank" href={`https://google.com/search?q=${jobAdvertisement.employer?.companyName}`}>
                                    <Button basic color='violet' content="Google'la"></Button>
                                </a> 
                                <Button basic color='violet' content="Firmayı Takip Et"></Button>

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
                                            <p>{jobAdvertisement.fullDescription}</p>
                                    </Card.Description>
                                </Card.Content> 
                            </Card>

                            <Card fluid>
                                <Card.Content>
                                    <Card.Header><Icon name="user"></Icon> Aday Kriterleri</Card.Header>
                                    <Card.Description className="ilanIsterler">
                                        <Grid>
                                            <Grid.Row>
                                                <Grid.Column width={5}>
                                                <p><b>Tecrübe :</b></p>
                                                </Grid.Column>
                                                <Grid.Column width={11}>
                                                <p><b>{jobAdvertisement.experience?.experienceTime}</b></p>
                                                </Grid.Column>    
                                            </Grid.Row>
                                            <Grid.Row>
                                                <Grid.Column width={5}>
                                                <p><b>Eğitim :</b></p>
                                                </Grid.Column>
                                                <Grid.Column width={11}>
                                                 
                                                 
                                                    {
                                                        jobAdvertisement.schoolGrades?.map(advertt =>(
                                                            <span>{advertt.gradeName} </span>
                                                        ))
                                                    }                                    

                                                    
                                                 
                                                </Grid.Column>    
                                            </Grid.Row>
                                        </Grid>
                                        

                                    </Card.Description>
                                </Card.Content>

                            </Card>



                            <Card fluid>
                                <Card.Content>
                                    <Card.Header><Icon name="info circle"></Icon> Pozisyon Bilgileri</Card.Header>
                                    <Card.Description className="ilanIsterler">
                                    <Grid stackable>
                                            <Grid.Row>
                                                <Grid.Column width={5}>
                                                <p><b>Firma Sektörü :</b></p>
                                                </Grid.Column>
                                                <Grid.Column width={11}>
                                                <p><b>{jobAdvertisement.employer?.sector}</b></p>
                                                </Grid.Column>    
                                            </Grid.Row>
                                            <Grid.Row>
                                                <Grid.Column width={5}>
                                                <p><b>Çalışma Şekli :</b></p>
                                                </Grid.Column>
                                                <Grid.Column width={11}>
                                                {jobAdvertisement.workShift?.shiftName}
                                                </Grid.Column>    
                                            </Grid.Row>
                                            <Grid.Row>
                                                <Grid.Column width={5}>
                                                <p><b>Bu iş için kaç kişi alınacak :</b></p>
                                                </Grid.Column>
                                                <Grid.Column width={11}>
                                                {jobAdvertisement.jobOfNumberPosition}
                                                </Grid.Column>    
                                            </Grid.Row>

                                            <Grid.Row>
                                                <Grid.Column width={5}>
                                                <p><b>Maaş Skalası :</b></p>
                                                </Grid.Column>
                                                <Grid.Column width={11}>
                                                <span>Minimum {jobAdvertisement.minSalary}  ₺</span> <span>Maksimum {jobAdvertisement.maxSalary} ₺</span>
                                                </Grid.Column>    
                                            </Grid.Row>
                                            <Grid.Row>
                                                <Grid.Column width={5}>
                                                <p><b>Şehir :</b></p>
                                                </Grid.Column>
                                                <Grid.Column width={11}>
                                                {jobAdvertisement.city?.cityName}
                                                </Grid.Column>    
                                            </Grid.Row>
                                        </Grid>

                                    </Card.Description>
                                    
                                </Card.Content>

                                <Card.Content extra>
                                    <div className="ui two buttons">
                                        <Button basic color="green">
                                            Başvur
                                        </Button>
                                        <Button basic color="red">
                                            Favorilere Ekle
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
