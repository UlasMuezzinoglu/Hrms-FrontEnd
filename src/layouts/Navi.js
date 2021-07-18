import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { Container, Menu } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'


export default function Navi() {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const history = useHistory()
    function handleSignOut(params) {
        setIsAuthenticated(false)
        history.push("/")
    }
    function handleSignIn(params) {
        setIsAuthenticated(true)
    }





    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item
                        name='Anasayfa ' as={NavLink} to="/"
                    />
                    <Menu.Item
                        name='Kariyer Rehberi' as={NavLink} to="/carrierGuide"
                    />
                    <Menu.Item
                        name='Pozisyon Rehberi' as={NavLink} to="/positionGuide"
                    />


                    <Menu.Menu position='right'>



                        {
                            isAuthenticated?<SignedIn  signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn} />
                        }
                    </Menu.Menu>


                </Container>
            </Menu>


        </div>
    )
}
