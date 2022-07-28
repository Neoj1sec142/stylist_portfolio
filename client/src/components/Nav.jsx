import { useNavigate, Link } from 'react-router-dom'
import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";


const NavBar = () => {
    const navigate = useNavigate()
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{justifyContent: 'space-evenly'}}>
            <Navbar.Brand onClick={() => navigate('/')}>Meredith Swanson ®</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" style={{justifyContent: 'space-between', color: 'white', textAlign: 'center'}}>
                <br></br>
                <Nav.Link href='/'>Home</Nav.Link>
                <br></br>
                <Nav.Link href='/contact'>Contact</Nav.Link>
                <br></br>
                <Nav.Link href='/services'>Services</Nav.Link>
                <br></br>
            </Navbar.Collapse>
        </Navbar>
        
    )
}
export default NavBar