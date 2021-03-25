import * as ReactBootstrap from 'react-bootstrap'
import { CartContext } from "../contexts/CartContext";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { useHistory, NavLink } from "react-router-dom"
import styles from '../css/Navbar.module.css';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function Navbar() {
  const { totalProducts, totalOrder, cart, removeProduct } = useContext(CartContext);
  const { loginState } = useContext(UserContext);
  const history = useHistory()

  const goToProduct = (carId) => {
    history.push("/product/" + carId);
  };

  const handleRemoveProduct = (car, e) => {
    e.stopPropagation()
    removeProduct(car)
  }

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
            <div className={styles.cartCars}>
              {cart.map((car, i) => (
                <div key={i} className={styles.carBox} onClick={() => goToProduct(car.vin)}>
                  <img className={styles.carImage} src={car.image} alt={`Image of ${car.make} ${car.model} ${car.year}`} />
                  <div className={styles.carDescription}>
                    <span className={styles.carName}>{`${car.make} ${car.model}`}</span>
                    <span className={styles.carYear}>{`${car.year}`}</span>
                    <span className={styles.carPrice}>{`${car.price}`}</span>
                  </div>
                  <img className={styles.removeButton} onClick={(e) => handleRemoveProduct(car, e)} src="/assets/icons/removeFromCart.svg" alt="Remove product from basket" />
                </div>
              ))}
            </div>
            <span className={styles.totalOrder}>Total: {totalOrder} Kr</span>
            <ReactBootstrap.NavDropdown.Divider />
            <ReactBootstrap.NavDropdown.Item
              onClick={() => history.push("/cartpage")}
            >Checkout</ReactBootstrap.NavDropdown.Item>
          </ReactBootstrap.Dropdown.Menu>
        </ReactBootstrap.Dropdown>
        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootstrap.Nav className="ml-auto">
            <NavLink className={styles.span} to="/">
              <p className="text-center">Home</p>
            </NavLink>
            <NavLink className={styles.span} to="/about">
              <p className="text-center">About</p>
            </NavLink>
            {loginState ?
              <NavLink className={styles.span} to="/orderhistory">
                <p className="text-center">Order History</p>
              </NavLink>
              : ""}
            <NavLink className={styles.span} to="/login">
              <div className="text-center"> {loginState ? <LogoutButton /> : <LoginButton />} </div>
            </NavLink>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>

    </>
  )
}

export default Navbar;
