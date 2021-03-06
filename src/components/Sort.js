import { useContext } from "react";
import { FilterContext } from "../contexts/FilterContext";
import Dropdown from 'react-bootstrap/Dropdown'
import styles from '../css/Sort.module.css'

function Sort() {
  const { sort } = useContext(FilterContext);

  const handleChange = (e) => {
    sort(e.target.value);
  };

  return (
    <div className="sort-container">
      {/* <span>Sort By :</span> */}
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
      <select class="form-select" className={styles.select} onChange={handleChange} aria-label="Default select example">
        <option selected className={styles.sortSelect}>Sort by</option>
        <option className={styles.sortSelect} bg="danger" value="make">Brand</option>
        <option className={styles.sortSelect} value="model">Model a-z</option>
        <option className={styles.sortSelect} value="year up">Year ascending</option>
        <option className={styles.sortSelect} value="year down">Year descending</option>
      </select>
      {/* <select className={styles.select} onChange={handleChange}>
      <option className={styles.sortSelect} selected>Sort</option>
        <option className={styles.sortSelect} bg="danger" value="make">Brand a-z</option>
        <option className={styles.sortSelect} value="model">Model a-z</option>
        <option className={styles.sortSelect} value="year up">Year ascending</option>
        <option className={styles.sortSelect} value="year down">Year descending</option>
      </select> */}
    </div>
  );
}

export default Sort;
