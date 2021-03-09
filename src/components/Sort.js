import { useContext } from "react";
import { FilterContext } from "../contexts/FilterContext";
import Dropdown from 'react-bootstrap/Dropdown'

function Sort() {
  const { sort } = useContext(FilterContext);

  const handleChange = (e) => {
    sort(e.target.value);
  };

  return (
    <div className="sort-container col-md-2">
      <span>Sort By :</span>
      {/* <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">
          Sort by:
  </Dropdown.Toggle>

        <Dropdown.Menu onChange={handleChange}>
          <Dropdown.Item as="button" value="make">Mark a-z</Dropdown.Item>
          <Dropdown.Item value="model">Model a-z</Dropdown.Item>
          <Dropdown.Item value="year up">Year ↑</Dropdown.Item>
          <Dropdown.Item value="year down">Year ↓</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}
      <select onChange={handleChange}>
      <option selected>Unsorted</option>
        <option value="make">Mark a-z</option>
        <option value="model">Model a-z</option>
        <option value="year up">Year ↑</option>
        <option value="year down">Year ↓</option>
      </select>
    </div>
  );
}

export default Sort;
