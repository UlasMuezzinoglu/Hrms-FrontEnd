import React from 'react'
import { Grid } from 'semantic-ui-react'
import Sidebar from './Sidebar'


export default function Empty() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Sidebar />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        Burası Boş 
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
