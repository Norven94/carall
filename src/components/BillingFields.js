//Form for Address, shipping alternatives, payment details
import Form from 'react-bootstrap/Form'
import { visa } from "../css/visa.module.css"
import { Col } from 'react-bootstrap'
import { useContext } from 'react'
import { CartContext } from "../contexts/CartContext";

function BillingFields() {
  const { orderDetails, setOrderDetails } = useContext(CartContext);

  const handleNameChangeBilling = (e) => {
    setOrderDetails({...orderDetails, billingName: e.target.value});
    console.log(orderDetails);
  };

  const handleAddressChangeBilling = (e) => {
    setOrderDetails({...orderDetails, billingAddress: e.target.value});
  };

  const handleCityChangeBilling = (e) => {
    setOrderDetails({...orderDetails, billingCity: e.target.value});
  };

  const handleZipChangeBilling = (e) => {
    setOrderDetails({...orderDetails, billingZip: e.target.value});
  };

  const handleCountryChangeBilling = (e) => {
    setOrderDetails({...orderDetails, billingCountry: e.target.value});
  };

  const handleCardNumberChangeBilling = (e) => {
    setOrderDetails({...orderDetails, billingCardnumber: e.target.value});
  }

  const handleExDateChangeBilling = (e) => {
    setOrderDetails({...orderDetails, billingExdate: e.target.value});
  }

  const handleCvcChangeBilling = (e) => {
    setOrderDetails({...orderDetails, billingCvc: e.target.value});
  }

  return (
    <div>
      {/* Billing Infos fiels here */}
      <h1 className="billing-header">Billing Info</h1>
      <Form>
        <Form.Group as={Col} controlId="formBasicName">
          <Form.Control size="sm" onChange={handleNameChangeBilling} type="full name" placeholder="Full Name" value={orderDetails.billingName} />
        </Form.Group>
        <Form.Group as={Col} controlId="formBasicAddress">
          <Form.Control size="sm" onChange={handleAddressChangeBilling} type="address" placeholder="Address" value={orderDetails.billingAddress} />
        </Form.Group>
        <Form.Row as={Col}>
          <Form.Group as={Col} controlId="formGridCityZip">
            <Form.Control size="sm" onChange={handleCityChangeBilling} type="city" placeholder="City" value={orderDetails.billingCity} />
          </Form.Group>
          <Form.Group as={Col}  controlId="formGridCityZip">
            <Form.Control size="sm" onChange={handleZipChangeBilling} type="zip code" placeholder="Zip Code" value={orderDetails.billingZip} />
          </Form.Group>
        </Form.Row>
        <Form.Group as={Col} controlId="formBasicCountry">
          <Form.Control size="sm" onChange={handleCountryChangeBilling} type="country" placeholder="Country" value={orderDetails.billingCountry} />
        </Form.Group >
        <Form.Group as={Col} controlId="formBasicCardNumber">
          <Form.Control size="sm" onChange={handleCardNumberChangeBilling} type="cardnumber" placeholder="Card Number" value={orderDetails.billingCardnumber}/>
        </Form.Group >
        <Form.Row as={Col}>
        <Form.Group as={Col} controlId="formBasicExDate">
          <Form.Control size="sm" onChange={handleExDateChangeBilling} type="exdate" placeholder="00/00" value={orderDetails.billingExdate}/>
        </Form.Group >
        <Form.Group as={Col} controlId="formBasicCvc">
          <Form.Control size="sm" onChange={handleCvcChangeBilling} type="cvc" placeholder="CVC" value={orderDetails.billingCvc}/>
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

