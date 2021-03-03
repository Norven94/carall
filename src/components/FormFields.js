//Form for Address, shipping alternatives, payment details
import { useHistory } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import { radiobutton } from "../css/radiobutton.module.css"
import { visa } from "../css/visa.module.css"
import { swish } from "../css/swish.module.css"
import { applepay } from "../css/applepay.module.css"
import { Col } from 'react-bootstrap'
import { useContext, useState } from 'react'
import { CarContext } from "../contexts/CarContext";

function FormFields () {
  const history = useHistory();
  // Create a new const variable on CarContext for this orders
  const { addNewOrders } = useContext (CarContext);
  const [feedback, setFeedback] = useState(null);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [button, setButton] = useState("");

  const handleBuy = (e) => {
    e.preventDefault();
    console.log("Bought");

    if (button === "") {
      setFeedback("You must choose an shipping alternatives...");
      setTimeout(() => {
        setFeedback(null);
      }, 3000);
    } else {
      let shopInfos = {
        name,
        address,
        city,
        zip,
        country,
        button,
      }; 
    addNewOrders(shopInfos);
    // Change this route to order confirmation page
    history.push("/About");
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleZipChange = (e) => {
    setZip(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleButtonChange = (e) => {
    setButton(e.target.value);
  };

  return (
    <div>
      {/* Billing Infos fiels here */}
      <h1>Billing Info</h1>
    <Form onSubmit={handleBuy}>
      <Form.Group controlId="formBasicName">
        <Form.Control onChange={handleNameChange} type="full name" placeholder="Full Name" />
      </Form.Group>
      <Form.Group controlId="formBasicAddress">
        <Form.Control onChange={handleAddressChange} type="address" placeholder="Address" />
      </Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCityZip">
            <Form.Control onChange={handleCityChange} type="city" placeholder="City" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCityZip">
            <Form.Control onChange={handleZipChange} type="zip code" placeholder="Zip Code" />
          </Form.Group>
        </Form.Row>
      <Form.Group controlId="formBasicCountry">
        <Form.Control onChange={handleCountryChange} type="country" placeholder="Country" />
      </Form.Group>
      {['radio'].map((type) => (
      <div key={`inline-${type}`} className="mb-3">
        <Form.Check onChange={handleButtonChange} className={radiobutton} inline type={type} id={`inline-${type}-1`} />
        <img className={visa} src="/assets/images/visa.png" alt="visa"/>
        <Form.Check onChange={handleButtonChange} inline type={type} id={`inline-${type}-2`} />
        <img className={visa} src="/assets/images/mc.png" alt="mcard"/>
        <Form.Check onChange={handleButtonChange} inline type={type} id={`inline-${type}-3`} />
        <img className={applepay} src="/assets/images/applepay.png" alt="applepay"/>
        <Form.Check inonChange={handleButtonChange} line type={type} id={`inline-${type}-4`} />
        <img className={swish} src="/assets/images/swish.png" alt="swish"/>
      </div>
    ))}
    
    {/* Shipping Details Fields here */}
    <h1>Shipping Details</h1>
      <Form.Group id="formGridCheckbox">
      <Form.Check type="checkbox" label="Same as billing info" />
    </Form.Group>
    <Form.Group controlId="formBasicName">
        <Form.Control type="full name" placeholder="Full Name" />
      </Form.Group>
      <Form.Group controlId="formBasicAddress">
        <Form.Control type="address" placeholder="Address" />
      </Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCityZip">
            <Form.Control type="city" placeholder="City" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCityZip">
            <Form.Control type="zip code" placeholder="Zip Code" />
          </Form.Group>
        </Form.Row>
      <Form.Group controlId="formBasicCountry">
        <Form.Control type="country" placeholder="Country" />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridShipping">
      <Form.Control as="select" defaultValue="Shipping">
        <option>Shipping alternatives...</option>
        <option>Express (1-2 days) 100000kr</option>
        <option>Normal (5-7 days) 25000kr</option>
      </Form.Control>
    </Form.Group>
    <button className="button">Submit</button>
    </Form>
    <p>Car</p>
    <p>Shipping</p>  
    <p>TOTAL</p>
    <button>Buy</button>
    <p>Have questions? Call us! Monday-Sunday 9-16 +46 777 77 777</p>
    </div>

  )
}

export default FormFields;

