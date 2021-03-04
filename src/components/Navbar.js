import * as ReactBootstrap from 'react-bootstrap'
import { CarContext } from "../contexts/CarContext";
import { useContext } from "react";
import { useHistory } from "react-router-dom"
import { NavLink } from "react-router-dom";

function Navbar () {
  const { totalProducts,totalOrder } = useContext(CarContext);
  const history = useHistory()
  
  return (
<<<<<<< Updated upstream
  <ReactBootstrap.Navbar collapseOnSelect expand="sm" bg="info" variant="info">
=======
  <ReactBootstrap.Navbar collapseOnSelect expand="sm" bg="info" variant="dark">

    
    <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
>>>>>>> Stashed changes
    <ReactBootstrap.Navbar.Brand>
      <NavLink to="/">
        <img src="/assets/images/logo.png" alt="Logo"/>
      </NavLink>
    </ReactBootstrap.Navbar.Brand>
    <ReactBootstrap.Dropdown>
          <ReactBootstrap.Dropdown.Toggle variant="info" id="dropdown-basic" >
            <div className="cartBox"> 
              <p>{totalProducts}</p>
              <img src="/assets/icons/cartw.svg" alt="Cart"/>
            </div>
          </ReactBootstrap.Dropdown.Toggle>
          <ReactBootstrap.Dropdown.Menu>
           <div className="totalPrice"><p> Total: {totalOrder} Kr</p></div>
            <ReactBootstrap.NavDropdown.Divider />
            <ReactBootstrap.NavDropdown.Item
            onClick={() => history.push("/cartpage")}
            >Checkout</ReactBootstrap.NavDropdown.Item>
          </ReactBootstrap.Dropdown.Menu>
        </ReactBootstrap.Dropdown>
    <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
      <ReactBootstrap.Nav className="ml-auto">
        <ReactBootstrap.Nav.Link>            
          <NavLink to="/">
            Home
          </NavLink>
        </ReactBootstrap.Nav.Link>
        <ReactBootstrap.Nav.Link>
          <NavLink to="/about">
             About
          </NavLink>  
        </ReactBootstrap.Nav.Link>
       
      </ReactBootstrap.Nav>
    </ReactBootstrap.Navbar.Collapse>
  </ReactBootstrap.Navbar>
  )
}

export default Navbar;
