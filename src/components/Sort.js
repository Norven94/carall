import { useContext, useEffect, useState } from "react"
import { CarContext }from "../contexts/CarContext"
import Car from "./Car"
import {Container, Row } from 'react-bootstrap'

function Sort() {
  const {cars} =useContext(CarContext)
  const [sortChoice, setSortChoice] = useState("");

  useEffect(() => {
    let body = document.querySelector("body");
    body.style.background =
      "white"
  }, []);

  const handleChange = (e) => {
    console.log(e.target.value);
    setSortChoice(e.target.value);
  };

  const sortBy = (list, sort) => {
    if (sort === "") return list.sort((a, b) => (a.id > b.id ? 1 : -1));
    return list.sort((a, b) => (a[sort] > b[sort] ? 1 : -1));
  };

  const sortedCars = sortBy(cars, sortChoice);
  return (         
     
       <div className="sort-container">
        <span>Sort By:</span>
        <select onChange={handleChange}>
          <option value="">unsorted</option>
          <option value="make">Mark a-z</option>
          <option value="model">Model a-z</option>
          <option value="year">Year ↑</option>
        </select>
      
      <Container fluid>
        <Row className="d-flex justify-content-center align-content-center flex-wrap">
        {cars && sortedCars.map((car, i)=>(        
          <Car key={i} car={car} />          
          ))}      
        </Row>
      </Container>   
      </div>
  )
}

export default Sort