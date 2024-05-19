import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AdBar from './adbar.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Badge from 'react-bootstrap/Badge';
import "./navBar.css";
import Brand from '../../assets/brand.png'

function NavBar () {
  return (
    <>
    <AdBar />
    <Navbar expand="lg" className="navbar-bg">
      <Container>
        <Navbar.Brand href="#home"><img src={Brand} alt="brand USA2ARG." style={{ width: '220px' }} /></Navbar.Brand>
        <Form className="form-search d-flex">
            <Form.Control type="search" placeholder="Encontrá lo que buscas" className="me-0" aria-label="Search" />
            <Button className='button-search'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <circle cx="11" cy="11" r="8"></circle> <line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></Button>
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div>
            <Nav className="me-auto">
                <NavDropdown className='nav-links' title="Todas las categorías" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Indumentaria</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Tecnología
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Perfumería</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Hogar y jardín</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className='nav-links' href="#home">Home</Nav.Link>
                <Nav.Link className='nav-links' href="#link">HOT WEEK!</Nav.Link>
            </Nav>
        </div>
        <Nav>
            <Nav.Link className='nav-links' href="#carrito">
            <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '1.4em', color:'white' }} />
            <Badge pill bg="danger" className="badge">0</Badge>
            </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;
