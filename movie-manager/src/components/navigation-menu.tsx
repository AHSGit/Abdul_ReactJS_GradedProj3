import React from "react";
import "../styles/navbar.css"
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';


const NavigationMenu = () => {

    return (
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand className="me-5" as={NavLink} to="/" style={{color: 'goldenrod', fontWeight: '600'}} >
                <strong><FontAwesomeIcon icon={faFilm} /></strong>&nbsp;
                    MOTT
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto gap-2">
                    <Nav.Link as={NavLink} to="/movies/upcoming" className="nav-item" >Coming Soon</Nav.Link>
                    <Nav.Link as={NavLink} to="/movies/in-theaters" className="nav-item" >In Theaters</Nav.Link>
                    <Nav.Link as={NavLink} to="/movies/top-indian" className="nav-item" >Top Rated Indian</Nav.Link>
                    <Nav.Link as={NavLink} to="/movies/top-rated" className="nav-item" >Top Rated</Nav.Link>
                </Nav>
                <Nav className="mx-5">
                <Nav.Link as={NavLink} to="/movies/favourites" className="nav-item" >Favourites</Nav.Link>
                    <Nav.Link as={NavLink} to="/movies/search" className="nav-item">Search&nbsp;&nbsp;<strong><i className="fa-solid fa-magnifying-glass"></i></strong></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavigationMenu;