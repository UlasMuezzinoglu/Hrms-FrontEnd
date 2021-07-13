import React, { useState, useEffect } from 'react'
import { Form, Checkbox, Container, Divider, Dropdown, Grid, Header, Icon, Input, Menu, Button } from 'semantic-ui-react'
import { Slider } from "react-semantic-ui-range";
import CityService from '../services/cityService';
import { Formik, useFormik } from "formik";
import * as Yup from "yup";





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

    


    const [cities, setCities] = useState([])


    useEffect(() => {
        let citiesService = new CityService()
        citiesService.getall().then(result => setCities(result.data.data))
    }, [])

    const cityOption = cities.map((city, index) => ({
        key: index,
        text: city.cityName,
        value: city.id, 
        
      }));

      const formik = useFormik({
        initialValues: {
          cityId: ""
        }})
        const handleChangeSemantic = (value, fieldName) => {
            formik.setFieldValue(fieldName, value);
          }
    



          const [minValue, setMinValue] = useState(1000);
          const [maxValue, setMaxValue] = useState(1000);

  const minSettings = {
    start: 1000,
    min: 1000,
    max: 20100,
    step: 100,
    onChange: minValue => {
        setMinValue(minValue);
    }
  };

  const maxSettings = {
    start: 1000,
    min: 1000,
    max: 20100,
    step: 100,
    onChange: maxValue => {
        setMaxValue(maxValue);
    }
  };

  const handleMinValueChange = e => {
    let minValue = parseInt(e.target.minValue);
    if (!minValue) {
        minValue = 0;
    }
    setMinValue(e.target.minValue);
  };

  const handleMaxValueChange = e => {
    let maxValue = parseInt(e.target.maxValue);
    if (!maxValue) {
        maxValue = 0;
    }
    setMaxValue(e.target.maxValue);
    
  };



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
                <Dropdown clearable placeholder="Ülke Seç" search selection options={ulkeler} />

                <Header as='h5'>Şehir</Header>
                {/* <Dropdown clearable placeholder="Şehir Seç" search multiple selection options={sehirler} /> */}

                
                
                

                <Dropdown
              clearable
              item
              placeholder="Şehir"
              search
              selection
              multiple
              
              
             
              options={cityOption}
              />
            

                
              

                <Divider ></Divider>

                <Header as='h3'><Icon name="money" size='big' />  Maaş Skalası</Header>
                <Grid>
                    <Grid.Row className="maas">
                        <Grid.Column width={10}>
                            <Header as='h5'>Minimum</Header>
                        </Grid.Column>
                        <Grid.Column width={1}>
                            <Header as='h5'>₺{minValue}</Header>
                        </Grid.Column>
                    </Grid.Row>

                </Grid>

                <Slider value={minValue} color="red" settings={minSettings} />
                <Grid>
                    <Grid.Row className="maas">
                        <Grid.Column width={10}>
                            <Header as='h5'>Maksimum</Header>
                        </Grid.Column>
                        <Grid.Column width={1}>
                            <Header as='h5'>₺{maxValue}</Header>
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
                <Slider  color="red" settings={maxSettings} />
                <Divider ></Divider>
                <Button size='huge'  primary>Filtrele</Button>
            </Container>






        </div>
    )
}
