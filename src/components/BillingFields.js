//Form for Address, shipping alternatives, payment details
import Form from 'react-bootstrap/Form'
import { radiobutton } from "../css/radiobutton.module.css"
import { visa } from "../css/visa.module.css"
import { swish } from "../css/swish.module.css"
import { applepay } from "../css/applepay.module.css"
import { Col } from 'react-bootstrap'
import { useState } from 'react'

function BillingFields() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [payment, setPayment] = useState("");

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

  const handleButtonChangeBilling = (e) => {
    console.log(e.target.value)
    setPayment(e.target.value);
  };



  return (
    <div>
      {/* Billing Infos fiels here */}
      <h1>Billing Info</h1>
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
        </Form.Group  >
        {['radio'].map((type) => (
          <div onChange={handleButtonChangeBilling} as={Col} key={`inline-${type}`} className="mb-3">
            <Form.Check className={radiobutton} inline type={type} id={`inline-${type}-1`} />
            <img className={visa} src="/assets/images/visa.png" alt="visa" />
            <Form.Check inline type={type} id={`inline-${type}-2`} />
            <img className={visa} src="/assets/images/mc.png" alt="mcard" />
            <Form.Check inline type={type} id={`inline-${type}-3`} />
            <img className={applepay} src="/assets/images/applepay.png" alt="applepay" />
            <Form.Check line type={type} id={`inline-${type}-4`} />
            <img className={swish} src="/assets/images/swish.png" alt="swish" />
          </div>
        ))}
      </Form>
    </div>
  )
}

export default BillingFields;

