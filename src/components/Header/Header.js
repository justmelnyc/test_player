import React from 'react'
import {Form, FormControl, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import SimpleLineIcon from 'react-simple-line-icons'


const Header = ({image}) => {


    return (
        <Navbar expand="lg" className='header ui-bg'>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <SimpleLineIcon name="star" style={{padding: '5px 10px', cursor: 'pointer'}}/>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                </Form>
                <Nav className="ml-auto">
                    <div className='header__Profile'>
                        <div className='header__Profile '>
                            <img className='interactive mr-2' alt={'profile'}
                                 src='http://commercial-song.net/wp-content/uploads/2018/02/Nike_Mercurial_Commercial.jpg'/>
                            <h2 className='interactive link'>Bome Theater</h2>
                        </div>
                    </div>
                    <NavDropdown drop={'left'} id="basic-nav-dropdown" style={{paddingRight: '15px'}}>
                        <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
                    </NavDropdown>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    )

}

export default Header
