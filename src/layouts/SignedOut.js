import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
    return (
        <div>
            <Menu.Item>
                <Button onClick={signIn} primary>Giriş Yap</Button>
                <Button primary style={{marginLeft: "0.5em"}}><Link style={{color: "white"}} to="/kayitol">Kayıt Ol</Link></Button>
            </Menu.Item>
        </div>
    )
}
