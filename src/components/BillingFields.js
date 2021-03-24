//Form for Address, shipping alternatives, payment details
import { visa } from "../css/visa.module.css"
import { Col, Form } from 'react-bootstrap'
import { useContext, useState, useEffect } from 'react'
import { CartContext } from "../contexts/CartContext";

const nameRE=/^[a-zA-ZåäöÅÄÖ\- ]{1,}$/; 
const addressRE=/^[a-zA-ZåäöÅÄÖ0-9\- ]{1,}$/; 
const cityRE=/^[a-zA-ZåäöÅÄÖ ]{1,}$/; 
const zipRE=/^[0-9 ]{5,6}$/; 
const countryRE=/^[a-zA-Z]{1,}$/; 
const cardNumRE=/^[0-9]{16}$/; 
const expRE=/^[0-9]{2}\/[0-9]{2}$/; 
const cvcRE=/^[0-9]{3}$/; 

function BillingFields() {
  const { billingDetails, setBillingDetails, setFormWarning } = useContext(CartContext);

  const [nameError, setNameError] = useState(false)
  const [addressError, setAddressError] = useState(false)
  const [cityError, setCityError] = useState(false)
  const [zipError, setZipError] = useState(false)
  const [countryError, setCountryError] = useState(false)
  const [cardNumError, setCardNumError] = useState(false)
  const [exDateError, setExDateError] = useState(false)
  const [cvcError, setCvcError] = useState(false)

  const [nameInputDefault, setNameInputDefault] = useState(false)
  const [addressInputDefault, setAddressInputDefault] = useState(false)
  const [cityInputDefault, setCityInputDefault] = useState(false)
  const [zipInputDefault, setZipInputDefault] = useState(false)
  const [countryInputDefault, setCountryInputDefault] = useState(false)
  const [cardNumInputDefault, setCardNumInputDefault] = useState(false)
  const [exDateInputDefault, setExDateInputDefault] = useState(false)
  const [cvcInputDefault, setCvcInputDefault] = useState(false)

  useEffect(() => {
    if (exDateError === false && cvcError === false && cardNumError === false && countryError === false && zipError === false && cityError === false && addressError === false && nameError === false) {
      setFormWarning(false)
    } else {
      setFormWarning(true)
    }
  },[exDateError, cvcError, cardNumError, countryError, zipError, cityError, addressError, nameError])

  const handleNameChangeBilling = (e) => {
    if(e.target.value !== ""){
      setNameInputDefault(true)
      if(!nameRE.test(e.target.value)){
        setNameError(true)
      } else {
        setNameError(false)
        setBillingDetails({...billingDetails, billingName: e.target.value});
      }
    } else {
      setNameInputDefault(false)
    }
  };

  const handleAddressChangeBilling = (e) => {
    if(e.target.value !== ""){
      setAddressInputDefault(true)
      if(!addressRE.test(e.target.value)){
        setAddressError(true)
      } else {
        setAddressError(false)
        setBillingDetails({...billingDetails, billingAddress: e.target.value});
      }
    } else {
      setAddressInputDefault(false)
    }
  };

  const handleCityChangeBilling = (e) => {
    if(e.target.value !== ""){
      setCityInputDefault(true)
      if(!cityRE.test(e.target.value)){
        setCityError(true)
      } else {
        setCityError(false)
        setBillingDetails({...billingDetails, billingCity: e.target.value});
      }
    } else {
      setCityInputDefault(false)
    }
  };

  const handleZipChangeBilling = (e) => {
    if(e.target.value !== ""){
      setZipInputDefault(true)
      if(!zipRE.test(e.target.value)){
        setZipError(true)
      } else {
        setZipError(false)
        setBillingDetails({...billingDetails, billingZip: e.target.value});
      }
    } else {
      setZipInputDefault(false)
    }
  };

  const handleCountryChangeBilling = (e) => {
    if(e.target.value !== ""){
      setCountryInputDefault(true)
      if(!countryRE.test(e.target.value)){
        setCountryError(true)
      } else {
        setCountryError(false)
        setBillingDetails({...billingDetails, billingCountry: e.target.value});
      }
    } else {
      setCountryInputDefault(false)
    }
  };

  const handleCardNumberChangeBilling = (e) => {
    if (e.target.value !== "") {
      setCardNumInputDefault(true)
      if(!cardNumRE.test(e.target.value)){
        setCardNumError(true)
      } else {
        setCardNumError(false)
        setBillingDetails({...billingDetails, billingCardnumber: e.target.value});
      }
    } else {
      setCardNumInputDefault(false);
    }
  }

  const handleExDateChangeBilling = (e) => {
    if (e.target.value !== "") {
      setExDateInputDefault(true)
      if(!expRE.test(e.target.value)){
        setExDateError(true);
      } else {
        setExDateError(false);
        setBillingDetails({...billingDetails, billingExdate: e.target.value});
      }
    } else {
      setExDateInputDefault(false);
    }
  }

  const handleCvcChangeBilling = (e) => {
    if (e.target.value !== "") {
      setCvcInputDefault(true)
      if(!cvcRE.test(e.target.value)){
        setCvcError(true);
      } else {
        setCvcError(false);
        setBillingDetails({...billingDetails, billingCvc: e.target.value});
      }
    } else {
      setCvcInputDefault(false)
    }
  }

  return (
    <div>
      <h1 className="billing-header">Billing Info</h1>
        <Form.Group as={Col} controlId="formBasicName">
          <Form.Control size="sm" onChange={handleNameChangeBilling} className={`${nameInputDefault ? nameError ? "is-invalid" : "is-valid" : ""}` } type="full name" placeholder="Full Name" required />
        </Form.Group>
        <Form.Group as={Col} controlId="formBasicAddress">
          <Form.Control size="sm" onChange={handleAddressChangeBilling} className={`${addressInputDefault ? addressError ? "is-invalid" : "is-valid" : ""}` } type="address" placeholder="Address" required />
        </Form.Group>
        <Form.Row as={Col} className="grid">
          <Form.Group as={Col} controlId="formGridCityZip">
            <Form.Control size="sm" onChange={handleCityChangeBilling} className={`${cityInputDefault ? cityError ? "is-invalid" : "is-valid" : ""}` } type="city" placeholder="City" required />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCityZip">
            <Form.Control size="sm" onChange={handleZipChangeBilling} className={`${zipInputDefault ? zipError ? "is-invalid" : "is-valid" : ""}` } type="zip code" placeholder="Zip Code" maxlength="6" required/>
          </Form.Group>
        </Form.Row>
        <Form.Group as={Col} controlId="formBasicCountry">
          <Form.Control size="sm" onChange={handleCountryChangeBilling} className={`${countryInputDefault ? countryError ? "is-invalid" : "is-valid" : "" }`} type="country" placeholder="Country" required/>
        </Form.Group >
        <Form.Group as={Col} controlId="formBasicCardNumber">
          <Form.Control size="sm" onChange={handleCardNumberChangeBilling} className={`${cardNumInputDefault ? cardNumError ? "is-invalid" : "is-valid" : "" }`} type="cardnumber" placeholder="Card Number" maxlength="16" required/>
        </Form.Group >
        <Form.Row as={Col}  className="grid">
        <Form.Group as={Col} controlId="formBasicExDate">
          <Form.Control size="sm" onChange={handleExDateChangeBilling} className={`${exDateInputDefault ? exDateError ? "is-invalid" : "is-valid" : "" }`} type="tel" placeholder="00/00" maxlength="5" required/>
        </Form.Group >
        <Form.Group as={Col} controlId="formBasicCvc">
          <Form.Control size="sm" onChange={handleCvcChangeBilling} className={`${cvcInputDefault ? cvcError ? "is-invalid" : "is-valid" : "" }`} type="cvc" placeholder="CVC" maxlength="3" required/>
        </Form.Group >
        </Form.Row>
        <Form.Group as={Col}>
          <img className={visa} src="/assets/images/visa.png" alt="visa" />
          <img className={visa} src="/assets/images/mc.png" alt="mcard" />
          </Form.Group >
    </div>
  )
}

export default BillingFields;