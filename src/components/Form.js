//Form for Address, shipping alternatives, payment details

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
      {['checkbox', 'radio'].map((type) => (
      <div key={`inline-${type}`} className="mb-3">
        <Form.Check inline label="1" type={type} id={`inline-${type}-1`} />
        <Form.Check inline label="2" type={type} id={`inline-${type}-2`} />
        <Form.Check
        inline
        disabled
        label="3 (disabled)"
        type={type}
        id={`inline-${type}-3`}
        />
    </div>
    ))}



    </Form>

  )
}

