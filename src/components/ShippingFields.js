//Form for Address, shipping alternatives, payment details
import Form from 'react-bootstrap/Form'
import { Col } from 'react-bootstrap'
import { useState } from 'react'

function ShippingFields() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [shipping, setShipping] = useState("");

  const handleNameChangeShipping = (e) => {
    setName(e.target.value);
  };

  const handleAddressChangeShipping = (e) => {
    setAddress(e.target.value);
  };

  const handleCityChangeShipping = (e) => {
    setCity(e.target.value);
  };

  const handleZipChangeShipping = (e) => {
    setZip(e.target.value);
  };

  const handleCountryChangeShipping = (e) => {
    setCountry(e.target.value);
  };

  const handleAlternativeChangeShipping = (e) => {
    setShipping(e.target.value);
  };

  return (
    <div>
      {/* Shipping Details Fields here */}
      <h1>Shipping Details</h1>
      <Form>
        <Form.Group as={Col} controlId="formBasicName">
          <Form.Control onChange={handleNameChangeShipping} type="full name" placeholder="Full Name" />
        </Form.Group>
        <Form.Group as={Col} controlId="formBasicAddress">
          <Form.Control onChange={handleAddressChangeShipping} type="address" placeholder="Address" />
        </Form.Group>
        <Form.Row as={Col}>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Control onChange={handleCityChangeShipping} type="city" placeholder="City" />
          </Form.Group>
          <Form.Group controlId="formGridZip">
            <Form.Control onChange={handleZipChangeShipping} type="zip code" placeholder="Zip Code" />
          </Form.Group>
        </Form.Row>
        <Form.Group as={Col} controlId="formBasicCountry">
          <Form.Control onChange={handleCountryChangeShipping} type="country" placeholder="Country" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridShipping">
          <Form.Control onChange={handleAlternativeChangeShipping} as="select" defaultValue="Shipping">
            <option>Shipping alternatives...</option>
            <option>Express (1-2 days) 100000kr</option>
            <option>Normal (5-7 days) 25000kr</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </div>

  )
}

export default ShippingFields;

