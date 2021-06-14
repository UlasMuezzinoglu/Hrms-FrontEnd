import React, { useState, useEffect } from 'react'
import {Form, Checkbox, Container, Divider, Dropdown, Grid, Header, Icon, Input, Menu, Button } from 'semantic-ui-react'
import { Slider } from "react-semantic-ui-range";
import CitiesService from '../services/citiesService';




const sehirler = [
    { key: 1, text: 'Ankara', value: 1 },
    { key: 2, text: 'İstanbul', value: 2 },
    { key: 3, text: 'İzmir', value: 3 },
    { key: 4, text: 'Antalya', value: 4 },
  ]
  const ulkeler = [
    { key: 1, text: 'Türkiye', value: 1 },
  ]





  
  
  
 
export default function Sidebar() {

    const [abc, setAbc] = useState([])

    useEffect(() => {
        let abc = new CitiesService()
        abc.getCities().then(result => setAbc(result.data.data))
    })
    return (

        


        <div>
            <Header as='h2'>Filtreler</Header>


            <Container className="filterContainer">

                <Input placeholder='Kelime Ara...' />
                <Divider ></Divider>
                <Header as='h3'><Icon name="user" size='big' />  Çalışma Şekli</Header>
                <ul>
                    <li>
                    <Checkbox label='Tümü' />
                    </li>
                    <li>
                    <Checkbox label='Tam Zamanlı' />
                    </li>
                    <li>
                    <Checkbox label='Yarı Zamanlı' />
                    </li>
                    <li>
                    <Checkbox label='Freelancer' />
                    </li>
                    <li>
                    <Checkbox label='Stajyer' />
                    </li>
                    <li>
                    <Checkbox label='Remote' />
                    </li>
                </ul>
                <Divider ></Divider>
                
                <Header as='h3'><Icon name="location arrow" size='big' />  Lokasyon</Header>
                <Header as='h5'>Ülke</Header> 
                <Dropdown clearable placeholder="Ülke Seç" search selection options={ulkeler}  />

                <Header as='h5'>Şehir</Header> 
                <Dropdown clearable placeholder="Şehir Seç" search selection options={abc.cityName}  />
            
                <Divider ></Divider>

                <Header as='h3'><Icon name="money" size='big' />  Maaş Skalası</Header>
                <Grid>
                    <Grid.Row className="maas">
                        <Grid.Column width={10}>
                        <Header as='h5'>Minimum</Header>
                        </Grid.Column>
                        <Grid.Column width={1}>
                        <Header as='h5'>Değer</Header>
                        </Grid.Column>
                    </Grid.Row>
                    
                </Grid>
                
                <Slider color="red" />
                <Grid>
                <Grid.Row className="maas">
                        <Grid.Column width={10}>
                        <Header as='h5'>Maksimum</Header> 
                        </Grid.Column>
                        <Grid.Column width={1}>
                        <Header as='h5'>Değer</Header>
                        </Grid.Column>
                    </Grid.Row>
                    
                </Grid>
                <Slider color="red" />
                <Divider ></Divider>
                <Button size='huge' primary>Filtrele</Button>
            </Container>






        </div>
    )
}
