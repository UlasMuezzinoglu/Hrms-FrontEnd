import React from 'react'
import { Link } from 'react-router-dom'
import { Accordion, Card, Container, Divider, Feed, Grid, Header, Icon, Table } from 'semantic-ui-react'
import ProfileAccerdeon from "../layouts/ProfileAccerdeon"
import ProfileSidebar from '../layouts/ProfileSidebar'

export default function Profile() {




    return (
        <div>
            <Grid stackable>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <ProfileSidebar></ProfileSidebar>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Header style={{ textAlign: "left" }} as="h2">Hoş geldin (FirstName gelcek)</Header>
                        <Container id="profileFirstContainer">
                            <Header style={{ textAlign: "left", marginBottom: "5px" }} as="h3">Güncel Özgeçmişlerin</Header>
                            <p style={{ textAlign: "left", paddingLeft: "30px" }}>güncellediğin özgeçmişine buradan ulaşabilirsin. <span><a href="#"> Buraya tıklayarak</a> hepsine ulaşabilirsin</span></p>
                            <Card style={{ textAlign: "left", marginLeft: "30px" }}>

                                <Card.Content>
                                    <Feed>
                                        <Feed.Event>
                                            <Feed.Label image='https://res.cloudinary.com/prodiggie/image/upload/v1623517940/173290317_163927492273375_2499662652410845122_n_rdcvsk.jpg' />
                                        </Feed.Event></Feed>
                                    <Card.Header>Oluşturulma Tarihi</Card.Header>
                                    <Card.Meta>Son Güncellenme Tarihi</Card.Meta>
                                    
                                </Card.Content>
                            </Card>
                        </Container>

                        <Container id="profileFirstContainer">
                            <Header style={{ textAlign: "left", marginBottom: "5px" }} as="h3">İşte Sana Önerebileceğimiz Bazı İlanlar</Header>
                            <Card style={{ textAlign: "left", marginLeft: "30px" }}>

                                test
                            </Card>
                        </Container>

                        <ProfileAccerdeon></ProfileAccerdeon>
                    </Grid.Column>
                </Grid.Row>



            </Grid>


        </div>
    )
}
