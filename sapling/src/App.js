import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import ourNavbar from "./components/ourNavbar/inde
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
// import Nav from 'react-bootstrap/Nav'

function App() {
  return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Sapling</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>

  );
}

export default App;
