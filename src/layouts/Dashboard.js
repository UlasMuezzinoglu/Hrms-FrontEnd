import React from 'react'
import { Container, Divider, Grid, Header } from 'semantic-ui-react'
import JobAdvertisements from '../pages/JobAdvertisements'
import Sidebar from './Sidebar'

export default function Dashboard() {
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
                    <Grid.Column width={4}>
                        <Sidebar />
                    </Grid.Column>
                    <Grid.Column width={12}>
                    <JobAdvertisements />
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
