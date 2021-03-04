//Form for Address, shipping alternatives, payment details
import Form from 'react-bootstrap/Form'
import { visa } from "../css/visa.module.css"
import { Col } from 'react-bootstrap'
import { useState } from 'react'

function BillingFields() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [cardnumber, setCardNumber] = useState("");
  const [exdate, setExDate] = useState("");
  const [cvc, setCvc] = useState("");

  const handleNameChangeBilling = (e) => {
    setName(e.target.value);
  };

  const handleAddressChangeBilling = (e) => {
    setAddress(e.target.value);
  };

  const handleCityChangeBilling = (e) => {
    setCity(e.target.value);
  };

  const handleZipChangeBilling = (e) => {
    setZip(e.target.value);
  };

  const handleCountryChangeBilling = (e) => {
    setCountry(e.target.value);
  };

  const handleCardNumberChangeBilling = (e) => {
    setCardNumber(e.target.value);
  }

  const handleExDateChangeBilling = (e) => {
    setExDate(e.target.value);
  }

  const handleCvcChangeBilling = (e) => {
    setCvc(e.target.value);
  }

  return (
    <div>
      {/* Billing Infos fiels here */}
      <h1 className="billing-header">Billing Info</h1>
      <Form>
        <Form.Group as={Col} controlId="formBasicName">
          <Form.Control onChange={handleNameChangeBilling} type="full name" placeholder="Full Name" />
        </Form.Group>
        <Form.Group as={Col} controlId="formBasicAddress">
          <Form.Control onChange={handleAddressChangeBilling} type="address" placeholder="Address" />
        </Form.Group>
        <Form.Row as={Col}>
          <Form.Group as={Col} controlId="formGridCityZip">
            <Form.Control onChange={handleCityChangeBilling} type="city" placeholder="City" />
          </Form.Group>
          <Form.Group controlId="formGridCityZip">
            <Form.Control onChange={handleZipChangeBilling} type="zip code" placeholder="Zip Code" />
          </Form.Group>
        </Form.Row>
        <Form.Group as={Col} controlId="formBasicCountry">
          <Form.Control onChange={handleCountryChangeBilling} type="country" placeholder="Country" />
        </Form.Group >
        <Form.Group as={Col} controlId="formBasicCardNumber">
          <Form.Control onChange={handleCardNumberChangeBilling} type="cardnumber" placeholder="Card Number" />
        </Form.Group >
        <Form.Row as={Col}>
        <Form.Group as={Col} controlId="formBasicExDate">
          <Form.Control onChange={handleExDateChangeBilling} type="exdate" placeholder="00/00" />
        </Form.Group >
        <Form.Group as={Col} controlId="formBasicCvc">
          <Form.Control onChange={handleCvcChangeBilling} type="cvc" placeholder="CVC" />
        </Form.Group >
        </Form.Row>
        <Form.Group as={Col}>
          <img className={visa} src="/assets/images/visa.png" alt="visa" />
          <img className={visa} src="/assets/images/mc.png" alt="mcard" />
          </Form.Group >
      </Form>
    </div>
  )
}

export default BillingFields;

