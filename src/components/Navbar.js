import * as ReactBootstrap from 'react-bootstrap'
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
import { useHistory, NavLink } from "react-router-dom"
import styles from '../css/Navbar.module.css';
function Navbar() {
  const { totalProducts, totalOrder } = useContext(CartContext);
  const { alert } = useContext(CartContext);
  const history = useHistory()

  return (
    <>
    <ReactBootstrap.Navbar sticky="top" collapseOnSelect expand="sm" bg="info" variant="light">
      <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootstrap.Navbar.Brand>
        <NavLink to="/">
          <img src="/assets/images/logo.svg" alt="Logo" />
        </NavLink>
      </ReactBootstrap.Navbar.Brand>
      <ReactBootstrap.Dropdown>
            <ReactBootstrap.Dropdown.Toggle variant="info" id="dropdown-basic" >
              <div className="cartBox">
                <p>{totalProducts}</p>
                <img src="/assets/icons/cart.svg" alt="Cart" />
              </div>
            </ReactBootstrap.Dropdown.Toggle>
            <ReactBootstrap.Dropdown.Menu>
              Total :{totalOrder} Kr
              <ReactBootstrap.NavDropdown.Divider />
              <ReactBootstrap.NavDropdown.Item 
                onClick={() => history.push("/cartpage")}
              >Checkout</ReactBootstrap.NavDropdown.Item>
            </ReactBootstrap.Dropdown.Menu>
          </ReactBootstrap.Dropdown>
      <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootstrap.Nav className="ml-auto">
            <NavLink className={styles.span}  to="/">
            <p className="text-center">Home</p>
          </NavLink>
            <NavLink className={styles.span} to="/about">
            <p className="text-center">About</p>
          </NavLink>
          <NavLink className={styles.span} to="/orderhistory">
            <p className="text-center">Order History</p>
          </NavLink>
          <NavLink className={styles.span} to="/LoginPage">
            <p className="text-center">Log in</p>
          </NavLink>
        </ReactBootstrap.Nav>
      </ReactBootstrap.Navbar.Collapse>
    </ReactBootstrap.Navbar>
 
    </>
  )
}

export default Navbar;
