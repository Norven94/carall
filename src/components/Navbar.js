
// import { Route, Switch, BrowserRouter } from 'react-router-dom';
// import Home from './Pages/Home';
//import About from './Pages/About';
import * as ReactBootstrap from 'react-bootstrap'
import { cart } from "../css/cart.module.css";

function Navbar () {
  return (
  <ReactBootstrap.Navbar collapseOnSelect expand="sm" bg="info" variant="dark">
    <ReactBootstrap.Navbar.Brand href="/"><img src="/assets/images/logo.png" alt="Logo"/></ReactBootstrap.Navbar.Brand>
      <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootstrap.Nav className="ml-auto">
          <ReactBootstrap.Nav.Link href="/">Home</ReactBootstrap.Nav.Link>
          <ReactBootstrap.Nav.Link eventKey={2} href="/About">About</ReactBootstrap.Nav.Link>
            <ReactBootstrap.Dropdown>
              <ReactBootstrap.Dropdown.Toggle variant="info" id="dropdown-basic" >
              <img className={cart} src="/assets/icons/cartw.svg" alt="Cart"/>
              </ReactBootstrap.Dropdown.Toggle>

              <ReactBootstrap.Dropdown.Menu>
                <ReactBootstrap.NavDropdown.Item href="#a">Mazda 23421</ReactBootstrap.NavDropdown.Item>
                <ReactBootstrap.NavDropdown.Divider />
                <ReactBootstrap.NavDropdown.Item href="#">TOTAL:</ReactBootstrap.NavDropdown.Item>
                <ReactBootstrap.NavDropdown.Item href="#">Checkout</ReactBootstrap.NavDropdown.Item>
              </ReactBootstrap.Dropdown.Menu>
            </ReactBootstrap.Dropdown>
        </ReactBootstrap.Nav>
      </ReactBootstrap.Navbar.Collapse>
  </ReactBootstrap.Navbar>
  )
}

export default Navbar;
