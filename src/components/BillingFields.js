//Form for Address, shipping alternatives, payment details
import { visa } from "../css/visa.module.css"
import { Col, Form } from 'react-bootstrap'
import { useContext, useState } from 'react'
import { CartContext } from "../contexts/CartContext";
import styles from '../css/BillingFields.module.css'

function BillingFields() {
  const { billingDetails, setBillingDetails, formWarning, setFormWarning } = useContext(CartContext);
  const [alert, setAlert] = useState(false)

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
    if(e.target.value.length === 2){
      e.target.value += "/";
    }
    if(!formWarning){
      setAlert(true);
    }
    setBillingDetails({...billingDetails, billingExdate: e.target.value});
  }

  const handleCvcChangeBilling = (e) => {
    setBillingDetails({...billingDetails, billingCvc: e.target.value});
  }

  return (
    <div>
      {/* Billing Infos fiels here */}
      <h1 className="billing-header">Billing Info</h1>
        <Form.Group as={Col} controlId="formBasicName">
          <Form.Control size="sm" onChange={handleNameChangeBilling} type="full name" placeholder="Full Name" value={billingDetails.billingName} required />
        </Form.Group>
        <Form.Group as={Col} controlId="formBasicAddress">
          <Form.Control size="sm" onChange={handleAddressChangeBilling} type="address" placeholder="Address" value={billingDetails.billingAddress} required />
        </Form.Group>
        <Form.Row as={Col} className="grid">
          <Form.Group as={Col} controlId="formGridCityZip">
            <Form.Control size="sm" onChange={handleCityChangeBilling} type="city" placeholder="City" value={billingDetails.billingCity} required />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCityZip">
            <Form.Control size="sm" onChange={handleZipChangeBilling} type="zip code" placeholder="Zip Code" value={billingDetails.billingZip} required/>
          </Form.Group>
        </Form.Row>
        <Form.Group as={Col} controlId="formBasicCountry">
          <Form.Control size="sm" onChange={handleCountryChangeBilling} type="country" placeholder="Country" value={billingDetails.billingCountry} required/>
        </Form.Group >
        <Form.Group as={Col} controlId="formBasicCardNumber">
          <Form.Control size="sm" onChange={handleCardNumberChangeBilling} type="cardnumber" placeholder="Card Number" value={billingDetails.billingCardnumber} required/>
        </Form.Group >


        <Form.Row as={Col}  className="grid">
        <Form.Group as={Col} controlId="formBasicExDate">
          <Form.Control size="sm" onChange={handleExDateChangeBilling} className={`${styles.alertColor} ${alert ? styles.isAlert : styles.notAlert}`} type="cc-exp" placeholder="00/00" value={billingDetails.billingExdate} required/>
        </Form.Group >


        <Form.Group as={Col} controlId="formBasicCvc">
          <Form.Control size="sm" onChange={handleCvcChangeBilling} type="cvc" placeholder="CVC" value={billingDetails.billingCvc} required/>
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

