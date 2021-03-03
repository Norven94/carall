import * as ReactBootstrap from 'react-bootstrap'
import { CarContext } from "../contexts/CarContext";
import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom"
import { NavLink } from "react-router-dom";

function Navbar () {
  const { totalProducts,totalOrder } = useContext(CarContext);

  const history = useHistory()
  
  return (
  <ReactBootstrap.Navbar collapseOnSelect expand="sm" bg="info" variant="dark">
    <ReactBootstrap.Navbar.Brand>
      <NavLink to="/">
        <img src="/assets/images/logo.png" alt="Logo"/>
      </NavLink>
    </ReactBootstrap.Navbar.Brand>
    <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
      <ReactBootstrap.Nav className="ml-auto">
        <ReactBootstrap.Nav.Link>            
          <NavLink to="/">
            Home
          </NavLink>
        </ReactBootstrap.Nav.Link>
        <ReactBootstrap.Nav.Link eventKey={2} href="/About">
          <NavLink to="/about">
            About
          </NavLink>  
        </ReactBootstrap.Nav.Link>
        <ReactBootstrap.Dropdown>
          <ReactBootstrap.Dropdown.Toggle variant="info" id="dropdown-basic" >
            <div className="cartBox"> 
              <p>{totalProducts}</p>
              <img src="/assets/icons/cartw.svg" alt="Cart"/>
            </div>
          </ReactBootstrap.Dropdown.Toggle>
          <ReactBootstrap.Dropdown.Menu>
            <ReactBootstrap.NavDropdown.Item href="#a">Mazda 23421</ReactBootstrap.NavDropdown.Item>
            <ReactBootstrap.NavDropdown.Divider />
            <ReactBootstrap.NavDropdown.Item href="#">TOTAL: {totalOrder} Kr </ReactBootstrap.NavDropdown.Item>
            <ReactBootstrap.NavDropdown.Item href="#" 
            onClick={() => history.push("/cartpage")}
            >Checkout</ReactBootstrap.NavDropdown.Item>
          </ReactBootstrap.Dropdown.Menu>
        </ReactBootstrap.Dropdown>
      </ReactBootstrap.Nav>
    </ReactBootstrap.Navbar.Collapse>
  </ReactBootstrap.Navbar>
  )
}

export default Navbar;
