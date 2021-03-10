import { useState, useContext } from 'react'
import { FilterContext } from '../contexts/FilterContext'

import styles from '../css/filter.module.css'
import { Col, Row, Form } from 'react-bootstrap'
import RangeSlider from 'react-bootstrap-range-slider'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
// import * as ReactBootstrap from 'react-bootstrap'

const FilterRange = () => {
  const { filterPriceStart, filterPriceEnd, filterMilesStart, filterMilesEnd } = useContext(FilterContext);
  const [priceValue1, setPriceValue1] = useState(0);
  const [priceValue2, setPriceValue2] = useState(800000);
  const [milesValue1, setMilesValue1] = useState(0);
  const [milesValue2, setMilesValue2] = useState(70000);

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
{/*         
      <DropdownButton id="dropdown-basic-button" title="Filter">
      </DropdownButton> */}
  {/* <Dropdown.Toggle id="dropdown-basic"> */}
    {/* Filter */}
  {/* </Dropdown.Toggle> */}
  
  
        <select className={styles.dropbtn}>
        <option selected className={styles.dropbtn}>Filter</option>
        </select>

        <div className={styles.dropdownContent}>

          <Form className={styles.priceFilter}>
            <p className={styles.p}>Price :</p>
            <Form.Group className={styles.minmax} as={Row}>
              <p>min</p>
              <Col xs="4">
                <RangeSlider variant="dark" className="rangeSlider" value={priceValue1} onChange={handlePriceValue1} min={0} max={800000} step={10000} />
              </Col>
              <p>max</p>
              <Col xs="4">
                <RangeSlider variant="dark" value={priceValue2} onChange={handlePriceValue2} min={0} max={800000} step={10000} />
              </Col>
            </Form.Group>
            <p className={styles.p}>Miles :</p>
            <Form.Group className={styles.minmax} as={Row}>
              <p>min</p>
              <Col xs="4">
                <RangeSlider variant="dark" value={milesValue1} onChange={handleMilesValue1} min={0} max={70000} step={1000} />
              </Col>
              <p>max</p>
              <Col xs="4">
                <RangeSlider variant="dark" value={milesValue2} onChange={handleMilesValue2} min={0} max={70000} step={1000} />
              </Col>
            </Form.Group>
          </Form>
          </div>
        
          
       

      </div>
    </div>
  );
}

export default FilterRange;