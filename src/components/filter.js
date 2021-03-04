import { Form } from 'react-bootstrap'

const filter = () => {
  return (
    <div className="filter">
      <Form>
        <Form.Group controlId="formBasicRange">
          <Form.Label>Price</Form.Label>
          <Form.Control type="range" />
        </Form.Group>
        <Form.Group controlId="formBasicRange">
          <Form.Label>Miles</Form.Label>
          <Form.Control type="range" />
        </Form.Group>
      </Form>
    </div>
  );
}

export default filter;