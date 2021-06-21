import React from 'react'
import { Route } from 'react-router-dom'
import { Container, Divider, Grid, Header } from 'semantic-ui-react'
import JobAdvertisementDetail from '../pages/JobAdvertisementDetail'
import JobAdvertisements from '../pages/JobAdvertisements'
import Others from './Others'
import Sidebar from './Sidebar'
import KayitOlForm from './formikForms/KayitOlForm'
import Empty from './Empty'
import JobAdvertisementService from '../services/jobAdvertisementService'
import { useEffect } from 'react'
import { useState } from 'react'




export default function Dashboard() {

    let flag = true

    

    
    return (
        <div>
            <Grid className="test">
                
                <Grid.Row>
                    
                    <Grid.Column width={16}>
                    <Header as='h2'>Burası full width gridcolumn. buraya div içinde Geniş Arama banner'ı gelicek</Header>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
            <Grid className="test">
                
                <Grid.Row>
                    
                    <Grid.Column width={16}>
                    {
                        flag ?  <Route exact path="/"  component={JobAdvertisements}></Route> : <Route  path="/" component={Empty}></Route>
                    }
                    {/* <Route exact path="/"  component={JobAdvertisements}></Route> */}
                    <Route exact path="/JobAdvertisements" component={JobAdvertisements}></Route>
                    <Route  path="/JobAdvertisements/:id" component={JobAdvertisementDetail}></Route>
                    <Route  path="/kayitol" component={KayitOlForm}></Route>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        kenar boşluğu 4 birim
                    </Grid.Column>
                    <Grid.Column width={8}>
                    <Header as='h2' >Burası ise div içinde birşey.. daha karar vermedim.</Header>
                    </Grid.Column>
                    <Grid.Column width={4}>
                    kenar boşluğu 4 birim
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
