import React from 'react'
import {Nav, NavItem} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Sidebar = ({location, songDetails, children}) => (
    <Nav bsStyle="pills" stacked bsClass={'navBar'}>
        <div>
            {children}
            <p className="NavBar__title">Your library </p>
            <NavItem componentClass={Link} href="/" to="/">
                Home
            </NavItem>
            <NavItem componentClass={Link} href='/browse' to="/browse">
                Browse
            </NavItem>
            <NavItem componentClass={Link} href="/settings" to="/settings">
                Settings
            </NavItem>
            <p className="NavBar__title">Playlists</p>
        </div>
    </Nav>
)

export default Sidebar
