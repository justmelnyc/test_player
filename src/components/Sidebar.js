import React from 'react'
import {Nav, NavItem} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const albumImage = songDetails => {
    if (songDetails) {
        if (songDetails.album) {
            return <img src={songDetails.album.images[1].url} className="navBar__image" alt={'image'}/>
        }
    }
}

const Sidebar = ({location, songDetails, children}) => (
    <Nav bsStyle="pills" stacked bsClass={'navBar'}>

        <div>
            {children}
            <p className="NavBar__title">Your library </p>

            <NavItem componentClass={Link} href='/' to="/">
                Browse
            </NavItem>
            <NavItem componentClass={Link} href="/settings" to="/settings">
                Settings
            </NavItem>
            <NavItem componentClass={Link} href="/SongsPage" to="/SongsPage">
                Songs
            </NavItem>
            <p className="NavBar__title">Playlists</p>

            {/*<NavItem componentClass={Link} href="/AboutPage" to="/login">*/}
            {/*Classics*/}
            {/*</NavItem>*/}
            {/*<NavItem componentClass={Link} href="/AboutPage" to="/AboutPage">*/}
            {/*Hip Hop*/}
            {/*</NavItem>*/}
            {/*<NavItem componentClass={Link} href="/AboutPage" to="/AboutPage">*/}
            {/*Local Acts*/}
            {/*</NavItem>*/}
        </div>
        {albumImage(songDetails)}

    </Nav>
)

export default Sidebar
