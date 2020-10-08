import React from "react";
import { Link } from "react-router-dom";
import './src/style.css'
import {
  Navbar,
  NavDropdown,
  Form,
  Nav,
  FormControl,
  Button,
} from "react-bootstrap";
const HeaderNav = (props) => {
  return (
    <>
      <Navbar className ={`navbar shadow-sm p-1 mb-3`} expand="lg">
        <Navbar className={`logo`}>Zwallet</Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/"></Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/transfer"></Link>
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {/* <Form inline> */}
          
          <img className="" src={require('./assets/image/robert.svg')}/>
          <div clasName={`user d-flex justify-content-end col-6`}>
            <h6 className={`ml-4 pt-3`}>Robert Chandler</h6>
            <p className={`ml-3`}>+62 8139 3877 7946</p>
            </div>
            
            <img className="ml-2" src={require('./assets/icons/bell.png')}/>
            
          {/* </Form> */}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default HeaderNav;
