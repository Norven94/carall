//Form for Address, shipping alternatives, payment details
import Form from 'react-bootstrap/Form'
import { Col } from 'react-bootstrap'
import { useContext } from 'react'
import { CartContext } from "../contexts/CartContext";

function ShippingFields() {
  const { cart, shippingDetails, setShippingDetails} = useContext(CartContext);

  const handleNameChangeShipping = (e) => {
    setShippingDetails({...shippingDetails, ShippingName: e.target.value});
  };

  const handleAddressChangeShipping = (e) => {
    setShippingDetails({...shippingDetails, ShippingAddress: e.target.value});
  };

  const handleCityChangeShipping = (e) => {
    setShippingDetails({...shippingDetails, ShippingCity: e.target.value});
  };

  const handleZipChangeShipping = (e) => {
    setShippingDetails({...shippingDetails, ShippingZip: e.target.value});
  };

  const handleCountryChangeShipping = (e) => {
    setShippingDetails({...shippingDetails, ShippingCountry: e.target.value});
  };

  const handleAlternativeChangeShipping = (e) => {
    setShippingDetails({...shippingDetails, ShippingAlternative: e.target.value});
  };

  let totalCarPrice = cart.reduce((sum, car) => (sum + car.price), 0 )

  return (
    <div>
      {/* Shipping Details Fields here */}
      <h1 className="shipping-header">Shipping Details</h1>
        <Form.Group as={Col} controlId="formBasicName">
          <Form.Control size="sm" onChange={handleNameChangeShipping} type="full name" placeholder="Full Name" value={shippingDetails.shippingName} required/>
        </Form.Group>
        <Form.Group as={Col} controlId="formBasicAddress">
          <Form.Control size="sm" onChange={handleAddressChangeShipping} type="address" placeholder="Address" value={shippingDetails.shippingAddress} required/>
        </Form.Group>
        <Form.Row as={Col}>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Control size="sm" onChange={handleCityChangeShipping} type="city" placeholder="City" value={shippingDetails.shippingCity} required/>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Control size="sm" onChange={handleZipChangeShipping} type="zip code" placeholder="Zip Code" value={shippingDetails.shippingZip} required/>
          </Form.Group>
        </Form.Row>
        <Form.Group as={Col} controlId="formBasicCountry">
          <Form.Control size="sm" onChange={handleCountryChangeShipping} type="country" placeholder="Country" value={shippingDetails.shippingCountry} required/>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridShipping">
          <Form.Control size="sm" onChange={handleAlternativeChangeShipping} as="select" defaultValue="Shipping" required>
            <option value="0">Shipping alternatives...</option>
            <option value="100000">Express (1-2 days) 100000kr</option>
            <option value="25000">Normal (5-7 days) 25000kr</option>
          </Form.Control>
        </Form.Group>
        <p className="cart-price"><b>Car price: </b>{ totalCarPrice }Kr</p>
        <p className="cart-price"><b>Shipping price: </b>{ shippingDetails.ShippingAlternative }Kr</p>
        <p className="cart-price"><b>Total: </b> { totalCarPrice+ + (shippingDetails.ShippingAlternative ? shippingDetails.ShippingAlternative : 0 )} Kr</p>
     
    </div>

  )
}

export default ShippingFields;

