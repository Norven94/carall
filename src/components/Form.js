//Form for Address, shipping alternatives, payment details

import { useHistory } from "react-router-dom";
import Form from 'react-bootstrap/Form'

export default function Form (props) {

  return (
    <Form>
      <Form.Group controlId="formBasicName">
        {/* <Form.Label>Email address</Form.Label> */}
        <Form.Control type="full name" placeholder="Full Name" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
          </Form.Text> */}
      </Form.Group>
      <Form.Group controlId="formBasicAddress">
        <Form.Control type="address" placeholder="Address" />
      </Form.Group>
      <Form.Group controlId="formBasicAddress">
        <Form.Control type="address" placeholder="Address" />
      </Form.Group>
      <Form.Group controlId="formBasicCity">
        <Form.Control type="city" placeholder="City" />
      </Form.Group>
      <Form.Group controlId="formBasicZipCode">
        <Form.Control type="zip code" placeholder="Zip Code" />
      </Form.Group>
      <Form.Group controlId="formBasicCountry">
        <Form.Control type="country" placeholder="Country" />
      </Form.Group>
      <Form.Group controlId="formBasicAddress">
        <Form.Control type="address" placeholder="Address" />
      </Form.Group>
      {['radio'].map((type) => (
      <div key={`inline-${type}`} className="mb-3">
        <Form.Check inline type={type} id={`inline-${type}-1`} />
        <img className={visa} src="/assets/images/visa.png" alt="visa"/>
        <Form.Check inline type={type} id={`inline-${type}-2`} />
        <img className={visa} src="/assets/images/mc.png" alt="mcard"/>
        <Form.Check inline type={type} id={`inline-${type}-3`} />
        <img className={visa} src="/assets/images/applepay.png" alt="applepay"/>
        <Form.Check inline type={type} id={`inline-${type}-4`} />
        <img className={visa} src="/assets/images/swish.png" alt="swish"/>
      </div>
    ))}



    </Form>

  )
}

