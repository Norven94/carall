//Form for Address, shipping alternatives, payment details
import { visa } from "../css/visa.module.css"
import { Col, Form } from 'react-bootstrap'
import { useContext, useState, useEffect } from 'react'
import { CartContext } from "../contexts/CartContext";
import styles from '../css/BillingFields.module.css'

const expRE=/^[0-9]{2}\/[0-9]{2}$/; 
const cvcRE=/^[0-9]{3}$/; 

function BillingFields() {
  const { billingDetails, setBillingDetails, setFormWarning } = useContext(CartContext);
  const [alert, setAlert] = useState(false)

  const [exDateError, setExDateError] = useState(false)
  const [inputDefault, setInputDefault] = useState(false)

  useEffect(() => {
    if (exDateError === false) {
      setFormWarning(false)
    } else {
      setFormWarning(true)
    }
  },[exDateError])


  const handleNameChangeBilling = (e) => {
    setBillingDetails({...billingDetails, billingName: e.target.value});
  };

  const handleAddressChangeBilling = (e) => {
    setBillingDetails({...billingDetails, billingAddress: e.target.value});
  };

  const handleCityChangeBilling = (e) => {
    setBillingDetails({...billingDetails, billingCity: e.target.value});
  };

  const handleZipChangeBilling = (e) => {
    setBillingDetails({...billingDetails, billingZip: e.target.value});
  };

  const handleCountryChangeBilling = (e) => {
    setBillingDetails({...billingDetails, billingCountry: e.target.value});
  };

  const handleCardNumberChangeBilling = (e) => {
    setBillingDetails({...billingDetails, billingCardnumber: e.target.value});
  }

  const handleExDateChangeBilling = (e) => {
    if (e.target.value !== "") {
      setInputDefault(true)
      if(!expRE.test(e.target.value)){
        console.log('please enter correct info')
        setExDateError(true);
      } else {
        setExDateError(false);
        setBillingDetails({...billingDetails, billingExdate: e.target.value});
      }
    } else {
      setInputDefault(false);
    }
    
     
  }

  const handleCvcChangeBilling = (e) => {
    setBillingDetails({...billingDetails, billingCvc: e.target.value});
  }

  return (
    <div>
      {/* Billing Infos fiels here */}
      <h1 className="billing-header">Billing Info</h1>
        <Form.Group as={Col} controlId="formBasicName">
          <Form.Control size="sm" onChange={handleNameChangeBilling} type="full name" placeholder="Full Name" required />
        </Form.Group>
        <Form.Group as={Col} controlId="formBasicAddress">
          <Form.Control size="sm" onChange={handleAddressChangeBilling} type="address" placeholder="Address" required />
        </Form.Group>
        <Form.Row as={Col} className="grid">
          <Form.Group as={Col} controlId="formGridCityZip">
            <Form.Control size="sm" onChange={handleCityChangeBilling} type="city" placeholder="City" required />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCityZip">
            <Form.Control size="sm" onChange={handleZipChangeBilling} type="zip code" placeholder="Zip Code" required/>
          </Form.Group>
        </Form.Row>
        <Form.Group as={Col} controlId="formBasicCountry">
          <Form.Control size="sm" onChange={handleCountryChangeBilling} type="country" placeholder="Country" required/>
        </Form.Group >
        <Form.Group as={Col} controlId="formBasicCardNumber">
          <Form.Control size="sm" onChange={handleCardNumberChangeBilling} type="cardnumber" placeholder="Card Number" required/>
        </Form.Group >


        <Form.Row as={Col}  className="grid">
        <Form.Group as={Col} controlId="formBasicExDate">
          <Form.Control size="sm" onChange={handleExDateChangeBilling} className={`${styles.alertColor} ${inputDefault ? exDateError ? "is-invalid" : "is-valid" : "" }`} type="tel" placeholder="00/00" required/>
        </Form.Group >


        <Form.Group as={Col} controlId="formBasicCvc">
          <Form.Control size="sm" onChange={handleCvcChangeBilling} type="cvc" placeholder="CVC" required/>
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

