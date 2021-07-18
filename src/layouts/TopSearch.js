import React from 'react'
import { Container, Grid, Header } from 'semantic-ui-react'

export default function TopSearch() {
    return (
        <div>
            <Grid stackable className="test2">
                
                <Grid.Row>
                <Grid.Column width="1"></Grid.Column>
                    <Grid.Column width="14">
                    <Container className="topSearch" style={{background:"red"}}>
                        <Grid stackable>
                        <Grid.Row>
                            <Grid.Column width="4">
                                burası
                            </Grid.Column>
                            <Grid.Column width="8">
                                detaylı arama
                            </Grid.Column>
                            <Grid.Column width="4">
                                komponenti
                            </Grid.Column>
                        </Grid.Row>
                        </Grid>
                    </Container>
                    </Grid.Column>
                    <Grid.Column width="1"></Grid.Column>
                </Grid.Row>
                </Grid>
        </div>
    )
}
