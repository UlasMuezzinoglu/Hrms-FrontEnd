import React from 'react'
import { Link } from 'react-router-dom'
import { Accordion, Card, Divider, Grid, Icon, Table } from 'semantic-ui-react'
import SettingAccordion from "../layouts/SettingAccordion"
import ProfileSidebar from '../layouts/ProfileSidebar'

export default function Settings() {
    return (
        <div>
            <Grid stackable>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <ProfileSidebar></ProfileSidebar>
                    </Grid.Column>
                    <Grid.Column  width={12}>
                    <SettingAccordion></SettingAccordion>
                    </Grid.Column>
                </Grid.Row>
               
                    
               
            </Grid>


        </div>
    )
}
