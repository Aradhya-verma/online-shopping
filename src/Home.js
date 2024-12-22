
import './App.css';
import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Home(){

    return(

        <>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"  className="navbar-brand">UT Fasion</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="nav-link "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <a href="#" className="link">Home</a>
            <a href="#" >Link</a>
            <NavDropdown title="Link" id="navbarScrollingDropdown"> </NavDropdown>
            <a href="#" disabled>
              Link
            </a>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        <h1></h1>
        
        </>
    );
}
export default Home;