import { useState, useContext } from 'react'
import { FilterContext } from '../contexts/FilterContext'

import styles from '../css/filter.module.css'
import { Col, Row, Form } from 'react-bootstrap'
import RangeSlider from 'react-bootstrap-range-slider'

const FilterRange = () => {
  const { filterPriceStart, filterPriceEnd, filterMilesStart, filterMilesEnd } = useContext(FilterContext);
  const [ priceValue1, setPriceValue1 ] = useState(0);
  const [ priceValue2, setPriceValue2 ] = useState(800000);
  const [ milesValue1, setMilesValue1 ] = useState(1000);
  const [ milesValue2, setMilesValue2 ] = useState(35000);

  const handlePriceValue1 = (e) => {
    console.log(e.target.value)
    setPriceValue1(e.target.value);
    filterPriceStart(e.target.value)
  }

  const handlePriceValue2 = (e) => {
    console.log(e.target.value)
    setPriceValue2(e.target.value);
    filterPriceEnd(e.target.value)
  }

  const handleMilesValue1 = (e) => {
    setMilesValue1(e.target.value);
    filterMilesStart(e.target.value)
  }

  const handleMilesValue2 = (e) => {
    setMilesValue2(e.target.value);
    filterMilesEnd(e.target.value)
  }


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
                <Col xs="9">
                  <RangeSlider value={priceValue1} onChange={handlePriceValue1} min={0} max={800000} step={10000}/>
                </Col>
              </Row>
              <Row>
                <p>max</p>
                <Col xs="9">
                  <RangeSlider value={priceValue2} onChange={handlePriceValue2} min={0} max={800000} step={10000}/>
                </Col>
              </Row>
            </Form.Group>

            <Form.Group>
              <p>Miles</p>
              <Row>
                <p>min</p>
                <Col xs="9">
                  <RangeSlider value={milesValue1} onChange={handleMilesValue1} min={0} max={70000} step={1000}/>
                </Col>
              </Row>
              <Row>
                <p>max</p>
                <Col xs="9">
                  <RangeSlider value={milesValue2} onChange={handleMilesValue2} min={0} max={70000} step={1000}/>
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </div>

      </div>
    </div>
  );
}

export default FilterRange;