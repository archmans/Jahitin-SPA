import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const NavbarComponent: React.FC = () => {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-transparant">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src="../../public/logo.png"
                        height="50"
                        className="d-inline-block align-top"
                        alt="logo jahitin"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto ">
                    <Nav.Link href="#home" style={{ color: 'rgba(39, 152, 100, 1)', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>Home</Nav.Link>
                    <Nav.Link href="#link" style={{ color: 'rgba(39, 152, 100, 1)', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>Link</Nav.Link>
                    <Nav.Link href="#link" style={{ color: 'rgba(39, 152, 100, 1)', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>Logout</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavbarComponent