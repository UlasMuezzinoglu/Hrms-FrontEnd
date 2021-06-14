import React from 'react'
import { Button, Container, Icon, Menu } from 'semantic-ui-react'


export default function Navi() {
    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item
                        name='homee'
                    />
                    <Menu.Item
                        name='messages'
                    />


                    <Menu.Menu position='right'>



                        <Menu.Item>
                            <Button.Group>
                                <Button positive href="https://google.com"> Giriş Yap</Button>
                                <Button.Or text=' ' />
                                <Button positive>Üye Ol</Button>
                            </Button.Group>
                        </Menu.Item>
                    </Menu.Menu>


                </Container>
            </Menu>


        </div>
    )
}
