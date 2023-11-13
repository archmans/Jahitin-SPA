import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import LogoutModal from './LogoutModal'

const NavbarComponent: React.FC = () => {
    const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
        <Navbar expand="lg" style={{backgroundColor: '#121212'}}>
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src="/logo_premium.png"
                        height="80"
                        className="d-inline-block align-top"
                        alt="logo jahitin"
                    />
                </Navbar.Brand>
                <Navbar.Toggle className="border border-white border-3" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="d-flex flex-row align-items-center ms-auto">
                    <Container className="d-flex flex-column">
                        <Navbar.Text className="text-white fw-bold fs-3 py-0" >hi, Tifa!</Navbar.Text>
                        <Navbar.Text className="text-white py-0" >Admin</Navbar.Text>
                    </Container>
                    <Button 
                    className="text-white fw-bold border border-white border-2 rounded-2 px-4 py-2 ms-4 bg-transparent" 
                    style={{
                        transition: 'background 0.3s ease',
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.background = '#dc3545';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.background = 'transparent';
                    }}
                    onClick={() => setModalShow(true)}
                    >
                        Logout
                    </Button>
                    <LogoutModal show={modalShow} onHide={() => setModalShow(false)} />
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavbarComponent