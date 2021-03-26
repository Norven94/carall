import Form from 'react-bootstrap/Form'
import { Col } from 'react-bootstrap'
import { useContext, useState, useEffect } from 'react'
import { CartContext } from "../contexts/CartContext";

const nameRE = /^[a-zA-ZåäöÅÄÖ\- ]{1,}$/;
const addressRE = /^[a-zA-ZåäöÅÄÖ0-9\- ]{1,}$/;
const cityRE = /^[a-zA-ZåäöÅÄÖ ]{1,}$/;
const zipRE = /^[0-9 ]{5,6}$/;
const countryRE = /^[a-zA-Z]{1,}$/;

function ShippingFields() {
  const { cart, shippingDetails, setShippingDetails, setFormWarning } = useContext(CartContext);

  const [nameError, setNameError] = useState(false)
  const [addressError, setAddressError] = useState(false)
  const [cityError, setCityError] = useState(false)
  const [zipError, setZipError] = useState(false)
  const [countryError, setCountryError] = useState(false)

  const [nameInputDefault, setNameInputDefault] = useState(false)
  const [addressInputDefault, setAddressInputDefault] = useState(false)
  const [cityInputDefault, setCityInputDefault] = useState(false)
  const [zipInputDefault, setZipInputDefault] = useState(false)
  const [countryInputDefault, setCountryInputDefault] = useState(false)

  useEffect(() => {
    if (nameError === false && addressError === false && cityError === false && zipError === false && countryError === false) {
      setFormWarning(false)
    } else {
      setFormWarning(true)
    }
  }, [nameError, addressError, cityError, zipError, countryError])

  const handleNameChangeShipping = (e) => {
    if (e.target.value !== "") {
      setNameInputDefault(true)
      if (!nameRE.test(e.target.value)) {
        setNameError(true)
      } else {
        setNameError(false)
        setShippingDetails({ ...shippingDetails, ShippingName: e.target.value });
      }
    } else {
      setNameInputDefault(false)
    }
  };

  const handleAddressChangeShipping = (e) => {
    if (e.target.value !== "") {
      setAddressInputDefault(true)
      if (!addressRE.test(e.target.value)) {
        setAddressError(true)
      } else {
        setAddressError(false)
        setShippingDetails({ ...shippingDetails, ShippingAddress: e.target.value });
      }
    } else {
      setAddressInputDefault(false)
    }
  };

  const handleCityChangeShipping = (e) => {
    if (e.target.value !== "") {
      setCityInputDefault(true)
      if (!cityRE.test(e.target.value)) {
        setCityError(true)
      } else {
        setCityError(false)
        setShippingDetails({ ...shippingDetails, ShippingCity: e.target.value });
      }
    } else {
      setCityInputDefault(false)
    }
  };

  const handleZipChangeShipping = (e) => {
    if (e.target.value !== "") {
      setZipInputDefault(true)
      if (!zipRE.test(e.target.value)) {
        setZipError(true)
      } else {
        setZipError(false)
        setShippingDetails({ ...shippingDetails, ShippingZip: e.target.value });
      }
    } else {
      setZipInputDefault(false)
    }
  };

  const handleCountryChangeShipping = (e) => {
    if (e.target.value !== "") {
      setCountryInputDefault(true)
      if (!countryRE.test(e.target.value)) {
        setCountryError(true)
      } else {
        setCountryError(false)
        setShippingDetails({ ...shippingDetails, ShippingCountry: e.target.value });
      }
    } else {
      setCountryInputDefault(false)
    }
  };

  const handleAlternativeChangeShipping = (e) => {
    setShippingDetails({ ...shippingDetails, ShippingAlternative: e.target.value });
  };

  let totalCarPrice = cart.reduce((sum, car) => (sum + car.price), 0)

  return (
    <div>
      <h1 className="shipping-header">Shipping Details</h1>
      <Form.Group as={Col} controlId="formBasicName">
        <Form.Control size="sm" onChange={handleNameChangeShipping} className={`${nameInputDefault ? nameError ? "is-invalid" : "is-valid" : ""}`} type="full name" placeholder="Full Name" required />
      </Form.Group>
      <Form.Group as={Col} controlId="formBasicAddress">
        <Form.Control size="sm" onChange={handleAddressChangeShipping} className={`${addressInputDefault ? addressError ? "is-invalid" : "is-valid" : ""}`} type="address" placeholder="Address" required />
      </Form.Group>
      <Form.Row as={Col} className="grid">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Control size="sm" onChange={handleCityChangeShipping} className={`${cityInputDefault ? cityError ? "is-invalid" : "is-valid" : ""}`} type="city" placeholder="City" required />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridZip">
          <Form.Control size="sm" onChange={handleZipChangeShipping} className={`${zipInputDefault ? zipError ? "is-invalid" : "is-valid" : ""}`} type="zip code" placeholder="Zip Code" maxLength="6" required />
        </Form.Group>
      </Form.Row>
      <Form.Group as={Col} controlId="formBasicCountry">
        <Form.Control size="sm" onChange={handleCountryChangeShipping} className={`${countryInputDefault ? countryError ? "is-invalid" : "is-valid" : ""}`} type="country" placeholder="Country" required />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridShipping">
        <Form.Control size="sm" onChange={handleAlternativeChangeShipping} as="select" defaultValue="Shipping" required>
          <option value="">Shipping alternatives...</option>
          <option value="100000">Express (1-2 days) 100000kr</option>
          <option value="25000">Normal (5-7 days) 25000kr</option>
        </Form.Control>
      </Form.Group>
      <p className="cart-price"><b>Car price: </b>{totalCarPrice}Kr</p>
      <p className="cart-price"><b>Shipping price: </b>{shippingDetails.ShippingAlternative}Kr</p>
      <p className="cart-price"><b>Total: </b> {totalCarPrice + + (shippingDetails.ShippingAlternative ? shippingDetails.ShippingAlternative : 0)} Kr</p>
    </div>
  )
}

export default ShippingFields;

