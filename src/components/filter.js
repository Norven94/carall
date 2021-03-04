import { useState } from 'react'
import styles from '../css/filter.module.css'

import { Col, Row, Form } from 'react-bootstrap'


const Filter = () => {
  //price useState
  const [ priceValue1, setPriceValue1 ] = useState(0);
  const [ priceValue2, setPriceValue2 ] = useState(25);
  
  //miles useState
  const [ milesValue1, setMilesValue1 ] = useState(0);
  const [ milesValue2, setMilesValue2 ] = useState(25);

  return (
    <div>
      <div className={styles.dropdown}>
        <button className={styles.dropbtn}>Filter</button>

        <div className={styles.dropdownContent}>
          <Form className={styles.priceFilter}>
            <Form.Group >
              <p>Price</p>
              <Row>
                <p>min</p>
                <Col xs="6">
                  <input type="range" value={priceValue1} onChange={e => setPriceValue1(e.target.value)} min={0} max={50}/>
                </Col>
              </Row>
              <Row>
                <p>max</p>
                <Col xs="6">
                  <input type="range" value={priceValue2} onChange={e => setPriceValue2(e.target.value)} min={0} max={50}/>
                </Col>
              </Row>
            </Form.Group>

            <Form.Group>
              <p>Miles</p>
              <Row>
                <p>min</p>
                <Col xs="6">
                  <input type="range" value={milesValue1} onChange={e => setMilesValue1(e.target.value)} min={0} max={50}/>
                </Col>
              </Row>
              <Row>
                <p>max</p>
                <Col xs="6">
                  <input type="range" value={milesValue2} onChange={e => setMilesValue2(e.target.value)} min={0} max={50}/>
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </div>

      </div>
    </div>
  );
}

export default Filter;