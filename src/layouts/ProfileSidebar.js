import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'semantic-ui-react'

export default function ProfileSidebar() {
    return (
        <Card>
                            <Card.Content><Link to="/profile"><h3 style={{ letterSpacing: "0.01em" }}>Profilim</h3></Link></Card.Content>
                            <Card.Content><h3 style={{ letterSpacing: "0.01em" }}>Özgeçmişlerim</h3></Card.Content>
                            <Card.Content><h3 style={{ letterSpacing: "0.01em" }}>Başvurduğum İlanlar</h3></Card.Content>
                            <Card.Content><h3 style={{ letterSpacing: "0.01em" }}>Favori İlanlarım</h3></Card.Content>
                            <Card.Content><Link to="/Settings"><h3 style={{ letterSpacing: "0.01em" }}>Ayarlar</h3></Link></Card.Content>
                        </Card>
    )
}
