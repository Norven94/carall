import { useContext, useEffect, useState } from "react"
import { CarContext }from "../contexts/CarContext"
import { FilterContext }from "../contexts/FilterContext"

function Sort() {
  const {sort} = useContext(FilterContext);

  const handleChange = (e) => {
    sort(e.target.value);
  };

  return (         
     
       <div className="sort-container">
        <span>Sort By:</span>
        <select onChange={handleChange}>
          <option value="make">Mark a-z</option>
          <option value="model">Model a-z</option>
          <option value="year up">Year ↑</option>
          <option value="year down">Year ↓</option>
        </select>
      </div>
  )
}

export default Sort